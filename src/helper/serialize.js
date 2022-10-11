// import { proto, getContentType, jidDecode, downloadContentFromMessage } from "@adiwajshing/baileys"
import pkg from '@adiwajshing/baileys';
const { proto, getContentType, jidDecode, downloadContentFromMessage } = pkg;


const downloadMedia = (message, pathFile) =>
	new Promise(async (resolve, reject) => {
		const type = Object.keys(message)[0];
		let mimeMap = {
			imageMessage: "image",
			videoMessage: "video",
			stickerMessage: "sticker",
			documentMessage: "document",
			audioMessage: "audio",
		};
		try {
			if (pathFile) {
				const stream = await downloadContentFromMessage(message[type], mimeMap[type]);
				let buffer = Buffer.from([]);
				for await (const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk]);
				}
				await fs.promises.writeFile(pathFile, buffer);
				resolve(pathFile);
			} else {
				const stream = await downloadContentFromMessage(message[type], mimeMap[type]);
				let buffer = Buffer.from([]);
				for await (const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk]);
				}
				resolve(buffer);
			}
		} catch (e) {
			reject(e);
		}
});

const decodeJid = (jid) => {
	if (/:\d+@/gi.test(jid)) {
		const decode = jidDecode(jid) || {};
		return ((decode.user && decode.server && decode.user + "@" + decode.server) || jid).trim();
	} else return jid.trim();
};

export default function serialize(msg, sock) {
	if (msg.key) {
		msg.id = msg.key.id;
		msg.isSelf = msg.key.fromMe;
		msg.from = decodeJid(msg.key.remoteJid);
		msg.isGroup = msg.from.endsWith("@g.us");
		msg.sender = msg.isGroup ? decodeJid(msg.key.participant) : msg.isSelf ? decodeJid(sock.user.id) : msg.from;
	}
	if (msg.message) {
		msg.type = getContentType(msg.message);
		if (msg.type === "ephemeralMessage") {
			msg.message = msg.message[msg.type].message;
			const tipe = Object.keys(msg.message)[0];
			msg.type = tipe;
			if (tipe === "viewOnceMessage") {
				msg.message = msg.message[msg.type].message;
				msg.type = getContentType(msg.message);
			}
		}
		if (msg.type === "viewOnceMessage") {
			msg.message = msg.message[msg.type].message;
			msg.type = getContentType(msg.message);
		}

		msg.mentions = msg.message[msg.type]?.contextInfo ? msg.message[msg.type]?.contextInfo.mentionedJid : null;
		try {
			const quoted = msg.message[msg.type]?.contextInfo;
			if (quoted.quotedMessage["ephemeralMessage"]) {
				const tipe = Object.keys(quoted.quotedMessage.ephemeralMessage.message)[0];
				if (tipe === "viewOnceMessage") {
					msg.quoted = {
						type: "view_once",
						stanzaId: quoted.stanzaId,
						participant: decodeJid(quoted.participant),
						message: quoted.quotedMessage.ephemeralMessage.message.viewOnceMessage.message,
					};
				} else {
					msg.quoted = {
						type: "ephemeral",
						stanzaId: quoted.stanzaId,
						participant: decodeJid(quoted.participant),
						message: quoted.quotedMessage.ephemeralMessage.message,
					};
				}
			} else if (quoted.quotedMessage["viewOnceMessage"]) {
				msg.quoted = {
					type: "view_once",
					stanzaId: quoted.stanzaId,
					participant: decodeJid(quoted.participant),
					message: quoted.quotedMessage.viewOnceMessage.message,
				};
			} else {
				msg.quoted = {
					type: "normal",
					stanzaId: quoted.stanzaId,
					participant: decodeJid(quoted.participant),
					message: quoted.quotedMessage,
				};
			}
			msg.quoted.isSelf = msg.quoted.participant === decodeJid(sock.user.id);
			msg.quoted.mtype = Object.keys(msg.quoted.message).filter(
				(v) => v.includes("Message") || v.includes("conversation")
			)[0];
			msg.quoted.text =
				msg.quoted.message[msg.quoted.mtype]?.text ||
				msg.quoted.message[msg.quoted.mtype]?.description ||
				msg.quoted.message[msg.quoted.mtype]?.caption ||
				msg.quoted.message[msg.quoted.mtype]?.hydratedTemplate?.hydratedContentText ||
				msg.quoted.message[msg.quoted.mtype] ||
				"";
			msg.quoted.key = { id: msg.quoted.stanzaId, fromMe: msg.quoted.isSelf, remoteJid: msg.from };
			msg.quoted.delete = () => sock.sendMessage(msg.from, { delete: msg.quoted.key });
			msg.quoted.download = (pathFile) => downloadMedia(msg.quoted.message, pathFile);
		} catch {
			msg.quoted = null;
		}
		msg.body =
			msg.message?.conversation ||
			msg.message?.[msg.type]?.text ||
			msg.message?.[msg.type]?.caption ||
			(msg.type === "listResponseMessage" && msg.message?.[msg.type]?.singleSelectReply?.selectedRowId) ||
			(msg.type === "buttonsResponseMessage" &&
				msg.message?.[msg.type]?.selectedButtonId?.includes("SMH") &&
				msg.message?.[msg.type]?.selectedButtonId) ||
			(msg.type === "templateButtonReplyMessage" && msg.message?.[msg.type]?.selectedId) ||
			"";
		msg.reply = (text) => sock.sendMessage(msg.from, { text }, { quoted: msg });
		msg.download = (pathFile) => downloadMedia(msg.message, pathFile);
	}
	return msg;
}