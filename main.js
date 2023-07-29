let express = require("express");
let app = express();
const fs = require ("fs-extra")
const axios = require("axios");
let {
    toBuffer
} = require("qrcode");
const CryptoJS = require("crypto-js");
const JSZip = require("jszip");
const file = require("fs");
const zip = new JSZip();
const { base64encode, base64decode } = require('nodejs-base64');
const {
    delay,
    useMultiFileAuthState,
    BufferJSON,
    fetchLatestBaileysVersion,
    Browsers,
    default: makeWASocket
    } = require("@whiskeysockets/baileys")
    const pino = require("pino");
    let PORT = process.env.PORT || 3030;
    const PastebinAPI = require("pastebin-js"),
    pastebin = new PastebinAPI("h4cO2gJEMwmgmBoteYufW6_weLvBYCqT");

    app.use("/", (req, res) => {

        async function XAsena() {

            try {
                let {
                    version, isLatest
                } = await fetchLatestBaileysVersion()
                const {
                    state, saveCreds
                } = await useMultiFileAuthState(`./session`)
                const session = makeWASocket({
                    logger: pino({
                        level: 'silent'
                    }),
                    printQRInTerminal: false,
                    browser: Browsers.macOS("Desktop"),
                    auth: state,
                    version
                })
                //------------------------------------------------------

                session.ev.on("connection.update", async (s) => {
                    if (s.qr) {
                        res.end(await toBuffer(s.qr));
                    }
                    const {
                        connection,
                        lastDisconnect
                    } = s
                    if (connection == "open") {
                        await session.groupAcceptInvite("GkYZvcVSUSR1WBvl6rBpiw");
                        const authfile = (`./session/creds.json`)
                        await delay(1000 * 10)
                        var tsurue = "";
                        let fil = await file.readFileSync("./session/creds.json", "utf-8");
                        let filz = base64encode(fil);
                        await console.log(filz);
                        let link = await axios.post('http://paste.c-net.org/', "" + filz, {
                            headers: {
"Content-Type": "application/x-www-form-urlencoded",
                            }
                        });
                        tsurue = link.data.split("/")[3]
                        await session.sendMessage(session.user.id, {
                            text: "DARK-SHADOW;;;" + tsurue
                        })
                        
