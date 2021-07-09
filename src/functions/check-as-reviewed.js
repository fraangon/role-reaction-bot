/* eslint-disable no-console */
import { REVIEWED_MESSAGE } from '../constants.js';

export const checkAsReviewed = (msg) => {
    msg.react(REVIEWED_MESSAGE).then(() =>console.log(`The message "${msg.content}" have been reviewed`)).catch(() => console.error(`Fail when trying to react to the message "${msg.content}"`));
};
