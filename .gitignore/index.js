const Discord = require('discord.js');
const bot = new Discord.Client()
const client = new Discord.Client();

var prefix = "YOUR_PREFIX" 	//prefix
var config_token = ("YOUR_ACTIVITY") //activité du bot  
var config_activity = ("YOUR_ACTIVITY") //activité du bot
var config_id = ("YOUR_ID")	//id de l'owner
var channel_id = ("YOUR_CHANNEL_ID")	//id du salon ou il y aura le claim faisable



bot.on("ready", async () => {
  console.log("\n" + bot.user.tag + ` est pret ! \n\nCreator : ytzmo#8888`)
  bot.user.setActivity(`${config_activity}`, { url: "https://www.twitch.tv/nitro", type: "STREAMING" })

});



bot.on("message", message => {
  user = message.mentions.users.first();
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);

  if (message.author.id !== config_id) {   return;
  } else 


  function rasteleSembol(uzunluk, semboller) {

    var maske = '';
    if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';
    if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (semboller.indexOf('0') > -1) maske += '0123456789'; 
    var sonuc = '';
     
    for (var i = uzunluk; i > 0; --i)
    {
    sonuc += maske[Math.floor(Math.random() * maske.length)];
    }
    return sonuc;
     
    }

  if (message.content.startsWith("!claim")) {

    if (message.channel.type === "dm") return;
    else {

      if (message.channel.id === channel_id) {

        {
          var embed_embed = new Discord.MessageEmbed()
            .setDescription(`**nitro envoyé à <@${message.author.id}> **`)
            .setColor("#2f3136")

          message.channel.send(embed_embed)
          message.author.send("http://discord.gift/" + rasteleSembol(16, '0Aa'))



        }
      }


    }
  }






});


bot.login(config_token)
