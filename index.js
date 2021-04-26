const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
client.config = config;

//  discord giveaways
const { GiveawaysManager } = require("discord-giveaways");
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./database.json",
  updateCountdownEvery: 3000,
  default: {
    botsCanWin: false,
    embedColor: "#FF0000",
    reaction: "🎉"
  }
});
//Coded by Mukesh

/* Load all events */
fs.readdir("./events/", (_err, files) => {
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(` Event loaded: ${eventName}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

client.commands = new Discord.Collection();

/* Load all commands */
fs.readdir("./commands/", (_err, files) => {
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log(` Command loaded: ${commandName}`);
  });
});

client.on("message", message => {
  if (message.content === "prefix") {
    message.channel.send("My prefix is g");
  }
});

client.on("message", message => {
  if (message.content === "hi") {
    message.channel.send("hlo how are you ");
  }
});

client.on("message", message => {

if(message.content === "pilla" ) {

 message.channel.send("https://cdn.discordapp.com/attachments/827177432762810368/830486793559867402/azarala.gif") 

} 

})

client.on("message", message => {

if(message.content === "<@789884331245436928>" ) {

 message.channel.send("My prefix is g") 

} 

})

client.on("message", message => {

if(message.content === "fuck" ) {
  
   message.delete();

 message.channel.send("NO BAD WORDS HERE") 

} 

})


client.on("message", message => {

if(message.content === "porn" ) {
  
   message.delete();

 message.channel.send("NO BAD WORDS HERE") 

} 

})

client.on("message", message => {

if(message.content === "FUCK" ) {
  
   message.delete();

 message.channel.send("NO BAD WORDS HERE") 

} 

})





// Login through the client
client.login(process.env.token);
