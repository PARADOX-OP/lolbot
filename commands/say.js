const { MessageFlags } = require("discord.js");


module.exports = {
    name: "say",
    desciption: "say command",

    async run (client, message, args) {
 if (!message.member.permissions.any(["ADMINISTRATOR"])) {

        return message.reply(":x: You don't have `Administrator` power to use this command.");
 }
 
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}
      
      
      
      
    
