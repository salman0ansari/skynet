// // TG to WA
// const { Api, TelegramClient } = require("telegram");
// const { StringSession } = require("telegram/sessions");
// const { NewMessage } = require('telegram/events')
// const fs = require("fs")

// let handler = async (m, { conn, args, text }) => {
//     console.log("hello ===========================================================")
//     const buffer2Image = (fileName, buffer) => {
//         fs.writeFile(fileName, buffer, 'binary', function (err) {
//             if (err) { console.log("There was an error writing the image") }
//             else { console.log("The file was written") }
//         })
//     };

//     const stringSession = new StringSession('1BQANOTEuMTA4LjU2LjE0NwG7QsSoi/LVxephNAWrbyfajolZQltyvhIADJLWublop8xDxSXDLfoa5uoTuNz87KVhwumWlGv5Z8wXltEcCsacqdO0oC+s49Wajf9mZt2hIukpLd0EBYSKgbB34X/2y43kdZUo+759x3mmPMMuJOe7c9vVXSYBVe3yxueC7EnDbLehBnSzcc5bqSrjssB6PUhrtxh0HWV91GkiqGpiIjqFswX7h731lVgeY+niE6U7JgdQe1FxDJul3/RlSU8GC7Ww4ifdHcaoJjrKWKZO0paDRuqsW5AyWw3RZ2vDZeF1Pva7xvgl6VFyiTHGF9s860Vq+KIoqm0jBWMuFGxLk4UXIA==') // apex session
//     const apiId = 1536563;
//     const apiHash = '1e61919db0d801c872fcf5dd848ff2d5';
    
//     // let chnlId = -1001428764681; // ICS TRADES
//     let chnlId = -1001557908101; // ICS TRADES
//     (async () => {
//         const client = new TelegramClient(stringSession, apiId, apiHash, {
//             connectionRetries: 5,
//         });
//         await client.start();
//         client.session.save();

//         async function eventPrint(event) {

//             if (event.message.poll) {
//                 return console.log("Fucking Polll");
//             }

//             else if (event.message.photo) {
//                 // let fileName = './temp/' + event.message.date + ".jpg";
//                 let buffer = await client.downloadMedia(event.message.photo, {
//                     workers: 1,
//                 });
//                 wa.sendFile("120363039765101396@g.us", buffer, event.message.text)
//                 return console.log("Type.Message.Photo Send")
//             }

//             else if (event.message.media) {
//                 return console.log("Type.Media Recived Can't Sent")
//             }

//             else (event.message.text); {
//                 conn.reply("918860114592@s.whatsapp.net", event.message.text)
//                 return console.log("Type.Message Send");
//             }
//         }
//         client.addEventHandler(eventPrint, new NewMessage({ incoming: true, chats: [chnlId] }));
//     })();
// }

// module.exports = handler

// let handler = async (m, { conn, args, text }) => { 
//     const { Api, TelegramClient } = require("telegram");
//     const { StringSession } = require("telegram/sessions");
//     const { NewMessage } = require('telegram/events')
//      /// tg 2 wa
//         const stringSession = new StringSession('1BQANOTEuMTA4LjU2LjE0NwG7QsSoi/LVxephNAWrbyfajolZQltyvhIADJLWublop8xDxSXDLfoa5uoTuNz87KVhwumWlGv5Z8wXltEcCsacqdO0oC+s49Wajf9mZt2hIukpLd0EBYSKgbB34X/2y43kdZUo+759x3mmPMMuJOe7c9vVXSYBVe3yxueC7EnDbLehBnSzcc5bqSrjssB6PUhrtxh0HWV91GkiqGpiIjqFswX7h731lVgeY+niE6U7JgdQe1FxDJul3/RlSU8GC7Ww4ifdHcaoJjrKWKZO0paDRuqsW5AyWw3RZ2vDZeF1Pva7xvgl6VFyiTHGF9s860Vq+KIoqm0jBWMuFGxLk4UXIA==') // apex session
//         const apiId = 1536563;
//         const apiHash = '1e61919db0d801c872fcf5dd848ff2d5';
        
//         // let chnlId = -1001428764681; // ICS TRADES
//         let chnlId = -1001557908101n; // Testting
//         // let chnlId = -1001105122274; // Sahil
//         (async () => {
//             const client = new TelegramClient(stringSession, apiId, apiHash, {
//                 connectionRetries: 5,
//             });
//             await client.start();
//             client.session.save();
//             console.log("connected to tg server");
//             client.getMe()
    
//             // async function eventPrint(event) {
//             //   if (event.message.chatId === ("-1001105122274")) {
//             //     if (event.message.poll) {
//             //       return console.log("Fucking Polll");
//             //   }
    
//             //   else if (event.message.photo) {
//             //       // let fileName = './temp/' + event.message.date + ".jpg";
//             //       let buffer = await client.downloadMedia(event.message.photo, {
//             //           workers: 1,
//             //       });
//             //       // global.conn.sendFile("120363039765101396@g.us", buffer, event.message.text)
//             //       return console.log("Type.Message.Photo Send")
//             //   }
    
//             //   else if (event.message.media) {
//             //       return console.log("Type.Media Recived Can't Sent")
//             //   }
    
//             //   else (event.message.text); {
//             //       // await global.conn.sendMessage("918860114592@s.whatsapp.net", {text : "sakan"})
//             //       return console.log("Type.Message Send");
//             //   }
//             //   }
//             // }
//             client.addEventHandler(async (event) => {
//               if (event.message.chatId.value === -1001557908101n) {
//                 console.log("new msg form channel")
//          await conn.reply("918860114592@s.whatsapp.net", {text : "sakan"})
//               }
//             }, new NewMessage({incoming : true}));
//             // client.addEventHandler(eventPrint, new NewMessage({ chats: [chnlId] }));
//             console.log("passed event ==============>")
//         })();
// }

// module.exports = handler