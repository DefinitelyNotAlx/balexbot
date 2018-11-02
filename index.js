const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "~" 
require('./utilities/EventLoader')(client);
// Commands
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  let args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage(`Pong! \`${Date.now() -  message.createdTimestamp} ms\``)
  } else

  if (message.content.startsWith(prefix + 'diceroll')) {
    var roll = Math.floor(Math.random() * 6) + 1;
    message.channel.sendMessage(':confetti_ball: Congrats! You rolled a ' + roll);
  } else

  if (message.content.startsWith(prefix + 'setstatus')) {
    client.user.setStatus(argresult);
  } else

  if (message.content.startsWith(prefix + 'setgame')) {
    client.user.setGame(argresult);
  } 

  
  

});

// Guild Events
client.on('guildDelete', guild =>{
  console.log(`I have left ${guild.name} at ${new Date()}`);
});
client.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage(`:confetti_ball: I have arrived here in ${guild.name}`);
});
client.on(`guildMemberAdd`, member => {
  let guild = member.guild
  guild.defaultChannel.sendMessage(`Welcome ${member.user} to ${guild.name}`);
})
client.on(`guildMemberAdd`, member => {
  let guild = member.guild
  guild.defaultChannel.sendMessage(`Bye bye ${member.user}!`)
})









// Bot Token DO NOT CHANGE
client.login("NTA1NTA3NjExNzUyNTI5OTMw.DrvDhw.LEVnmYUEVZu-njCN77eUAO0f3Jg");
