const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Salman;;;'
                    + 'FN:Salman\n' // full name
                    + 'ORG:Salman;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=918860114592:+918860114592\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Mohd Salman Ansari ⟠', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
