import { Collection as djs } from "../../helper/collection.js";
import { config } from "../../../config.js"

export default {
	name: "help",
	alias: ["h", "cmd", "menu"],
	category: "general",
	async exec({ sock, msg, args, isOwner }) {

		const botName = config.botname

		if (args[0]) {
			const data = [];
			const name = args[0].toLowerCase();
			const { commands, prefix } = djs;
			const cmd = commands.get(name) || commands.find((cmd) => cmd.alias && cmd.alias.includes(name));
			if (!cmd || (cmd.category === "private" && !isOwner)) return await msg.reply("No command found");
			else data.push(`*Cmd:* ${cmd.name}`);
			if (cmd.alias) data.push(`*Alias:* ${cmd.alias.join(", ")}`);
			if (cmd.desc) data.push(`*Description:* ${cmd.desc}`);
			if (cmd.use)
				data.push(
					`*Usage:* \`\`\`${prefix}${cmd.name} ${cmd.use}\`\`\`\n\nNote: [] = optional, | = or, <> = must filled`
				);

			return await msg.reply(data.join("\n"));
		} else {
			const { pushName, sender } = msg;
			const { prefix, commands } = djs;
			const cmds = commands.keys();
			let category = [];

			for (let cmd of cmds) {
				let info = commands.get(cmd);
				if (!cmd) continue;
				if (!info.category || info.category === "private" || info.owner) continue;
				if (Object.keys(category).includes(info.category)) category[info.category].push(info);
				else {
					category[info.category] = [];
					category[info.category].push(info);
				}
			}
			let str =
				`Hello, ${pushName === undefined ? sender.split("@")[0] : pushName}\n*Here My Command List*\n\n` +
				`╭──────❨ *${botName}* ❩\n╰─────────\n`+
				"\n";
			const keys = Object.keys(category);
			for (const key of keys) {
				str += `╭──────❨ *${key.toUpperCase()}* ❩\n\`\`\`${category[key]
					.map(
						(cmd, idx) =>
							`├ ${idx + 1}. ${cmd.name} ${cmd.alias ? `(${cmd.alias.join(", ")})` : "" }`
					)
					.join("\n")}\`\`\`\n╰──────────────\n`;
			}
			str += `send *${prefix}help* followed by a command name to get detail of command, e.g. \n*${prefix}help* sticker`;
			await sock.sendMessage(msg.from, { text: str });
		}
	},
};