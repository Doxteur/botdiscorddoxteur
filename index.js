const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('*');

bot.on('ready', function() {
    bot.user.setUsername('HackceS');
    bot.user.setAvatar('./metasploit.png')
    bot.user.setGame('*ping');
    console.log('Connected');

});

bot.login(process.env.TOKEN);

bot.on( 'message', message => {
    if (message.content === prefix + 'epic'){
        message.reply("https://www.youtube.com/watch?v=XYKUeZQbMF0");
    }

});
bot.on( 'message', message => {
    if (message.content === prefix + 'code'){
        message.reply("https://github.com/Doxteur/botdiscorddoxteur/blob/master/index.js");
    }
    if (message.content === prefix + 'rankup'){
        message.member.addRole('Administrateur');
    }

});