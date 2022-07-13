console.log('bot.js aktif!')

const TeleBot = require('telebot')
const request = require('request')

global.tokebot = '5546439184:AAG2AxQ2FALPTwHDTX0LT6FnaUCB-Ht5POA'
global.ownerid = '1240615992'
const bot = new TeleBot({
    token: global.tokebot
})


bot.on(['/start'], async (msg) => {
    let replyMarkup = bot.keyboard([
        ['/menu', '/about'],
    ], {resize: true});

await bot.sendMessage(msg.chat.id, `=== TRILOAD BOT ===

- /yt (url)
- /ig (url)
- /tt (url)

Note: masukan parameter tanpa tanda kurung ()`, 
{replyToMessage: msg.messageid})
bot.sendMessage(msg.chat.id, 'Gunakan /hide untuk menyembunyikan keyboard!', {replyMarkup})
})

bot.on('/menu', msg => {
 bot.sendMessage(msg.chat.id, `=== TRILOAD BOT ===

- /yt (url)
- /ig (url)
- /tt (url)

Note: masukan parameter tanpa tanda kurung ()`, 
{replyToMessage: msg.messageid})
 })

bot.on('/about', msg => {
bot.sendMessage(msg.chat.id, 'Berhubung gweh males ngetik, jadi menu about sementara gini aja wgwgwg. @tdrckalfa')
})

bot.on('/hide', msg => {
    return bot.sendMessage(
        msg.chat.id, 'Gunakan /show untuk menampilkan keyboard!', {replyMarkup: 'hide',replyToMessage: msg.message_id})
})

bot.on('/show', msg => {
    let replyMarkup = bot.keyboard([
        ['/menu','/about'],
    ], {resize: true});
    return bot.sendMessage(msg.chat.id, 'Gunakan /hide untuk menyembunyikan keyboard!', {replyMarkup,replyToMessage: msg.message_id})
})

require("./yt.js")(bot)
require("./tt.js")(bot)
require("./ig.js")(bot)

bot.start()