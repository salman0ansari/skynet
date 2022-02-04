// let { MessageType } = require('@adiwajshing/baileys-md')
// const potion = 520
// const Spotion = 150 
// const limit = 350
// const Slimit = 100
// const Bdiamond = 900
// const Sdiamond = 750
// const Bcommon = 200
// const Scommon = 20
// const Suncommon = 100
// const Buncommon = 600
// const Bmythic = 2000 
// const Smythic = 500
// const Blegendary = 7500 
// const Slegendary = 3000
// const Brubbish = 10
// const Srubbish = 2
// let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//     const _armor = global.db.data.users[m.sender].armor
//     const _sword = global.db.data.users[m.sender].sword
//     const _slave = global.db.data.users[m.sender].slave
//     const slave = (_slave == 0 ? 50000 : '' || _armor == 1 ? 600000 : '' || _armor == 2 ? 70000 : '' || _armor == 3 ? 800000 : '' || _armor == 4 ? 99999 : '')
//     const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
//     const sword = (_sword == 0 ? 20000 : '' || _sword == 1 ? 49999 : '' || _sword == 2 ? 99999 : '' || _sword == 3 ? 149999 : '' || _sword == 4 ? 299999 : '')
//     let type = (args[0] || '').toLowerCase()
//     let _type = (args[1] || '').toLowerCase()
//     let jualbeli = (args[0] || '').toLowerCase()
//     const Kchat = `
// ${usedPrefix}shop <Buy|sell> <item> <total>\n
// Usage examples: *${usedPrefix}shop buy potion 1*\n\n
// List Goods:\n\n
// *Goods   |  Purchase price*\n
// Potion:       ${potion}
// Limit:.        ${limit}
// Diamond:     ${Bdiamond}
// Common:     ${Bcommon}
// Uncommon:  ${Buncommon}
// Mythic:     ${Bmythic}
// Legendary: ${Blegendary}
// Rubbish:     ${Brubbish}
// Armor:       ${armor}
// Sword:       ${sword}\n\n
// *Goods   | Selling price*\n
// Potion:       ${Spotion}
// Limit:          ${Slimit}
// Diamond:     ${Sdiamond}
// Common:     ${Scommon}
// Uncommon:  ${Suncommon}
// Mythic:     ${Smythic}
// Legendary: ${Slegendary}
// Slave:        ${slave}
// Rubbish:     ${Srubbish}\n\n
// `.trim()
//     try {
//         if (/shop|toko/i.test(command)) {
//             const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
//             const rubbish = global.db.data.users[m.sender].rubbish
//             switch (jualbeli) {
//             case 'buy':
//                 switch (_type) {
//                     case 'potion':
//                             if (global.db.data.users[m.sender].money >= potion * count) {
//                                 global.db.data.users[m.sender].money -= potion * count
//                                 global.db.data.users[m.sender].potion += count * 1
//                                 conn.reply(m.chat, `Succes buy ${count} Potion with price ${potion * count} money\n\nUse potion by typing: *${usedPrefix}use potion <total>*`, m)
//                             } else conn.reply(m.chat, `Your money is not enough to buy  ${count} Potion with price ${potion * count} money`,)
//                         break
//                     case 'limit':
//                              if (global.db.data.users[m.sender].exp >= limit * count) {
//                              	global.db.data.users[m.sender].exp -= limit * count
//                                  global.db.data.users[m.sender].limit += count * 1
//                                  conn.reply(m.chat, `Buying success  ${count} limit with price ${limit * count} exp`, m)
//                               } else conn.reply(m.chat, `Your experience is not enough to buy  ${count} limit with price ${limit * count} exp`, m)
//                            break
//                     case 'diamond':
//                             if (global.db.data.users[m.sender].money >= Bdiamond * count) {
//                                 global.db.data.users[m.sender].diamond += count * 1
//                                 global.db.data.users[m.sender].money -= Bdiamond * count
//                                 conn.reply(m.chat, `Succes buy  ${count} Diamond with price ${Bdiamond * count} money`, m)
//                             } else conn.reply(m.chat, `Your money is not enough`, m)
                        
//                         break
//                     case 'common':
//                             if (global.db.data.users[m.sender].money >= Bcommon * count) {
//                                 global.db.data.users[m.sender].common += count * 1
//                                 global.db.data.users[m.sender].money -= Bcommon * count
//                                 conn.reply(m.chat, `Succes buy  ${count} Common crate with price ${Bcommon * count} money`, m)
//                             } else conn.reply(m.chat, `Your money is not enough to buy  ${count} Common crate with price ${Bcommon * count} money\n\nopen  crate by typing: *${usedPrefix}open common*`, m)
                        
