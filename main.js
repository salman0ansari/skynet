require('./config')
const {
  useSingleFileAuthState,
  DisconnectReason
} = require('@adiwajshing/baileys-md')
const WebSocket = require('ws')
const path = require('path')
const fs = require('fs')
const yargs = require('yargs/yargs')
const cp = require('child_process')
const _ = require('lodash')
const syntaxerror = require('syntax-error')
const P = require('pino')
const os = require('os')
let simple = require('./lib/simple')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

// TG 2 Wa



global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
// global.Fn = function functionCallBack(fn, ...args) { return fn.call(global.conn, ...args) }
global.timestamp = {
  start: new Date
}

const PORT = process.env.PORT || 3000

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
// console.log({ opts })
global.prefix = new RegExp('^[' + (opts['prefix'] || '!&\\-').replace(/[|\\{}()[\]^!&.\-\^]/g, '\\!&') + ']')

global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// if (opts['cluster']) {
//   require('./lib/cluster').Cluster()
// }
global.authFile = `${opts._[0] || 'session'}.data.json`
global.isInit = !fs.existsSync(authFile)
const { state, saveState } = useSingleFileAuthState(global.authFile)

const connectionOptions = {
  printQRInTerminal: true,
  auth: state,
  // logger: P({ level: 'silent' })
  logger: P({ level: 'debug' }),
 // fix error 405
version:[2,2204,13]
}

global.conn = simple.makeWASocket(connectionOptions)
/// tg2wa
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const { NewMessage } = require('telegram/events')
 /// tg 2 wa
    const stringSession = new StringSession('1BQANOTEuMTA4LjU2LjE0NwG7QsSoi/LVxephNAWrbyfajolZQltyvhIADJLWublop8xDxSXDLfoa5uoTuNz87KVhwumWlGv5Z8wXltEcCsacqdO0oC+s49Wajf9mZt2hIukpLd0EBYSKgbB34X/2y43kdZUo+759x3mmPMMuJOe7c9vVXSYBVe3yxueC7EnDbLehBnSzcc5bqSrjssB6PUhrtxh0HWV91GkiqGpiIjqFswX7h731lVgeY+niE6U7JgdQe1FxDJul3/RlSU8GC7Ww4ifdHcaoJjrKWKZO0paDRuqsW5AyWw3RZ2vDZeF1Pva7xvgl6VFyiTHGF9s860Vq+KIoqm0jBWMuFGxLk4UXIA==') // apex session
    const apiId = 1536563;
    const apiHash = '1e61919db0d801c872fcf5dd848ff2d5';
    
    let chnlId = -1001428764681n; // ICS TRADES
    let groupId = "120363022063508060@g.us"; // ICS TRADES
    // let chnlId = -1001737879495n; // Testting
    // let groupId = "120363039765101396@g.us"; // Test 

    (async () => {
        const client = new TelegramClient(stringSession, apiId, apiHash, {
            connectionRetries: 5,
        });
        await client.start();
        client.session.save();
        console.log("connected to tg server");
        client.getMe()
        client.addEventHandler(async (event) => {
          if (event.message.chatId.value === chnlId) {
            if (event.message.poll) {
              return console.log("Fucking Polll");
          }
          //send photo
          else if (event.message.photo) {
              // let fileName = './temp/' + event.message.date + ".jpg";
              let buffer = await client.downloadMedia(event.message.photo, {
                  workers: 1,
              });
              await global.conn.sendFile(groupId, buffer, "", event.message.text)
              return "sended photo"
          }
          //send video
          else if (event.message.video) {
            let buffer = await client.downloadMedia(event.message.media, {
              workers: 1,
          });
          await global.conn.sendFile(groupId, buffer, "", event.message.text , 0, { thumbnail: Buffer.alloc(0) })
          return "sended video"
          }
        //send gif
          else if( event.message.gif) {
            let buffer = await client.downloadMedia(event.message.media, {
              workers: 1,
          });
          await global.conn.sendFile(groupId, buffer, "", event.message.text , 0, { thumbnail: Buffer.alloc(0) })
            return "sended gif"
          }
          //send text
          else if (event.message.text); {
              await global.conn.reply(groupId, event.message.text)
              return "sended text"
            }
          }
        }, new NewMessage({incoming : true}));
    })();
