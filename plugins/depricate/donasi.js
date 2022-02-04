// /**
//  * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
//  * MENDING KALIAN TAMBAHIN NOMOR KALIAN
// */

// const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
// let handler = async (m) => {
// let duit = `*────── 「 DONATE 」 ──────*

// Hi 👋
// You guys can support me to keep this bot up to date with:
// ┌〔 Donation • E-money 〕
// ├🏧 0886011xxxx (change this to your number)
// ├📍 https://example.com
// └────
// Any amount of your donation will mean a lot 👍

// Arigatou!

// Contact person Owner:
// wa.me/15067149495 (Owner)`
// let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/15466dd438e79bfccabcc.jpg' }}, { upload: conn.waUploadToServer })
//      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
//      templateMessage: {
//          hydratedTemplate: {
//            imageMessage: message.imageMessage,
//            hydratedContentText: duit,
//            hydratedFooterText: wm,
//            hydratedButtons: [{
//              urlButton: {
//                displayText: '🏧 Skynet',
//                url: 'https://github.com/salman0ansari'
//              }

//            },
//                {
//              callButton: {
//                displayText: 'Number',
//                phoneNumber: '+15067149495'
//              }
//            },           
//                {
//              quickReplyButton: {
//                displayText: '🧒 Owner',
//                id: '.owner',
//              }

//            }]
//          }
//        }
//      }), { userJid: m.sender, quoted: m });
//     //conn.reply(m.chat, text.trim(), m)
//     return await conn.relayMessage(
//          m.chat,
//          template.message,
//          { messageId: template.key.id }
//      )
// }

// handler.help = ['donasi']
// handler.tags = ['info']
// handler.command = /^dona(te|si)|bagiduit$/i
// handler.owner = true
// module.exports = handler
