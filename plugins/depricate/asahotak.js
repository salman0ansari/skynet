// let fetch = require('node-fetch')

// let timeout = 120000
// let poin = 500
// let handler = async (m, { conn, usedPrefix }) => {
//     conn.brainteaser = conn.brainteaser ? conn.brainteaser : {}
//     let id = m.chat
//     if (id in conn.brainteaser) {
//         conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.brainteaser[id][0])
//         throw false
//     }
//     let res = await fetch(global.API('xteam', '/game/brainteaser', {}, 'APIKEY'))
//     if (res.status !== 200) throw await res.text()
//     let json = await res.json()
//     if (!json.status) throw json
//     let caption = `
// ${json.result.soal}
// Timeout *${(timeout / 1000).toFixed(2)} second*
// Type ${usedPrefix} for help
// Bonus: ${poin} XP
// `.trim()
//     conn.brainteaser[id] = [
//         await conn.reply(m.chat, caption, m),
//         json, poin,
//         setTimeout(() => {
//             if (conn.brainteaser[id]) conn.reply(m.chat, `Time is up!\nThe answer is *${json.result.jawaban}*`, conn.brainteaser[id][0])
//             delete conn.brainteaser[id]
//         }, timeout)
//     ]
// }
// handler.help = ['brainteaser']
// handler.tags = ['game']
// handler.command = /^brainteaser/i

// module.exports = handler
