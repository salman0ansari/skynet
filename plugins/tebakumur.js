// /**
// * cuma mau bilang terimakasih ama https://github.com/uhdahlah
// **/


// let axios = require("axios");
// let handler = async(m, { conn, text }) => {

//     if (!text) return conn.reply(m.chat, 'Enter the text', m)

//     await m.reply('Searching...')
// 	axios.get(`http://lolhuman.herokuapp.com/api/tebakage?apikey=31caf10e4a64e86c1a92bcba&name=${text}`).then ((res) => {
// 	 	let hasil = `Namamu : ${text}\nUmurmu : ${res.data.result.age}`

//     conn.reply(m.chat, hasil, m)
// 	})
// }
// handler.help = ['tebakage'].map(v => v + ' <name>')
// handler.tags = ['internet', 'fun']
// handler.command = /^(tebakage)$/i
// handler.owner = false
// handler.mods = false
// handler.premium = false
// handler.group = false
// handler.private = false

// handler.admin = false
// handler.botAdmin = false

// handler.fail = null
// handler.exp = 0
// handler.limit = true
// // https://github.com/uhdahlah
// module.exports = handler
