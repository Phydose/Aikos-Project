const aoijs = require('aoi.js')
const bot = new aoijs.Bot({
    token: PizzaTokenPrivate,
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

//Variable Handler
const variables = require('./Security/variables.js');
bot.variables(variables);

//Event Listeners Handler
require('./Security/EventsListener')(bot)

//Status Handler
const status = require('./Security/Status Control/status.js');
bot.status(status);

