const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    let prefix = config.prefix;
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let inv = new Discord.MessageEmbed()
    .setTitle("Invite & Support Link!")
    .setColor('RANDOM')
    .addField("Invite Link", "[INVITE](https://discord.com/api/oauth2/authorize?client_id=789884331245436928&permissions=8&scope=bot)")
    .addField("Support Server", "[Click to join support Server](https://discord.gg/TT2rzcBgX8)")
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
    message.channel.send(inv);
}

module.exports.help = {
    name: "inv",
    usage: "[invite]",
    aliases: ["inv"],
}