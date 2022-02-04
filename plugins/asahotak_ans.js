// const similarity = require('similarity')
// const threshold = 0.72
// let handler = m => m
// handler.before = async function (m) {
//     let id = m.chat
//     if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*ao/i.test(m.quoted.text)) return !0
//     this.brainteaser = this.brainteaser ? this.brainteaser : {}
//     if (!(id in this.brainteaser)) return m.reply('The matter has ended')
//     if (m.quoted.id == this.brainteaser[id][0].id) {
//         let json = JSON.parse(JSON.stringify(this.brainteaser[id][1]))
//         // m.reply(JSON.stringify(json, null, '\t'))
//         if (m.text.toLowerCase() == json.result.jawaban.toLowerCase().trim()) {
//             global.db.data.users[m.sender].exp += this.brainteaser[id][2]
//             m.reply(`*Right!*\n+${this.brainteaser[id][2]} XP`)
//             clearTimeout(this.brainteaser[id][3])
//             delete this.brainteaser[id]
//         } else if (similarity(m.text.toLowerCase(), json.result.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Few More!*`)
//         else m.reply(`*Wrong!*`)
//     }
//     return !0
// }
// handler.exp = 0

// module.exports = handler