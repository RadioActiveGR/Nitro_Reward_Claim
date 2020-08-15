const Discord = require('discord.js');
const bot = new Discord.Client()
const client = new Discord.Client();
var prefix = ">"

bot.on("ready", async () => {
  console.log("\n" + bot.user.tag + ` est pret !`)
  bot.user.setActivity(`Nitro Evenement ©`, { url: "https://www.twitch.tv/nitro", type: "STREAMING" })

});

bot.on("message", message => {
  user = message.mentions.users.first();
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);


  if (message.author.id !== "729986651702427729") {   return;
  } else 



  if (command === "concours") {
		if(!args){
			message.channel.send("Erreur **!**");
		} else {
      var giveway_embed = new Discord.MessageEmbed()
        .setColor("#7289da")
        .setTitle(`Nitro Game 1 mois`)
        .setDescription("React with :tada: to enter !\n Hosted by : <@730103947603345448>")
        .setFooter("1 winner | Ends at • 2020-08-118")
        message.client.channels.cache.get("743839128680136835").send(giveway_embed).then(message => {
          message.react('🎉')
        })

      
    }
  }

  if (command === "proof") {

      var azdazd_embed = new Discord.MessageEmbed()
        .setColor('#2f3136')
        .setTitle('**100% réél** <a:nitro:743878941579804712> ')
        .setImage('https://media.discordapp.net/attachments/742165526348038165/744252054708420658/unknown.png')
        message.client.channels.cache.get("742165525622161508").send(azdazd_embed)
        

  }


  if (command === "send") {

		let arg1 = args[0]
		let arg2 = args.slice(1).join(	' ');
		let member = message.mentions.members.first()

		message.channel.send("**le message suivant a été envoyé :** \n > " + arg2)
		message.client.channels.cache.get(arg1).send(arg2)

    }




});



bot.login("NzMwMTAzOTQ3NjAzMzQ1NDQ4.XwSoSQ.0vnIT1y0PyPGFYPEJq1-Wb82baA")
