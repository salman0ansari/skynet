// let handler = async (m, { conn }) => {
//   let LastClaim = global.db.data.users[m.sender].lastclaim
// let cdm = `${MeNit(new Date - LastClaim)}`
// let cds = `${DeTik(new Date - LastClaim)}`
// let cd1 = Math.ceil(44 - cdm)
// let cd2 = Math.ceil(59 - cds)
//   if (new Date - global.db.data.users[m.sender].lastclaim > 2700000) {
//     global.db.data.users[m.sender].money += 7000
//     m.reply('Heres your wage +Rp7000')
//     global.db.data.users[m.sender].lastclaim = new Date * 1
//   } else throw `You have taken your share today.\n\nWait ${cd1} Minute ${cd2} Second!`
// }
// handler.help = ['wage', 'payday']
// handler.tags = ['rpg']
// handler.command = /^(wage|payday)$/i
// handler.owner = false
// handler.mods = false
// handler.group = true
// handler.private = false
// handler.register = true

// handler.admin = false
// handler.botAdmin = false

// handler.fail = null
// handler.exp = 0

// module.exports = handler

// function JaM(ms) {
//   let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
//   return [h].map(v => v.toString().padStart(2, 0) ).join(':')
// }

// function MeNit(ms) {
//   let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
//   return [m].map(v => v.toString().padStart(2, 0) ).join(':')
// }

// function DeTik(ms) {
//   let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
//   return [s].map(v => v.toString().padStart(2, 0) ).join(':')
// }
