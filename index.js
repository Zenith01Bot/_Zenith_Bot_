const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
    console.log(`LoggedIn as ${client.user.tag}!`);
});

// الاستجابة للرسائل
client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === 'ping') {
    message.reply('Pong! 🏓');
  }

  if (message.content.trim() === 'السلام عليكم') {
    message.reply('وعليكم السلام ورحمة الله وبركاته 🌹');
  }
});

client.login('MTU1ODkwOTA3NTkzNTQ2NTQ3Mg.GjMlEU.EnuL5kvCssrlE7XmTMP0EXhEERfq72NiyA4ViE');