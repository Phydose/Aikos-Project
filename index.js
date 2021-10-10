const { configtoken } = require('./Others/config.json')
const aoijs = require('aoi.js')
const bot = new aoijs.Bot({
    token: configtoken,
    prefix: ['$getServerVar[prefix]'],
})

//Eventer
bot.onMessage({
guildonly: false,
respondToBots: false,
})

//Command Handler
bot.loadCommands(`./Handler/`)

//Variable Handler
const variables = require('./Others/Variables.js');
bot.variables(variables);
