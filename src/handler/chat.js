import color from "../utils/color.js";
import serialize from "../helper/serialize.js";
import { Collection as djs } from "../helper/collection.js"
import { config } from "../../config.js"
import { printLog } from "../utils/printLog.js";

export default async function chatHandler(m, sock) {
    
    const prefix = config.prefix
    const owner = config.owner

    const multiPref = new RegExp("^[" + "!#".replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + "]");

    try {
        if (m.type !== "notify") return;
        let msg = serialize(JSON.parse(JSON.stringify(m.messages[0])), sock);
        if (!msg.message) return;
        if (msg.key && msg.key.remoteJid === "status@broadcast") return;
        if (
            msg.type === "protocolMessage" ||
            msg.type === "senderKeyDistributionMessage" ||
            !msg.type ||
            msg.type === ""
        )
            return;

        let { body } = msg;
        const { isGroup, sender, from } = msg;
        const gcMeta = isGroup ? await sock.groupMetadata(from) : "";
        const gcName = isGroup ? gcMeta.subject : "";
        const isOwner = owner.includes(sender) || msg.isSelf;

        let tempPref = multiPref.test(body) ? body.split("").shift() : "!";
        if (body === "prefix" || body === "prefix?") {
            msg.reply(`Bot Prefix is \n **${prefix}**`);
        }
        if (body) {
            body = body.startsWith(tempPref) ? body : "";
        } else {
            body = "";
        }

        const arg = body.substring(body.indexOf(" ") + 1);
        const args = body.trim().split(/ +/).slice(1);
        const isCmd = body.startsWith(tempPref);

        // Log
        printLog(isCmd, sender, gcName, isGroup);

        const cmdName = body.slice(tempPref.length).trim().split(/ +/).shift().toLowerCase();
        const cmd = djs.commands.get(cmdName) || djs.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName));
        if (!cmd) return;


        if (cmd.owner && !isOwner) {
            return await msg.reply("You are not my owner");
        }

        try {
            if (m.type === 'notify') {
                for (const msg of m.messages) {
                    if (!msg.key.fromMe) {
                        await sock.readMessages([msg.key]);
                    }
                }
            }
            cmd.exec({ sock, msg, args, arg, isOwner });
        } catch (e) {
            console.error(e);
        }
    } catch (e) {
        console.log(
            color("[ERR]", "red"),
            e.stack + "\nerror while handling chat event, might some message not answered"
        );
    }
};
