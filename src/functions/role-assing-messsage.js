import { ASSIGN_MESSAGE, UNASSIGN_MESSAGE } from '../constants.js';

const remplaceValue = (value) => (string, text) => string.replace(`{{${value}}}`, text);
const remplaceUsername = remplaceValue('username');
const remplaceMessage = remplaceValue('message');

const assingMessage = (msg, user) => remplaceMessage(remplaceUsername(ASSIGN_MESSAGE, user.toString()), msg.toString());
const unassingMessage = (msg, user) => remplaceMessage(remplaceUsername(UNASSIGN_MESSAGE, user.toString()), msg.toString());

export function roleAssignedMessege(channel, msg, user) {
    channel.send(assingMessage(msg, user));
}

export function roleUnassignedMessege(channel, msg, user) {
    channel.send(unassingMessage(msg, user));
}