//                         break
//                     case 'uncommon':
//                             if (global.db.data.users[m.sender].money >= Buncommon * count) {
//                                 global.db.data.users[m.sender].uncommon += count * 1
//                                 global.db.data.users[m.sender].money -= Buncommon * count
//                                 conn.reply(m.chat, `Succes buy  ${count} Uncommon crate with price ${Buncommon * count} money`, m)
//                             } else conn.reply(m.chat, `Your money is not enough to buy  ${count} Uncommon crate with price ${Buncommon * count} money\n\nopen  crate by typing: *${usedPrefix}open uncommon*`, m)
                        
//                         break
//                     case 'mythic':
//                             if (global.db.data.users[m.sender].money >= Bmythic * count) {
//                                     global.db.data.users[m.sender].mythic += count * 1
//                                 global.db.data.users[m.sender].money -= Bmythic * count
//                                 conn.reply(m.chat, `Succes buy  ${count} Mythic crate with price ${Bmythic * count} money`, m)
//                             } else conn.reply(m.chat, `Your money is not enough to buy  ${count} Mythic crate with price ${Bmythic* count} money\n\nopen  crate by typing: *${usedPrefix}open mythic*`, m)
                        
//                         break
//                     case 'legendary':
//                             if (global.db.data.users[m.sender].money >= Blegendary * count) {
//                                 global.db.data.users[m.sender].legendary += count * 1
//                                 global.db.data.users[m.sender].money -= Blegendary * count
//                                 conn.reply(m.chat, `Succes buy  ${count} Legendary crate with price ${Blegendary * count} money`, m)
//                             } else conn.reply(m.chat, `Your money is not enough to buy  ${count} Legendary crate with price ${Blegendary * count} money\n\nopen  crate by typing: *${usedPrefix}open legendary*`, m)
                        
//                         break
//                     case 'rubbish':
//                             if (global.db.data.users[m.sender].money >= Brubbish * count) {
//                                 global.db.data.users[m.sender].rubbish += count * 1
//                                 global.db.data.users[m.sender].money -= Brubbish * count
//                                 conn.reply(m.chat, `Succes buy  ${count} Rubbish with price ${Brubbish * count} money`, m)
//                             } else conn.reply(m.chat, `Your money is not enough to buy  ${count} Rubbish with price ${Brubbish * count} money`.trim(), m)
                        
//                         break
//                     case 'sword':
//                             if (global.db.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'swordmu sudah *Level Max*', m)
//                             if (global.db.data.users[m.sender].money > sword) {
//                                 global.db.data.users[m.sender].sword += 1
//                                 global.db.data.users[m.sender].money -= sword * 1
//                                 conn.reply(m.chat, `Succes buy  sword worth ${sword} money` ,m)
//                             } else conn.reply(m.chat, `your money is not enough for buy  sword worth ${sword} money`, m)
                     
//                         break
//                     case 'armor':
//                             if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
//                             if (global.db.data.users[m.sender].money > armor) {
//                                 global.db.data.users[m.sender].armor += 1
//                                 global.db.data.users[m.sender].money -= armor * 1
//                                 conn.reply(m.chat, `Succes buy  armor worth ${armor} money` ,m)
//                             } else conn.reply(m.chat, `your money is not enough for buy  armor worth ${armor} money`, m)
                        
//                         break
//                     case 'slave':
//                             if (global.db.data.users[m.sender].slave == 5) return conn.reply(m.chat, 'Slavemu sudah *Level Max*', m)
//                             if (global.db.data.users[m.sender].money > slave) {
//                                 global.db.data.users[m.sender].slave += 1
//                                 global.db.data.users[m.sender].money -= slave * 1
//                                 conn.reply(m.chat, `Succes buy  for ${slave} money` ,m)
//                             } else conn.reply(m.chat, `your money is not enough to buy slaves for ${slave} money`, m)
                        
