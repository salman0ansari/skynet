// Modules
const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Jakarta').locale('id');
const wa = require('@open-wa/wa-automate');
const { create, decryptMedia, Client} = require('@open-wa/wa-automate');
const options = require('./options')
const axios = require('axios');
const qs = require('querystring');



// Creating Client
wa.create().then(client => start(client));
function start(client) {
    client.onMessage(async message => {

    // Validators
    const { type, from, t, sender, chat, caption, isMedia, mimetype, quotedMsg } = message
    let { body } = message
    const uaOverride = process.env.UserAgent
    const processTime = (timestamp, now) => { return moment.duration(now - moment(timestamp * 1000)).asSeconds() }
    const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
    const prefix = '!'
    body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)

    switch (command) {

        case 'stiker':
        case 'sticker':
            if ((isMedia || isQuotedImage) && args.length === 0) {
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                client.sendImageAsSticker(from, imageBase64)
            }
            break  // credit to #TopRqL
        
        case 'meme':
            let data;
            try {
                const response = await axios.get('https://meme-api.herokuapp.com/gimme/dankmemes');
                data = response.data
            } catch (error) {console.log(error)}
            await client.sendFileFromUrl(sender.id, `${data.url}`);
            break

            case 'help':
                await client.sendText(from, `
                !weather <cityname>
                !insta (postLink)
                !hadith (random hadith)
                !speed (speed test)
                !meme (random meme)
                !sticker (reply or send image with caption)
                !reddit <subreddit name> `)
                break

            case 'speed':
                await client.sendText(from, `Speed: ${processTime(t, moment())} _Second_ `)
                break

                case 'reddit':
                    let meme;
                    try {
                        const response = await axios.get(`https://meme-api.herokuapp.com/gimme/${args[0]}`);
                        resp = response.data
                        // console.log(data)
                    } catch (error) {
                        console.log(error);
                    }
                    await client.sendFileFromUrl(sender.id, `${meme.url}`, 'reddit', `${meme.title}`);
                    break

                case 'js':
                    const payload = {
                        'language': 'js', // change this to cmnd
                        'source': String(args),
                        'stdin': '',
                        'args': ''
                    }
                    try {
                    const res = await axios({
                            method: 'POST',
                            url: "https://emkc.org/api/v1/piston/execute",
                            data: qs.stringify(payload),
                            responseType: 'json'
                        })
                    let {ran, language, output, version} = res.data
                    await client.sendText(from, `
                    Ran: ${ran}
                    Language: ${language}, ${version}
                    Output: ⬇️
                    ${output}
                    `);
                    } catch (error) {
                        await client.sendText(message.from, `${error} === ${json}`);}
                    break

                }
            }
        )
    }
    create(options(start))
    .then((Bot) => start(Bot))
    .catch((err) => console.error(err))