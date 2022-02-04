// let handler = async (m, { isOwner, text, isAdmin }) => {
//   let who
//   if (m.isGroup) {
//     if (!(isAdmin || isOwner)) {
//       global.dfail('admin', m, conn)
//       throw false
//     }
//     if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
//     who = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
//   } else {
//     if (!isOwner) {
//       global.dfail('owner', m, conn)
//       throw false
//     }
//     who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
//   }
//   try {
//     if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = false
//     else global.db.data.users[who].banned = false
//     m.reply(`Done Unban! Bot active in chat ${await conn.getName(who) == undefined ? 'this' : await conn.getName(who)}.`)
//   } catch (e) {
//     throw `number does not exist in the database!`
//   }
// }
// handler.help = ['unban']
// handler.tags = ['owner', 'group']
// handler.owner = true
// handler.command = /^unban(chat)?$/i

// module.exports = handler
