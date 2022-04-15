const { Telegraf } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply("Assalomu Alaykum aziz foydalanuvchi Siz Elyorbek Temirov Rasmiy guruhiga qo'shildingiz", {
    "reply_markup": {
        "resize_keyboard": true,
        "keyboard": [ // different every time
            ["Elyorbek Temirov haqda"],
            ["Qo'shiqlari", "Kliplari"],
            ["To'ylarda videolari"],
            ["Bog'lanish"]
        ]
    }
}))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('bevafo', (ctx) => ctx.replyWithAudio('https://t.me/elyorbekmusic/14111', { caption: 'Elyorbek Temirovning Rasmiy guruhi: https://t.me/elyorbekmusic' }))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))