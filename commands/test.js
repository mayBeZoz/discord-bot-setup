const { SlashCommandBuilder } = require('discord.js');

const cmd = new SlashCommandBuilder()
.setName("test")
.setDescription("a test cmd")

module.exports = {
    data:cmd,
    async execute(interaction) {
        console.log('this is messsage from the exc mehtod')
    }
}