//                         break
//                     default:
//                         return conn.reply(m.chat, Kchat, m)
//                 }
//                 break
//             case 'sell': 
//                 switch (_type) {
//                     case 'potion':
//                         if (global.db.data.users[m.sender].potion >= count * 1) {
//                             global.db.data.users[m.sender].money += Spotion * count
//                             global.db.data.users[m.sender].potion -= count * 1
//                             conn.reply(m.chat, `Succes sell ${count} Potion with price ${Spotion * count} money`.trim(), m)
//                         } else conn.reply(m.chat, `Potion is not enough`.trim(), m)
//                         break
//                    case 'limit':
//                        if (global.db.data.users[m.sender].limit >= count * 1) {
//                             global.db.data.users[m.sender].exp += Slimit * count
//                             global.db.data.users[m.sender].limit -= count * 1
//                             conn.reply(m.chat, `Sukses sell ${count} limit with price ${Slimit * count} exp`.trim(), m)
//                          } else conn.reply(m.chat, `Limit is not enough`.trim(), m)
//                          break
//                     case 'common':
//                         if (global.db.data.users[m.sender].common >= count * 1) {
//                             global.db.data.users[m.sender].money += Scommon * count
//                             global.db.data.users[m.sender].common -= count * 1
//                             conn.reply(m.chat, `Succes sell ${count} Common Crate with price ${Scommon * count} money`.trim(), m)
//                         } else conn.reply(m.chat, `Common Crate is not enough`.trim(), m)
//                         break
//                     case 'uncommon':
//                         if (global.db.data.users[m.sender].uncommon >= count * 1) {
//                             global.db.data.users[m.sender].money += Suncommon * count
//                             global.db.data.users[m.sender].uncommon -= count * 1
//                             conn.reply(m.chat, `Succes sell ${count} Uncommon Crate with price ${Suncommon * count} money`.trim(), m)
//                         } else conn.reply(m.chat, `Uncommon Crate is not enough`.trim(), m)
//                         break
//                     case 'mythic':
//                         if (global.db.data.users[m.sender].mythic >= count * 1) {
//                             global.db.data.users[m.sender].money += Smythic * count
//                             global.db.data.users[m.sender].mythic -= count * 1
//                             conn.reply(m.chat, `Succes sell ${count} Mythic Crate with price ${Smythic * count} money`.trim(), m)
//                         } else conn.reply(m.chat, `Mythic Crate is not enough`.trim(), m)
//                         break
//                     case 'legendary':
//                         if (global.db.data.users[m.sender].legendary >= count * 1) {
//                             global.db.data.users[m.sender].money += Slegendary * count
//                             global.db.data.users[m.sender].legendary -= count * 1
//                             conn.reply(m.chat, `Succes sell ${count} Legendary Crate with price ${Slegendary * count} money`.trim(), m)
//                         } else conn.reply(m.chat, `Legendary Crate is not enough`.trim(), m)
//                         break
//                     case 'rubbish':
//                         if (global.db.data.users[m.sender].rubbish >= count * 1) {
//                             global.db.data.users[m.sender].rubbish -= count * 1
//                             global.db.data.users[m.sender].money += Srubbish * count
//                             conn.reply(m.chat, `Succes sell ${count} rubbish, and you get  ${Srubbish * count} money`, m)
//                         } else conn.reply(m.chat, `Rubbish are not enough`, m)
//                         break
//                     case 'diamond':
//                         if (global.db.data.users[m.sender].diamond >= count * 1) {
//                             global.db.data.users[m.sender].diamond -= count * 1
//                             global.db.data.users[m.sender].money += Sdiamond * count
//                             conn.reply(m.chat, `Succes sell ${count} Diamond, and you get  ${Sdiamond * count} money`, m)
//                         } else conn.reply(m.chat, `Diamond are not enough`, m)
//                         break
//                     default:
//                         return conn.reply(m.chat, Kchat, m)
//                 }
//                 break
//             default:
//                 return conn.reply(m.chat, Kchat, m)
//             }
//         } else if (/beli|buy/i.test(command)) {
//             const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
//             switch (type) {
//                 case 'potion':
//                         if (global.db.data.users[m.sender].money >= potion * count) {
//                             global.db.data.users[m.sender].money -= potion * count
//                             global.db.data.users[m.sender].potion += count * 1
//                             conn.reply(m.chat, `Succes buy  ${count} Potion with price ${potion * count} money\n\nUsepotion by typing: *${usedPrefix}use potion <total>*`, m)
//                         } else conn.reply(m.chat, `Your money is not enough to buy  ${count} Potion with price ${potion * count} money`,m)
                    
//                     break
//                case 'limit':
//                         if (global.db.data.users[m.sender].exp >= limit * count) {
//                         	global.db.data.users[m.sender].exp -= limit * count
//                             global.db.data.users[m.sender].limit += count * 1
//                             conn.reply(m.chat, `Buying success  ${count} limit with price ${limit * count} exp`, m)
//                          } else conn.reply(m.chat, `Your experience is not enough to buy  ${count} limit with price ${limit * count} exp`, m)
//                          break
//                 case 'diamond':
//                         if (global.db.data.users[m.sender].money >= Bdiamond * count) {
//                             global.db.data.users[m.sender].diamond += count * 1
//                             global.db.data.users[m.sender].money -= Bdiamond * count
//                             conn.reply(m.chat, `Succes buy  ${count} Diamond with price ${Bdiamond * count} money`, m)
//                         } else conn.reply(m.chat, `Your money is not enough`, m)
                    
