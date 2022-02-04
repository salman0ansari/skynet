// let fetch = require('node-fetch')
// let timeout = 120000
// let poin = 500
// let handler = async (m, { conn, usedPrefix }) => {
//     conn.skipjack = conn.skipjack ? conn.skipjack : {}
//     let id = m.chat
//     if (id in conn.skipjack) {
//         conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.skipjack[id][0])
//         throw false
//     }
//     let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/skipjack.json')).json()
//     let json = src[Math.floor(Math.random() * src.length)]
//     let caption = `
// ${json.soal}

// Timeout *${(timeout / 1000).toFixed(2)} second*
// Type ${usedPrefix}scalper for help
// Bonus: ${poin} XP
// `.trim()
//     conn.skipjack[id] = [
//         await conn.reply(m.chat, caption, m),
//         json, poin,
//         setTimeout(async () => {
//             if (conn.skipjack[id]) await conn.reply(m.chat, `Time is up!\nThe answer is
//             *${json.jawaban}*\n${json.deskripsi}`, m)
//             delete conn.skipjack[id]
//         }, timeout)
//     ]
// }
// handler.help = ['skipjack']
// handler.tags = ['game']
// handler.owner = true
// handler.command = /^skipjack/i
// module.exports = handler