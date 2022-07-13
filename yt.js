console.log('YT aktif!')
const TeleBot = require('telebot')
const cal = require("caliph-api")
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
bot.on(/^\/yt ([\s\S]+)/, async (msg, args) => {
    bot.sendMessage(msg.chat.id, "Silahkan tunggu beberapa saat, proses membutuhkan waktu beberapa menit")
    bot.sendMessage(msg.chat.id, "Jika dalam waktu 1 menit tidak ada respon, maka silahkan ulangi perintah")
    const arg = args.match[1]
    cal.downloader.youtube.ytmp4(arg).then((res) => {
    capt = `Judul: ${res.title}\nDurasi: ${res.duration}\nChannel: ${res.channel}`
        bot.sendVideo(msg.chat.id, res.result, {caption: capt}).catch(function () {
     console.log("Promise Rejected");
     bot.sendMessage(msg.chat.id, "Terjadi Error, mungkin karena durasi video terlalu panjang dan dibatasi oleh server kami🙏🏻");
});
    })
   })
  }
