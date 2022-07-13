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

await bot.sendMessage(msg.chat.id, `HEY IT'S ME TRILOAD!
_____________

COMMAND YANG TERSEDIA
- /yt <link>
- /ig <link>
- /tt <link>

NOTE:
MASUKAN PERINTAH TANPA < & >
_____________

REPORT BUG'S ON @tdrckalfa`, 
{replyToMessage: msg.messageid})
bot.sendMessage(msg.chat.id, 'Gunakan /hide untuk menyembunyikan keyboard!', {replyMarkup})
})

bot.on('/menu', msg => {
 bot.sendMessage(msg.chat.id, `HEY IT'S ME TRILOAD!
_____________

COMMAND YANG TERSEDIA
- /yt <link>
- /ig <link>
- /tt <link>

NOTE:
MASUKAN PERINTAH TANPA < & >
_____________

REPORT BUG'S ON @tdrckalfa`, 
{replyToMessage: msg.messageid})
 })

bot.on('/about', msg => {
bot.sendMessage(msg.chat.id, `HEY IT'S ME TRILOAD!
_____________

TRILOAD BOT DIBUAT MENGGUNAKAN BAHASA PEMROGRAMAN JAVASCRIPT

DAN MEMILIKI ARTI THREE & DOWNLOAD KARENA MAMPU MENDOWNLOAD DARI 3 SOSMED SEKALIGUS
_____________

DIBUAT DENGAN BANTUAN
• Herokuapp
• GitHub
• Replit
• caliph-api
• telebot
_____________

REPORT BUG'S ON @tdrckalfa`)
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
