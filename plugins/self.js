let handler = async(m, { conn, command }) => {
  let isPublic = command === "public";
  let self = global.opts["self"]

  if(self === !isPublic) return m.reply(`bye ${!isPublic ? "Self" : "Public"} from earlier ${m.sender.split("@")[0] === global.owner[1] ? "miss" : "Bang"} :v`)

  global.opts["self"] = !isPublic

  m.reply(`Succeed ${!isPublic ? "Self" : "Public"} bot!`)
}

handler.help = ["self", "public"]
handler.tags = ["owner"]

handler.owner = true

handler.command = /^(self|public)/i

module.exports = handler
