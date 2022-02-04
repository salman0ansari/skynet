let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let setting = global.db.data.settings
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) { 
    case 'antilink':
    case 'antiurl':
    case 'antispam':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.antiLink = isEnable
      break
    case 'backup':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.backup = isEnable
      break
    case 'nsfw':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.nsfw = isEnable
      break
    default:
      if (!/[01]/.test(command)) throw `
┌〔 Option List 〕${isOwner ? '\n├ antispam\n├ backup\n├ grouponly\n├ nsfw\n├ antilink\n' : ''}
└────
Example:
${usedPrefix}on nsfw
${usedPrefix}off nsfw
`.trim()
      throw false
  }
  m.reply(`
*${type}* successful in *${isEnable ? 'flame' : 'dead'}right* ${isAll ? 'for this bot' : isUser ? '' : 'for this chat'}
`.trim())
}
handler.help = ['on', 'off'].map(v => v + ' <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
handler.owner = true
module.exports = handler
