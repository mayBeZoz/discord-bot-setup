require('dotenv').config({path:"./config.env"})

const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const registerCommands = require("./core/infrastructure/register-commands")
const registerGuildCMDs = require('./core/infrastructure/register-guild-cmds')
const handleCommandsTrigger = require('./core/infrastructure/handle-commands-trigger')

const TOKEN = process.env.DISCORD_TOKEN

const client = new Client({intents:[GatewayIntentBits.Guilds]})

client.commands = new Collection()
client.cooldowns = new Collection();

registerCommands(client)
registerGuildCMDs(client)
handleCommandsTrigger(client)

client.login(TOKEN)

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Client is Ready, Logged in as "${readyClient.user.tag}"`)
});

