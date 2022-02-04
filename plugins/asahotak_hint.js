// let handler = async (m, { conn }) => {
//     conn.brainteaser = conn.brainteaser ? conn.brainteaser : {}
//     let id = m.chat
//     if (!(id in conn.brainteaser)) throw false
//     let json = conn.brainteaser[id][1]
//     let ans = json.result.jawaban
//     let clue = ans.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
//     m.reply('```' + clue + '```')
// }
// handler.command = /^ao$/i
// handler.limit = true
// module.exports = handler
