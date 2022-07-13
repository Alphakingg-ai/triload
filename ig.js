console.log('IG aktif!')
const TeleBot = require('telebot')
const cal = require("caliph-api")
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
bot.on(/^\/ig ([\s\S]+)/, async (msg, args) => {
    bot.sendMessage(msg.chat.id, "Silahkan tunggu beberapa saat, proses membutuhkan waktu beberapa menit")
    bot.sendMessage(msg.chat.id, "Jika dalam waktu 1 menit tidak ada respon, maka silahkan ulangi perintah")
    const arg = args.match[1]
    res = await cal.downloader.instagram.post(arg)
    capt = "Berhasil mengunduh dari "+ res.user.username
    try {
     for (let i of res.medias) {
     if (i.type === "video") {
     bot.sendVideo(msg.chat.id, i.url, {caption: capt})
     } else if (i.type === "image") {
     bot.sendPhoto(msg.chat.id, i.url, {caption: capt})
      }
     }
} catch (e) {
console.log("Err: "+e)
}
   })
  }
