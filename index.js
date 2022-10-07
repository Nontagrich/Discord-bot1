const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');

const prefix = '>';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const dotenv = require('dotenv');

dotenv.config();

client.on("ready", () => {
  console.log(`Bot is Online!`);

  client.user.setActivity("Overcooked");
});

const menuforme = ["เมนูแนะนำสำหรับคุณ: ยำผัดกระดูกหมา", "เมนูแนะนำสำหรับคุณ: ข้าวเที่ยง", "เมนูแนะนำสำหรับคุณ: ข้าวมันหมาทอด", "เมนูแนะนำสำหรับคุณ: ต้มยำเป็ดอีเห็ดสด", "เมนูแนะนำสำหรับคุณ: ข้าวไข่เจียว"]
const talk = ["ขอโทษครับ วัตถุดิบไม่พอ", "เดี๋ยวไปซื้อวัตถุดิบแปป", "ได้จัดให้", "ใครมาทำอะไรห้องครัว วัตถุดิบหายหมดเลย"]


client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'help') {
    await interaction.reply("สวัสดีครับทุกคน ผมชื่อพีระพัด เพื่อนๆผมชอบเรียกผมว่า 'อู๋' ปัจจุบันผมทำงานเป็นเชฟในเครืออาราซากะตั้งอยู่ในเมืองไนท์ซิตี้\nฝากตัวด้วยนะครับ\n\n/menu (เมนูอาหารของร้านผม)\n\n/menuforme (ผมจะแนะนำอาหารสำหรับคุณเอง)\n\nพิมพ์   '>อาหารที่อยู่ในเมนู'  เพื่อสั่งอาหาร");

  }

  if (interaction.commandName === 'menuforme') {
    await interaction.reply(menuforme[Math.floor(Math.random() * menuforme.length)]);
  }

  if (interaction.commandName === 'menu') {
    await interaction.reply("เมนูของร้าน: ยำผัดกระดูกหมา , ข้าวเที่ยง , ข้าวมันหมาทอด , ต้มยำเป็ดอีเห็ดสด , ข้าวไข่เจียว");
  }


});
/*
client.on("messageCreate", (message) => {
  if(message.content.toLowerCase() === 'สวัสดีอู๋'){
    message.reply('ครับผม! วันนี้อยากทานอะไรไหมครับ');
  }
  if(message.content.toLowerCase() === "/order ข้าวไข่เจียว"){
    message.reply('ไข่หมดครับ ทำไม่ได้');
  }
  if(message.content.toLowerCase() === "/order ข้าวเที่ยง"){
    message.reply('ได้ เดี๋ยวนั่งรถไปวัดแปป');
  }
  if(message.content.toLowerCase() === "/order เนื้อพ่อกู"){
    message.reply('เอาพ่อเมิงมาดิ');  
  }
  if(message.content.toLowerCase() === "/order เนื้อพ่อมึง"){
    message.reply(talk[Math.floor(Math.random() * talk.length)]);  
  }
  if(message.content.toLowerCase() === "/order ส้นตีนกู"){
    message.reply(talk[Math.floor(Math.random() * talk.length)]);  
  }
  if(message.content.toLowerCase() === "/order ส้นตีนมึง"){
    message.reply(talk[Math.floor(Math.random() * talk.length)]);  
  }

});
*/
client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLocaleLowerCase();

  //message array

  const messageArray = message.content.split(" ");
  const argument = messageArray.slice(1);
  const cmd = messageArray[0];

  //Command

  //test command
  if (command === "test") {
    message.reply("Bot is Work!");
  }
  if (command === "ข้าวไข่เจียว") {
    message.reply(talk[Math.floor(Math.random() * talk.length)]);
  }
  if (command === "ข้าวเที่ยง") {
    message.reply("ได้ เดี๋ยวนั่งรถไปวัดแปป");
  }
  if (command === "ข้าวมันหมาทอด") {
    message.reply(talk[Math.floor(Math.random() * talk.length)]);
  }
  if (command === "ยำผัดกระดูกหมา") {
    message.reply(talk[Math.floor(Math.random() * talk.length)]);
  }
  if (command === "ต้มยำเป็ดอีเห็ดสด") {
    message.reply(talk[Math.floor(Math.random() * talk.length)]);
  }
  
})


client.login(process.env.TOKEN);