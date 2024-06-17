const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Bryan_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function NARUTO_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Black_Tech = Bryan_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (MacOs)", "Safari (Ubuntu)", "Chrome (Linux)"]
             });
             if(!Pair_Code_By_Black_Castro.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Bryan_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Bryan_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Bryan_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Bryan_Tech.sendMessage(Pair_Code_By_Black_Castro.user.id, { text: '' + b64data });

               let NARUTO_MD_TEXT = `
____________________________
        𝗕𝗥𝗬𝗔𝗡 𝗧𝗘𝗖𝗛 
____________________________
╔════◇
║『 *YOU'VE CHOSEN NARUTO-BOT* 』
║ You've Completed the First Step
║ to Deploy a Whatsapp Bot.
╚════════════════╝
╔═════◇
║ 『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ 𝐎𝐰𝐧𝐞𝐫: https://wa.me/254102350531
║❒ 𝐑𝐞𝐩𝐨: https://github.com/Madmkisii/Naruto-MD-V1
║❒ 𝐖𝐚: https://chat.whatsapp.com/HsPiKU0POmU6Pbg4SLwi90
║ 💜💜💜
╚════════════════╝
Don't Forget To Give Star⭐ To My Repo`
 await Pair_Code_By_Bryan_Tech.sendMessage(Pair_Code_By_Bryan_Tech.user.id,{text: NARUTO_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Bryan_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    NARUTO_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service Restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await NARUTO_MD_PAIR_CODE()
});
module.exports = router
