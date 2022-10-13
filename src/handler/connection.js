import { DisconnectReason } from "@adiwajshing/baileys";
import { Boom } from "@hapi/boom";
import color from "../utils/color.js";

export default async function connectionHandler(update, sock, connect) {
    try {
        let session = "skynet"
        const { connection, lastDisconnect } = update
        if (connection) {
            console.log(color("[SYS]", "yellow"), connection.toUpperCase());
            if (connection === "open") {
                console.log(color("[SYS]", "green"), "Connected!");
            }
        }
        if (connection === "close") {
            let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            if (reason === DisconnectReason.badSession) {
                console.log(`Bad Session File, Please Delete ${session} and Scan Again`);
                sock.logout();
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log("Connection closed, reconnecting....");
                connect();
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server, reconnecting...");
                connect();
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                sock.logout();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(`Device Logged Out, Please Delete ${session} and Scan Again.`);
                sock.logout();
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...");
                connect();
            } else if (reason === DisconnectReason.timedOut) {
                console.log("Connection TimedOut, Reconnecting...");
                connect();
            } else {
                let reason = new Error("Unknown Reason");
                sock.end(reason);
            }
        }
    } catch (error) {
        console.log(color("[ERR]", "red"), error);
    }
}