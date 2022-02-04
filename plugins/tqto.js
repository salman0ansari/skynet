/**
* jangan dihapus/diganti ya kontol
* lu itu cuma make jadi jangan diapa apain ya bangsat
* mending lu tambahin deh name lu jangan hapus kreditnya
**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `
*BIG THANKS TO*

Mohd Salman Ansari ⟠:
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: tqto,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/tqto.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '💠 Source Code (Closed)',
               url: 'https://github.com/torvalds/linux'
             }

           },
           {
             quickReplyButton: {
               displayText: 'HELP',
               id: '.help',
             }
           },
               {
             quickReplyButton: {
               displayText: 'MENU',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits|credit|tqto)$/i

module.exports = handler
