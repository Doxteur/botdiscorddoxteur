const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('*');

bot.on('ready', function() {
    bot.user.setUsername('HackceS');
    bot.user.setAvatar('./cookie.png')
    bot.user.setGame('*ping');
    console.log('Connected');

});

bot.login(process.env.TOKEN);

bot.on( 'message', message => {
    if (message.content === prefix + 'pong'){
        message.reply("ping");
    }

});