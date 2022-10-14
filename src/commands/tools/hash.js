import { createHash } from 'crypto'

export default {
    name: "hash",
    category: "tools",
    desc: "Find the md5, sha1, sha256, sha512 of the string",
    async exec({ msg, args, }) {
        const { quoted, type } = msg
        if (!args.length > 0) return await msg.reply("No args given to hash");
        if (quoted && type === "extendedTextMessage") {
            return await msg.reply(`*Input:*\n${quoted.text}\n` + "*Output:*\n" + createHash(args[0]).update(quoted.text).digest('hex'))
        } else if (args.length > 0) {
            try {
                let type = args[0]
                console.log(type)
                switch (type) {
                    case "md5":
                        return await msg.reply(`*Input:*\n${args[1]}\n` + "*Output:*\n" + createHash('md5').update(args[1]).digest('hex'))
                    case "sha256":
                        return await msg.reply(`*Input:*\n${args[1]}\n` + "*Output:*\n" + createHash('sha256').update(args[1]).digest('hex'))
                    default:
                        return await msg.reply("Error: \nInvalid hash type choose from md5, sha256")
                }
            } catch (error) {
                await msg.reply("Error: \nOnly text messages are supported")
                return
            }
        }
    },
};