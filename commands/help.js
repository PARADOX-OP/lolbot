const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;


    let help = new Discord.MessageEmbed()
    .setAuthor(
      `HELP`,
      "https://cdn.glitch.com/8cb34785-d377-4ef6-818c-137f48581a4e%2Fgif%20gif.gif?v=1614936176218"
    )
    .setColor("BLUE")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/675925221236277298/e9d48520a25b6470f7b1020a9bb32ed5.webp?size=2048" 
    )
    .setTitle("_Command List_")
    
    .addField("Main Developer", '`MBG MUKESH#9420`')

    .addField(" <a:info5:831215353886539806> ❯ INFO", "My prefix is g or Just @mention me")

    .addField(
      " <a:party:831216563164020746> ❯ GIVEAWAY [3] :",
      "`start` [channel-name] [Time] [winners] [Prize]\n`reroll` [prize name]\n`end` [prize name]"
    )
    .addField(" <a:thunder:831216028717023252> ❯ UTILITY [3] :", "`ping`, `emoji`, `invite`, `findemoji`, `announce`, `embed`", true)
    .addField(
      " <a:geaz:831216967427162172> ❯ INFORMATION [5] :",
      "`stats`, `avatar`, `prefix`, `userinfo`, `membercount`, `covid`, `uptime`, `roleinfo`",
      true
    )
    .addField(
      " <a:bearHyperYay:831216264750956565> ❯ FUN [11] :",
      "`rock`, `poll`, `meme`, `dm`, `fun`, `rip`, `hungry`, `happy`, `sad`, `angry`, `math`, `say(message)`, `slap`, `punch`, `hug`, `kiss`, `captcha`"
    )
    .addField(" <a:dotz:831215690840277002> ❯ EXTERNAL [5] :", "`hi`, `bye`, `alok`, `ff`, `girl`")
    .addField(" <a:mod:831216141304594513> ❯ MODERATION [1] :", "`lock`, `purge`, `unlock`, `addrole`, `voicemove`, `slowmode`")
    .setImage(
      "https://cdn.discordapp.com/attachments/821363112309161984/824590026033070110/standard_14.gif"
    )
    .setTimestamp()
    .setFooter("© Kine");
    message.channel.send(help);
};

module.exports.help = {
    name: "help"
}

