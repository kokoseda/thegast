const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("Bot Online"); 
console.log("log");
});
var prefix = "$";

client.on('ready', () => {
    client.user.setActivity("$help ||X_PRO ",{type: 'WATCHING'})

});

const devs = ["388357326614167563"];
const adminprefix = ["$"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();
  } else
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});




client.on('message', message => {
var prefix = "$";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
                      if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.sendMessage('🔘 Hey! || You Don\'t Have Perms . ')
    if (!args[1]) {
message.channel.send(`** $ أستعمل : $bc [الرسالة] \n يمكنك أرسال صوره مع البرودكاست :smile:**`);
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `<@${message.author.id}>`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            m.send(`${m}`,{embed: bc})
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
}
})
}
}
});


client.on("message", message => {

    if (message.content.startsWith(prefix + "bco")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
message.delete(); 
};     
});




var prefix = "$"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message' , message => {
    var prefix = "$";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});



client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("$ticket")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("$close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`$confirm\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '$confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })    /// ALPHA CODES
                    .then((collected) => {
                        message.channel.delete();
                    })    /// ALPHA CODES
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});



client.on('message', message => {
    var prefix = "$";         //<=== هنا تقدر تغير البريفكس
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {            //Codes Development .
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));         //Codes Development .
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);      //Codes Development .
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))   //Codes Development .
 
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();
 
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {          //Codes Development .
 
        }           //Codes Development .
      }}).then(msg => {msg.delete(3000)});
 
})     //Codes Development .
reaction2.on("collect", r => {   //Codes Development .
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});   //Codes Development .





const bannedwords = [
    "كول زق",
    "كول خرا",
    "كل زق",
    "السبة",
    "السبة",
    "السبة"

  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنع الشتم في سيرفرنا او سوف تتعرض الي  ميوت ").then(msg => {msg.delete(5000)});;
  };
});

