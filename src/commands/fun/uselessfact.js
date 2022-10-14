import axios from "axios"
import { config } from "../../../config.js"

export default {
	name: "fact",
	alias: ["uselessfact"],
	category: "fun",
	desc: "get a random useless fact",
	async exec({ msg, sock }) {
		const { data } = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en")
		let buttons = [
			{ quickReplyButton: { displayText: "➡️ Next", id: `!fact` } },
		];
		return await sock.sendMessage(
			msg.from,
			{
				text: data.text,
				templateButtons: buttons,
				footer: config.footer,
			},
			{ quoted: msg }
		);
	},
};