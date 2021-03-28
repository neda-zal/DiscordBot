// jshint esversion:10
require('dotenv').config();
var express = require('express');
var Discord = require('discord.js');
var bot = new Discord.Client();
var TOKEN = process.env.TOKEN;
bot.login(process.env.TOKEN);
bot.on('ready', function () {
   console.info('Logged in as ' + bot.user.tag + '!');
});
