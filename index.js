const { configtoken } = require('./config.json')
const aoijs = require('aoi.js')
const bot = new aoijs.Bot({
    token: configtoken,
    prefix: ['$getServerVar[prefix]'],
})

//Eventer
bot.onMessage({
guildonly: false,
respondToBots: false,
database: mongoose.mongo
})

//Command Handler
bot.loadCommands(`./System/`)
