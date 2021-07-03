import dotenv from 'dotenv';

import { client } from './functions/client.js';
import { handleReactions } from './functions/handle-reaction.js';

dotenv.config();


client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready', () => {
  console.log('BOT is Ready');
});

client.on('messageReactionAdd', ({ message, emoji }) => {
  console.log('new reaction: ', emoji.name);
  handleReactions(message);
});
