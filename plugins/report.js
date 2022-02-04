let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `If you find an error message, report it using this command\n\nExample:\n${usedPrefix + command} 
    I found an error like the following
    <copy/tag the error message>`
    if (text.length < 10) throw `The report is too short, at least 10 characters!`
    if (text.length > 1000) throw `Report is too long, 1000 characters max!`
    let teks = `*${command.toUpperCase()}!*\n\From : *@${m.sender.split`@`[0]}*\n\Message : ${text}\n`
    conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Message sent to the owner of the bot, if ${command.toLowerCase()} just messing around will not be responded to._`)
}
handler.help = ['report', 'request'].map(v => v + ' <text>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
module.exports = handler
