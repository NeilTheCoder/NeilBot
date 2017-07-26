const Discord = require('discord.js');
const bot = new Discord.Client();
const credentials = require('./credentials.json');
let prefix = "//";

bot.on('ready', () => {
    console.log(`Warning: Please don't do the ${prefix}ban and ${prefix}kick commands in DM!  ===================================\n\n     I| Selfbot 1.0.2 |I     \n\nUser\'s Username: ${bot.user.tag}\nPrefix: ${prefix}\nBot ID: ${bot.user.id}\nCurrently in: ${bot.guilds.size} Guilds\n\n===================================`)
});

bot.on('ready', () => {
    bot.user.setStatus('online')
});

bot.on('message', message => {
    let args = message.content.split(' ').slice(1);
    let thing = args.join(' ');
    if(message.content.startsWith(prefix + 'ping')) {
        if(message.author !== bot.user) return;
        message.delete();
        message.channel.send(`**Pong! :ping_pong: Roundtrip troop __${Math.floor(bot.ping)}__ ms to Reply!**`)
    } else
    if(message.content.startsWith(prefix + 'setgame')) {
        if(message.author !== bot.user) return;
        message.delete();
        bot.user.setGame(thing)
    } else
    if(message.content.startsWith(prefix + 'rename')) {
        if(message.author !== bot.user) return;
        message.delete();
        bot.user.setUsername(thing, credentials.password)
    } else
    if(message.content.startsWith(prefix + 'kiss')) {
        if(message.author !== bot.user) return;
        message.delete();
        var user = message.mentions.users.first();
        if(!user)
            return message.channel.send(`**Please specify a user to Kiss! :open_mouth: **`);
        message.channel.send(`**Successfully kissed ${user.tag} :kiss:**`)
    } else
    if(message.content.startsWith(prefix + 'marry')) {
        if(message.author !== bot.user) return;
        message.delete();
        let reason = args.slice(1).join(' ');
        var user = message.mentions.users.first();
        if(!user)
            return message.channel.send(`**Who you gonna marry? :thinking:**`)
        if(!reason)
            return message.channel.send(`**Why are you gonna marry ${user}? :thinking:**`)
        message.channel.send(`**Congrats! I just married ${user.tag}** :tada:`)
    } else
    if(message.content.startsWith(prefix + 'embed')) {
        if(message.author !== bot.user) return;
                message.delete();
        var embedmsg = args.join(' ');
        const embed = new Discord.RichEmbed()
  .setAuthor(bot.user.username, message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(embedmsg)
    message.channel.send({embed});
    } else
    if(message.content.startsWith(prefix + 'shutdown')) {
        message.delete();
        message.channel.send(`**Selfbot Shutting Down... :wave:**`).then(() => process.exit(0));
    } else
    if(message.content.startsWith(prefix + 'help')) {
        if(message.author !== bot.user) return;
        message.delete();
        message.channel.send(`**\`\`\`\A Perfectly Good Help Message!\n\nCommands List:\n${prefix}ping - Pong!\n${prefix}setgame - Sets your game!\n${prefix}setstream - Sets your game but Streaming!\n${prefix}rename - Changes your name\n${prefix}kiss - Kisses a User!\n${prefix}marry - Marry a User!\n${prefix}embed - Embeds stuff!\n${prefix}shutdown - Shutdowns the Bot!\n${prefix}kick - Kicks a User with Reason!\n${prefix}ban - Bans a User with Reason!\`\`\`\**`)
    } else
    if(message.content.startsWith(prefix + 'setstream')) {
        if(message.author !== bot.user) return;
        message.delete();
    let game = args.join(' ');
    if(!game)
        return message.channel.send(`**Please add a Game to it!**`);
        message.channel.send(`**Changed my Stream Status to:\n__${game}__**`)
        bot.user.setGame(game, `https://twitch.tv/123`)
    } else
    if(message.content.startsWith(prefix + 'kick')) {
        if(message.author !== bot.user) return;
		message.delete();
            let reasonmod = args.slice(1).join(' ');
            var user = message.mentions.users.first();
            let member = message.guild.member(user);
        if(!message.member.hasPermission('KICK_MEMBERS'))
            return message.channel.send(`**I made this Selfbot not for abuse!\nYou need the \`\Kick Members\`\ Permission! :no_entry_sign:**`)
        if(!user)
            return message.channel.send(`**You can't kick yourself! :no_entry_sign:\nNext time, specify a user! :ok_hand:**`);
        if(!reasonmod)
            return message.channel.send(`**Supply a reason for the kick!**`);
        message.channel.send(`**User Got Kicked!\n\nUsername: ${user.tag}\nResponsible Kicker: ${message.author}\nReason: ${reasonmod}**`)
        member.kick();
     } else
     if(message.content.startsWith(prefix + 'ban')) {
        if(message.author !== bot.user) return;
		message.delete();
		if(!message.member.hasPermission('BAN_MEMBERS'))
            return message.channel.send(`**I made this Selfbot not for abuse!\nYou need the \`\Ban Members\`\ Permission! :no_entry_sign:**`)
        if(!user)
            return message.channel.send(`**You can't ban yourself! :no_entry_sign:\nNext time, specify a user! :ok_hand:**`);
        if(!reasonmod)
            return message.channel.send(`**Supply a reason for the kick!**`);
        message.channel.send(`**User Got Banned!\n\nUsername: ${user.tag}\nResponsible Banner: ${message.author}\nReason: ${reasonmod}**`)
        member.ban();
     }
});

bot.login(credentials.token)

// This Selfbot was made by Neil#8331 and PepperJS#7290
