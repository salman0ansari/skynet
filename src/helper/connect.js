import makeWASocket, {
	fetchLatestBaileysVersion,
} from "@adiwajshing/baileys";
import BaileysBottle from "baileys-bottle"
import Pino from "pino"
import { config } from "../../config.js";
import chatHandler from "../handler/chat.js";
import connectionHandler from "../handler/connection.js";

const main = async () => {

	const { auth, store } = await BaileysBottle.default({
		type: "sqlite",
		database: `${config.botname}.sql`,
	});

	const { state, saveState } = await auth.useAuthHandle();

	const connect = async () => {

		let { version } = await fetchLatestBaileysVersion();
		const sock = makeWASocket.default({
			printQRInTerminal: true,
			auth: state,
			logger: Pino({ level: "silent" }),
			version,
		});
		store.bind(sock.ev);

		sock.ev.process(
			async (events) => {

				if (events['creds.update']) await saveState();

				if (events['connection.update']) {
					const update = events['connection.update'];
					connectionHandler(update, sock, connect);
				};

				if (events["messages.upsert"]) {
					const m = events['messages.upsert'];
					chatHandler(m, sock);
				}
			}
		)
	};
	connect();
}

export {
	main
};