client.on('message' , message => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + "ping")) {
   message.channel.send('pong').then((msg) => {
  var PinG = `${Date.now() - msg.createdTimestamp}`
  var ApL = `${Math.round(client.ping)}`
        msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
   })
    }  
   });

   client.on('message', message => {
    const embed = new Discord.RichEmbed();
  if (message.content.startsWith("$server")) {
let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": "Brazil",
        "eu-central": "Central Europe",
        "singapore": "Singapore",
        "us-central": "U.S. Central",
        "sydney": "Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong"
    };

    var emojis;
    if (message.guild.emojis.size === 0) {
        emojis = 'None';
    } else {
        emojis = message.channel.guild.emojis.map(e => e).join(" ");
    }
embed.setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : client.user.displayAvatarURL)
.setThumbnail(message.guild.iconURL ? message.guild.iconURL : me.user.displayAvatarURL)
.addField("• Created", `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
.addField("• ID", message.guild.id, true)
.addField("• Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
.addField("• Region", region[message.guild.region], true)
.addField("• Members", message.guild.memberCount, true)
.addField("• Roles", message.guild.roles.size, true)
.addField("• Channels", message.guild.channels.size, true)
.addField("• Emojis", emojis, true)
.addField("• Verification Level", verifLevels[message.guild.verificationLevel], true)
.addField("• Default Channel", message.guild.defaultChannel, true)
.setColor(3447003)
message.channel.send({embed});
}
});
function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
  };



client.on('message', message => {
    var prefix = "$";
    
        if (message.content === prefix + "date") {
            if (!message.channel.guild) return message.reply('** This command only for servers **');  
            var currentTime = new Date(),
                Year = currentTime.getFullYear(),
                Month = currentTime.getMonth() + 1,
                Day = currentTime.getDate();
    
                var Date15= new Discord.RichEmbed()
                .setTitle("**「  Date - التاريخ 」 **")
                .setColor('RANDOM')
                .setTimestamp()
                .setDescription( "「"+ Day + "-" + Month + "-" + Year + "」")
                 message.channel.sendEmbed(Date15);
        }
    });

    client.on('message', Sal => { // By Salto7#4595
        if(Sal.content === '$bot') { //هنا تغير البرفيكس
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(client.user.avatarURL)
        .addField('Bot Name', client.user.username, true)
        .setFooter(client.user.tag, client.user.avatarURL, true)
        .addField('Bot Tag', client.user.discriminator, true)
        .addField('Bot id', client.user.id, true)
        .addField('Create Bot At', client.user.createdAt, true)
        Sal.channel.sendEmbed(embed);
      }
      });


      client.on('message', message => {
        if (message.content.startsWith("$avatar")) {
            if (message.author.bot) return
            var mentionned = message.mentions.users.first();
        var omar;
          if(mentionned){
              var omar = mentionned;
          } else {
              var omar = message.author;
              
          }
            const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor('Avatar Link :')
            .setTitle('Click Here')
            .setURL(`${omar.avatarURL}`)
            .setImage(`${omar.avatarURL}`)
            .setFooter('『𝕏_ℙℝ𝕆_𝕊𝕐𝕊𝕋𝔼𝕄』',client.user.avatarURL) 
          message.channel.sendEmbed(embed);
        }
    });


    client.on('message' , message => {
        var prefix = "$";
        if(message.author.bot) return;
       
        if(message.content.startsWith(prefix + "xo")) {
       let array_of_mentions = message.mentions.users.array();
        let symbols = [':o:', ':heavy_multiplication_x:']
        var grid_message;
       
        if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
          let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
          let random2 = Math.abs(random1 - 1);
          if (array_of_mentions.length == 1) {
            random1 = 0;
            random2 = 0;
          }
          let player1_id = array_of_mentions[random1].id;
          let player2_id = array_of_mentions[random2].id;
          var turn_id = player1_id;
          var symbol = symbols[0];
          let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
          if (player1_id == player2_id) {
            initial_message += '\n_( playing this game with yourself :joy:)_'
          }
          message.channel.send(`Xo ${initial_message}`)
          .then(console.log("Successful tictactoe introduction"))
          .catch(console.error);
          message.channel.send(':one::two::three:' + '\n' +
                               ':four::five::six:' + '\n' +
                               ':seven::eight::nine:')
          .then((new_message) => {
            grid_message = new_message;
          })
          .then(console.log("Successful tictactoe game initialization"))
          .catch(console.error);
          message.channel.send('Loading... Please wait for the :ok: reaction.')
          .then(async (new_message) => {
            await new_message.react('1⃣');
            await new_message.react('2⃣');
            await new_message.react('3⃣');
            await new_message.react('4⃣');
            await new_message.react('5⃣');
            await new_message.react('6⃣');
            await new_message.react('7⃣');
            await new_message.react('8⃣');
            await new_message.react('9⃣');
            await new_message.react('🆗');
            await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
            .then((new_new_message) => {
              require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
            })
            .then(console.log("Successful tictactoe listener initialization"))
            .catch(console.error);
          })
          .then(console.log("Successful tictactoe react initialization"))
          .catch(console.error);
        }
        else {
          message.reply(` :anger: \`Use : ${prefix}xo @player1 @player2\``)
          .then(console.log("Successful error reply"))
          .catch(console.error);
        }
      }
       });


       client.on ('message',async Sal => { //By Salto7#4595
        let embed = new Discord.RichEmbed()
        if (Sal.content === "$id") {
          let embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .setThumbnail(Sal.author.avatarURL)
         .setImage(Sal.author.avatarURL)
         .addField("اسمك:",`${Sal.author.username}`, true)
         .addField('ايديك:',"" +  Sal.author.id, true)
         .addField('تاقك', Sal.author.discriminator, true)
         .addField('تم الانشاء في', Sal.author.createdAt, true)
         Sal.channel.sendEmbed(embed);
        }
      });

      























































































































































































































































































client.login('NDk3MDg0NzA4MDczNTA0Nzc4.DqDZ0Q.JEy2Bde5RVR7kOVpPfwRJ5fo40E');