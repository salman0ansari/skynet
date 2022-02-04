// let { MessageType } = require('@adiwajshing/baileys-md')
// let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) =>  {
//     let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Wrong format :v', 'error bro', 'Funny error :v', 'wtf error :v', 'Caaa error', 'error cuyy', 'bye (rock emotico) error']))
//     try {
//         let msgkurang = (pickRandom(['your potion is not enough', 'ciaa not enough potions :v', 'wtf not enough :v', 'buy potions first, your potion is not enough        ', 'Your two potions arent enough', 'eyyyy your potion is lacking', 'buy it first, I want to use potions but there are no potions :v', 'ask someone else to transfer the potion, so that your potion is not lacking  :v', 'Buy potions first KK']))
//         let msgpenuh = (pickRandom(['Your life is full', 'take a look at your inv, your life is already 100 why use potions again?', 'your health is full wow', 'ws kebek weh :v', 'your life is full :v', 'uh huh, already full']))
//         let cat = global.db.data.users[m.sender].cat
//         let usepotion = (cat == 0 ? 40 : '' || cat == 1 ? 45 : '' || cat == 2 ? 50 : '' || cat == 3 ? 55 : '' || cat == 4 ? 60 : '' || cat == 5 ? 65 : '' || cat == 6 ? 70 : '' || cat == 7 ? 75 : '' || cat == 8 ? 80 : '' || cat == 9 ? 85 : '' || cat == 10 ? 90 : '')
//         let healt = global.db.data.users[m.sender].healt
//         if (/use|pakai/i.test(command)) {
//             try {
//                 let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
//                  let msgsucces = (pickRandom(['success use', 'Nice succes use', 'managed to drink ', 'your primitive use', 'you wear', 'wear use']) + ' *' + (count * 1) + '* Potion')
//                  if (args[0] === 'potion') {
//                     if (global.db.data.users[m.sender].healt < 100) {
//                         if (global.db.data.users[m.sender].potion >= count * 1) {
//                             global.db.data.users[m.sender].potion -= count * 1
//                             global.db.data.users[m.sender].healt += usepotion * count
//                             conn.reply(m.chat, msgsucces, m)
//                         } else conn.reply(m.chat, msgkurang, m)
//                     } else conn.reply(m.chat, msgpenuh, m)
//                 } else if (args.length > 2 && args[0] === !'potion') m.reply(pickRandom(['Can only use potions', 'What do you want to do? Can only use potions :v', 'Wow, what do you want to use, you can only do potions', 'Waduheck, can only potion', 'well, what do you want to use?, can only potions']) + '\nUsage examples: *' + usedPrefix + 'potion 1*')
//             } catch (e) {
//                 console.log(e)
//                 m.reply(msgerror)
//                 if (DevMode) {
//                     let file = require.resolve(__filename)
//                     for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
//                         conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
//                     }
//                 }
//             }
//         } else if (/heal/i.test(command)) {
//             try {
//                 let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
//                 let msgsucces = (pickRandom(['success wearing', 'Nice success using                ', 'managed to drink ', 'primitive you use', 'you wear', 'you use']) + ' *' + (count * 1) + '* Potion')
//                 if (global.db.data.users[m.sender].healt < 100) {
//                     if (global.db.data.users[m.sender].potion >= count * 1) {
//                         global.db.data.users[m.sender].potion -= count * 1
//                         global.db.data.users[m.sender].healt += usepotion * count
//                         conn.reply(m.chat, msgsucces, m)
//                     } else conn.reply(m.chat, msgkurang, m)
//                 } else conn.reply(m.chat, msgpenuh, m)
//             } catch (e) {
//                 console.log(e)
//                 m.reply(msgerror)
//                 if (DevMode) {
//                     let file = require.resolve(__filename)
//                     for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
//                         conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
//                     }
//                 }
//             }
//         }
//     } catch (e) {
//         console.log(e)
//         conn.reply(m.chat, msgerror, m)
//         if (DevMode) {
//             let file = require.resolve(__filename)
//             for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
//                 conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
//             }
//         }
//     }
// }

// handler.help = ['use <item> <total>', 'heal']
// handler.tags = ['rpg']
// handler.command = /^(use|heal)$/i
// handler.group = true

// module.exports = handler

// function pickRandom(list) {
//     return list[Math.floor(Math.random() * list.length)]
// }
