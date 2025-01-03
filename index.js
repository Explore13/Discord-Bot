import { Client, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on("messageCreate", (message) => {
  console.log(message.author.globalName, message.content);
  if(message.author.bot) return;
  message.reply(`Hello ${message.author.globalName}`);
});

client.on('interactionCreate',interaction=>{
  console.log(interaction);
  
})

client.login(process.env.DISCORD_TOKEN);
