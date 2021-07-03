import { ASSIGN_MESSAGE } from '../constants.js';

const remplaceValue = (value) => (string, text) => string.replace(`{{${value}}}`, text);
const remplaceUsername = remplaceValue('username');
const remplaceRole = remplaceValue('role');

const assingMessage = (role, user) => remplaceRole(remplaceUsername(ASSIGN_MESSAGE, user.toString()), role.toString());

export function roleAssignedMessege(channel, role, user) {
    channel.send(assingMessage(role, user));
}
