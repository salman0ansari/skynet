// let yts = require('yt-search')
// let handler = async (m, { text }) => {
//   if (!text) throw 'What are you looking for?'
//   let results = await yts(text)
//   let teks = results.all.map(v => {
//     switch (v.type) {
//       case 'video': return `
// *${v.title}* (${v.url})
// Duration: ${v.timestamp}
// Uploaded ${v.ago}
// ${v.views} views
//       `.trim()
//       case 'channel': return `
// *${v.name}* (${v.url})
// _${v.subCountLabel} (${v.subCount}) Subscriber_
// ${v.videoCount} video
// `.trim()
//     }
//   }).filter(v => v).join('\n========================\n')
//   m.reply(teks)
// }
// handler.help = ['ytsearch <search>']
// handler.tags = ['internet']
// handler.command = /^yts(earch)?$/i

// module.exports = handler