//                     break
//                 case 'common':
//                         if (global.db.data.users[m.sender].money >= Bcommon * count) {
//                             global.db.data.users[m.sender].common += count * 1
//                             global.db.data.users[m.sender].money -= Bcommon * count
//                             conn.reply(m.chat, `Succes buy  ${count} Common crate with price ${Bcommon * count} money`, m)
//                         } else conn.reply(m.chat, `Your money is not enough to buy  ${count} Common crate with price ${Bcommon * count} money\n\nopen  crate by typing: *${usedPrefix}open common*`, m)
                    
//                     break
//                 case 'uncommon':
//                         if (global.db.data.users[m.sender].money >= Buncommon * count) {
//                             global.db.data.users[m.sender].uncommon += count * 1
//                             global.db.data.users[m.sender].money -= Buncommon * count
//                             conn.reply(m.chat, `Succes buy  ${count} Uncommon crate with price ${Buncommon * count} money`, m)
//                         } else conn.reply(m.chat, `Your money is not enough to buy  ${count} Uncommon crate with price ${Buncommon * count} money\n\nopen  crate by typing: *${usedPrefix}open uncommon*`, m)
                   
//                     break
//                 case 'mythic':
//                         if (global.db.data.users[m.sender].money >= Bmythic * count) {
//                             global.db.data.users[m.sender].mythic += count * 1
//                             global.db.data.users[m.sender].money -= Bmythic * count
//                             conn.reply(m.chat, `Succes buy  ${count} Mythic crate with price ${Bmythic * count} money`, m)
//                         } else conn.reply(m.chat, `Your money is not enough to buy  ${count} Mythic crate with price ${Bmythic* count} money\n\nopen  crate by typing: *${usedPrefix}open mythic*`, m)
                    
//                     break
//                 case 'legendary':
//                         if (global.db.data.users[m.sender].money >= Blegendary * count) {
//                             global.db.data.users[m.sender].legendary += count * 1
//                             global.db.data.users[m.sender].money -= Blegendary * count
//                             conn.reply(m.chat, `Succes buy  ${count} Legendary crate with price ${Blegendary * count} money`, m)
//                         } else conn.reply(m.chat, `Your money is not enough to buy  ${count} Legendary crate with price ${Blegendary * count} money\n\nopen  crate by typing: *${usedPrefix}open legendary*`, m)
                    
//                     break
//                 case 'rubbish':
//                         if (global.db.data.users[m.sender].money >= Brubbish * count) {
//                             global.db.data.users[m.sender].rubbish += count * 1
//                             global.db.data.users[m.sender].money -= Brubbish * count
//                             conn.reply(m.chat, `Succes buy  ${count} Rubbish with price ${Brubbish * count} money`, m)
//                         } else conn.reply(m.chat, `Your money is not enough to buy  ${count} Rubbish with price ${Brubbish * count} money`.trim(), m)
                    
//                     break
//                 case 'sword':
//                         if (global.db.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'swordmu sudah *Level Max*', m)
//                         if (global.db.data.users[m.sender].money > sword * 1) {
//                             global.db.data.users[m.sender].sword += 1
//                             global.db.data.users[m.sender].money -= sword * 1
//                             conn.reply(m.chat, `Succes buy  armor worth ${sword} money` ,m)
                          
//                         } else conn.reply(m.chat, `your money is not enough for buy  sword worth ${sword} money`, m)
                    
//                     break
//                 case 'armor':
//                         if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
//                         if (global.db.data.users[m.sender].money > armor * 1) {
//                             global.db.data.users[m.sender].armor += 1
//                             global.db.data.users[m.sender].money -= armor * 1
//                             conn.reply(m.chat, `Succes buy  armor worth ${armor} money` ,m)
                          
//                         } else conn.reply(m.chat, `your money is not enough to buy armor for ${armor} money`, m)
                    
//                     break
//                 case 'slave':
//                         if (global.db.data.users[m.sender].slave == 5) return conn.reply(m.chat, 'Slavemu sudah *Level Max*', m)
//                         if (global.db.data.users[m.sender].money > slave * 1) {
//                             global.db.data.users[m.sender].slave += 1
//                             global.db.data.users[m.sender].money -= slave * 1
//                             conn.reply(m.chat, `Succes buy  slave worth ${slave} money` ,m)
                          
