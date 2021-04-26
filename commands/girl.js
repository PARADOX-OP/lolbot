const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let girl = new Discord.MessageEmbed()
    .setDescription("GIRL")
    .setColor('RANDOM')
    .setImage("https://cdn.discordapp.com/attachments/802911416527880213/824611731639894056/3a43e7aae1234e915841113d82f2834a.jpg")

      message.channel.send(girl);
}

module.exports.help = {
  name: "girl"
}