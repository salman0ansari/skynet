let handler = m => m
handler.before = async function (m) {

    if (m.isGroup && global.db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= global.db.data.chats[m.chat].expired) {
            this.reply(m.chat, `time *${this.user.name}* to leave the group
            `, null).then(() => {
                this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        global.db.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}

module.exports = handler