//                         } else conn.reply(m.chat, `your money is not enough to buy slaves for ${slave} money`, m)
                    
//                     break
//                 default:
//                     return conn.reply(m.chat, Kchat, m)
//             }
//         } else if (/sell|jual|/i.test(command)) {
//             const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
//             switch (type) {
//                 case 'potion':
//                     if (global.db.data.users[m.sender].potion >= count * 1) {
//                         global.db.data.users[m.sender].money += Spotion * count
//                         global.db.data.users[m.sender].potion -= count * 1
//                         conn.reply(m.chat, `Succes sell ${count} Potion with price ${Spotion * count} money`.trim(), m)
//                     } else conn.reply(m.chat, `Potion is not enough`.trim(), m)
//                     break
//                 case 'limit':
//                     if (global.db.data.users[m.sender].limit >= count * 1) {
//                         global.db.data.users[m.sender].exp += Slimit * count
//                         global.db.data.users[m.sender].limit -= count * 1
//                         conn.reply(m.chat, `Succes sell ${count} limit with price ${Slimit * count} exp`.trim(), m)
//                     } else conn.reply(m.chat, `Limit is not enough`.trim(), m)
//                     break
//                 case 'common':
//                     if (global.db.data.users[m.sender].common >= count * 1) {
//                         global.db.data.users[m.sender].money += Scommon * count
//                         global.db.data.users[m.sender].common -= count * 1
//                         conn.reply(m.chat, `Succes sell ${count} Common Crate with price ${Scommon * count} money`.trim(), m)
//                     } else conn.reply(m.chat, `Common Crate is not enough`.trim(), m)
//                     break
//                 case 'uncommon':
//                     if (global.db.data.users[m.sender].uncommon >= count * 1) {
//                         global.db.data.users[m.sender].money += Suncommon * count
//                         global.db.data.users[m.sender].uncommon -= count * 1
//                         conn.reply(m.chat, `Succes sell ${count} Uncommon Crate with price ${Suncommon * count} money`.trim(), m)
//                     } else conn.reply(m.chat, `Uncommon Crate is not enough`.trim(), m)
//                     break
//                 case 'mythic':
//                     if (global.db.data.users[m.sender].mythic >= count * 1) {
//                         global.db.data.users[m.sender].money += Smythic * count
//                         global.db.data.users[m.sender].mythic -= count * 1
//                         conn.reply(m.chat, `Succes sell ${count} Mythic Crate with price ${Smythic * count} money`.trim(), m)
//                     } else conn.reply(m.chat, `Mythic Crate is not enough`.trim(), m)
//                     break
//                 case 'legendary':
//                     if (global.db.data.users[m.sender].legendary >= count * 1) {
//                         global.db.data.users[m.sender].money += Slegendary * count
//                         global.db.data.users[m.sender].legendary -= count * 1
//                         conn.reply(m.chat, `Succes sell ${count} Legendary Crate with price ${Slegendary * count} money`.trim(), m)
//                     } else conn.reply(m.chat, `Legendary Crate is not enough`.trim(), m)
//                     break
//                 case 'rubbish':
//                     if (global.db.data.users[m.sender].rubbish >= count * 1) {
//                         global.db.data.users[m.sender].rubbish -= count * 1
//                         global.db.data.users[m.sender].money += Srubbish * count
//                         conn.reply(m.chat, `Succes sell ${count} rubbish, and you get  ${Srubbish * count} money`.trim(), m)
//                     } else conn.reply(m.chat, `Rubbish are not enough`.trim(), m)
//                     break
//                 case 'diamond':
//                     if (global.db.data.users[m.sender].diamond >= count * 1) {
//                         global.db.data.users[m.sender].diamond -= count * 1
//                         global.db.data.users[m.sender].money += Sdiamond * count
//                         conn.reply(m.chat, `Succes sell ${count} Diamond, and you get ${Sdiamond * count} money`, m)
//                     } else conn.reply(m.chat, `Diamond are not enough`, m)
//                     break
//                 default:
//                     return conn.reply(m.chat, Kchat, m)
//             }
//         }
//     } catch (e) {
//         conn.reply(m.chat, Kchat, m)
//         console.log(e)
//         if (DevMode) {
//             for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
//                 conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
//             }
//         }
//     }
// }

// handler.help = ['shop <sell|buy> <args>', 'toko <sell|buy> <args>']
// handler.tags = ['rpg']
    
// handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
// module.exports = handler