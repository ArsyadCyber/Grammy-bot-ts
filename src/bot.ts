// Import library Grammy
require('dotenv').config();
import { Bot, Context } from "grammy";
import { Router } from "@grammyjs/router";
import { startCommand } from "./commands/start";

// Ganti "YOUR_BOT_TOKEN" dengan token bot Telegram Anda
const bot = new Bot(process.env.BOT_TOKEN as string);
const router = new Router((ctx: Context) => ctx.message?.text?.split(" ")[0]);

// Menangani pesan teks
router.route("/start", startCommand);
bot.use(router);
// Mulai bot
bot.start();

console.log("Bot Telegram telah dimulai!");