// jshint esversion:10
require('dotenv').config();
import Discord from 'discord.js';
const bot = new Discord.Client();
import path from 'path';
path.join(process.cwd() + '/data');

bot.login(process.env.TOKEN);

bot.on('ready', () => {
   console.info(`Logged in as ${bot.user.tag}!`);
});
