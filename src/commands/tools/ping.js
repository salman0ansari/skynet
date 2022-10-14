import calculatePing from "../../utils/calculatePing.js";

export default {
	name: "ping",
	category: "tools",
	desc: "check how long it takes to ping your userbot",
	async exec({ msg }) {
		await msg.reply(`*PONG!*\n*_${calculatePing(msg.messageTimestamp, Date.now())} second(s)_*`);
	},
};