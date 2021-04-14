"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const discord_js_1 = __importDefault(require("discord.js"));
const bot = new discord_js_1.default.Client();
const path_1 = __importDefault(require("path"));
path_1.default.join(process.cwd() + '/data');
bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});