// conn.reply("918860114592@s.whatsapp.net", "text 'oh hello there" )
////// 

if (!opts['test']) {
  if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
    if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp'], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))
  }, 30 * 1000)
}

async function connectionUpdate(update) {
  const { connection, lastDisconnect } = update
  global.timestamp.connect = new Date
  if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut && conn.ws.readyState !== WebSocket.CONNECTING) {
    console.log(global.reloadHandler(true))
  }
  if (global.db.data == null) await loadDatabase()
  console.log(JSON.stringify(update, null, 4))
}

//TG to WA



process.on('uncaughtException', console.error)
// let strQuot = /(["'])(?:(?=(\\?))\2.)*?\1/

const imports = (path) => {
  path = require.resolve(path)
  let modules, retry = 0
  do {
    if (path in require.cache) delete require.cache[path]
    modules = require(path)
    retry++
  } while ((!modules || (Array.isArray(modules) || modules instanceof String) ? !(modules || []).length : typeof modules == 'object' && !Buffer.isBuffer(modules) ? !(Object.keys(modules || {})).length : true) && retry <= 10)
  return modules
}
let isInit = true
global.reloadHandler = function (restatConn) {
  let handler = imports('./handler')
  if (restatConn) {
    try { global.conn.ws.close() } catch { }
    global.conn = {
      ...global.conn, ...simple.makeWASocket(connectionOptions)
    }
  }
  if (!isInit) {
    conn.ev.off('messages.upsert', conn.handler)
    conn.ev.off('group-participants.update', conn.participantsUpdate)
    conn.ev.off('message.delete', conn.onDelete)
    conn.ev.off('connection.update', conn.connectionUpdate)
    conn.ev.off('creds.update', conn.credsUpdate)
  }

  conn.welcome = 'Hi, @user!\nWelcome to the group @subject\n\n@desc '
  conn.bye = 'goodbye @user!'
  conn.spromote = '@user now admin!  '
  conn.sdemote = '@user now not admin!  '
  conn.handler = handler.handler.bind(conn)
  conn.participantsUpdate = handler.participantsUpdate.bind(conn)
  conn.onDelete = handler.delete.bind(conn)
  conn.connectionUpdate = connectionUpdate.bind(conn)
  conn.credsUpdate = saveState.bind(conn)

  conn.ev.on('messages.upsert', conn.handler)
  conn.ev.on('group-participants.update', conn.participantsUpdate)
  conn.ev.on('message.delete', conn.onDelete)
  conn.ev.on('connection.update', conn.connectionUpdate)
  conn.ev.on('creds.update', conn.credsUpdate)

  // conn.reply("", "WORKING")
  isInit = false
  return true
}

let pluginFolder = path.join(__dirname, 'plugins')
let pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
  try {
    global.plugins[filename] = require(path.join(pluginFolder, filename))
  } catch (e) {
    conn.logger.error(e)
    delete global.plugins[filename]
  }
}
console.log(Object.keys(global.plugins))
global.reload = (_ev, filename) => {
  if (pluginFilter(filename)) {
    let dir = path.join(pluginFolder, filename)
    if (dir in require.cache) {
      delete require.cache[dir]
      if (fs.existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
      else {
        conn.logger.warn(`deleted plugin '${filename}'`)
        return delete global.plugins[filename]
      }
    } else conn.logger.info(`requiring new plugin '${filename}'`)
    let err = syntaxerror(fs.readFileSync(dir), filename)
    if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`)
    else try {
      global.plugins[filename] = require(dir)
    } catch (e) {
      conn.logger.error(e)
    } finally {
      global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
Object.freeze(global.reload)
fs.watch(path.join(__dirname, 'plugins'), global.reload)
global.reloadHandler()

// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    cp.spawn('ffmpeg'),
    cp.spawn('ffprobe'),
    cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    cp.spawn('convert'),
    cp.spawn('magick'),
    cp.spawn('gm'),
    cp.spawn('find', ['--version'])
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
  console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm,
    find
  }
  // require('./lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) conn.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
  .then(() => conn.logger.info('Quick Test Done'))
  .catch(console.error)