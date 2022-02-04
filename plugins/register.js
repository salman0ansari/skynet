// const { createHash } = require('crypto')
// let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
// let handler = async function (m, { text, usedPrefix, command }) {
//   let user = global.db.data.users[m.sender]
//   if (user.registered === true) throw `You are already registered\nWant to re-register? ${usedPrefix}unreg <SERIAL NUMBER>`
//   if (!Reg.test(text)) throw `example:\n*${usedPrefix + command} name.age*`
//   let [_, name, splitter, age] = text.match(Reg)
//   if (!name) throw 'Name cannot be empty (Alphanumeric)'
//   if (!age) throw 'Age cant be empty (Number)'
//   age = parseInt(age)
//   if (age > 30) throw 'Youre an old dog'
//   if (age < 5) throw 'Want to get banned?'
//   user.name = name.trim()
//   user.age = age
//   user.regTime = + new Date
//   user.registered = true
//   let sn = createHash('md5').update(m.sender).digest('hex')
//   let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
//   m.reply(`
// ━━━━ 「 *Successful Registration* 」━━━━

// ╭─• 〘 INFO 〙
// │➥ Name: ${name}
// │➥ Age: ${age} Year
// │➥ Hadiah: ${prems.includes(who.split`@`[0]) ? '✅ SPlease chat the owner to claim the prize' : '❌ Not a Premium User'}
// ╰──────•

// Type *.sn* to get SERIAL NUMBER\n
// sn used to unregister
// `.trim())
// }
// handler.help = ['daftar', 'register'].map(v => v + ' <name>.<age>')
// handler.tags = ['xp', 'main']

// handler.command = /^(daftar|reg(ister)?)$/i

// module.exports = handler
