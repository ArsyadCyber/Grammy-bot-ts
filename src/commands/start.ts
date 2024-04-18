import {Context} from 'grammy';

export async function startCommand(ctx: Context): Promise<void> {
  const fullName = ctx.from?.first_name + ' ' + ctx.from?.last_name;
  const username = ctx.from?.username;
  let currentHour = new Date().getUTCHours() + 7;

  // Jika jam melebihi 24, kurangi 24 untuk mendapatkan jam dalam rentang 0-23
  if (currentHour > 24) {
    currentHour -= 24;
  }
  // Menentukan pesan selamat berdasarkan jam
  let greeting;
  if (currentHour >= 1 && currentHour < 10) {
    greeting = 'Selamat pagi';
  } else if (currentHour >= 10 && currentHour < 15) {
    greeting = 'Selamat siang';
  } else if (currentHour >= 15 && currentHour < 18) {
    greeting = 'Selamat sore';
  } else {
    greeting = 'Selamat malam';
  }
  await ctx.reply(
    `${greeting} *${fullName}* (_@${username}_), bot ini menyediakan fitur AI untuk kamu gunakan, silahkan gunakan _/help_ untuk melihat menu bantuan`,
    {
      parse_mode: 'Markdown',
    }
  );
}
