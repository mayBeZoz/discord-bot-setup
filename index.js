require('dotenv').config({path:"./config.env"})
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const registerCommands = require("./core/infrastructure/register-commands")

const client = new Client({intents:[GatewayIntentBits.Guilds]})

client.commands = new Collection()
registerCommands()

client.once(Events.ClientReady, (readyClient) => {
    console.log(readyClient.user)
    console.log(`Client is Ready, Logged in as "${readyClient.user.tag}"`)
})

client.login(process.env.DISCORD_TOKEN)

