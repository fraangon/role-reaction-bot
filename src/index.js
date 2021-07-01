import { Client, MessageEmbed } from 'discord.js';
import dotenv from 'dotenv';

import { handleMensaje } from './handle-mensaje/handle-mensaje.js';

dotenv.config();

const client = new Client();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready', () => {
  console.log('BOT is Ready');
});

client.on('message', (msg) => {
  handleMensaje(msg);
});
