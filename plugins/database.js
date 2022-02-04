let handler = async (m) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    m.reply(`*current number of databases ${totalreg} user*`)
}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.owner = true
handler.command = /^(database|users)$/i
module.exports = handler
