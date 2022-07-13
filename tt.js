console.log('TT aktif!')
const TeleBot = require('telebot')
const cal = require("caliph-api")
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
bot.on(/^\/tt ([\s\S]+)/, async (msg, args) => {
    bot.sendMessage(msg.chat.id, "Silahkan tunggu beberapa saat, proses membutuhkan waktu beberapa menit")
    const arg = args.match[1]
    res = await cal.downloader.tiktok(arg)
    capt = `Caption: ${res.title}\nPembuat: ${res.author}`
        bot.sendVideo(msg.chat.id, res.nowm, {caption: capt})
    })
      
}
