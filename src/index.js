import { Client } from 'discord.js';
import dotenv from 'dotenv';

import { handleReactions } from './functions/handle-reaction.js'

dotenv.config();

const client = new Client();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready', () => {
  console.log('BOT is Ready');
});

client.on('messageReactionAdd', ({message}) => {
  handleReactions(message)
});