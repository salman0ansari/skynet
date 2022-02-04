let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=460f860980543711f419fd727ca5bdcd90cef4af&ids=${text.toUpperCase()}&interval=1h,1d&convert=USD`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (json == "") throw 'Invald Ticker??'
  let onehr = (json[0]["1h"].price_change);
  let oneDay = (json[0]["1d"].price_change);
  if( onehr > 0){
    onehr = `${(parseFloat(json[0]["1h"].price_change)).toFixed(5)}$ 🟢`
  } else {
    onehr = `${(parseFloat(json[0]["1h"].price_change)).toFixed(5)}$ 🔴`
  }

  if( oneDay > 0){
    oneDay = `${(parseFloat(json[0]["1d"].price_change)).toFixed(5)}$ 🟢`
  } else {
    oneDay = `${(parseFloat(json[0]["1d"].price_change)).toFixed(5)}$ 🔴`
  }
  if(json) m.reply(`
Currency Name : ${json[0].name}
Price in USD : $${parseFloat(json[0].price).toFixed(5)}
Market Cap Dominance : ${parseFloat(json[0].market_cap_dominance).toFixed(5)}
1hr Price Change : ${onehr}
1day Price Change: ${oneDay}
\n\n2022 © skynet`.trim())
  else throw json
}
handler.help = ['cryptoprice'].map(v => v + ' <Ticker>')
handler.tags = ['internet']
handler.command = /^(crptoprice|ccprice|)$/i
// handler.group = true
module.exports = handler

// 460f860980543711f419fd727ca5bdcd90cef4af
