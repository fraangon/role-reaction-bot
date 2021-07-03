/* eslint-disable no-console */

import { RULES } from '../constants.js';

const getRolByName = (name, guild) => {
    const role = guild.roles.cache.find(aRole => aRole.name === name);
    if (!role) {
        console.log(`The role ${role} does not exist`);
    }
    return role;
};

const assignRole = ({ member, guild }, role) => {
    const { roles, user } = member;
    const aRole = getRolByName(role, guild);

    if (roles.cache.has(aRole.id)) {
        console.log(`The role ${aRole.name} has already been assigned to ${user.username}`);
    } else {
        console.log(`The role ${aRole.name} will be assigned to ${user.username}`);

        roles.add([aRole]);
        // roleAssignedMessege(chanel, aRole, user);
    }
};

const handleReaction = ({ emoji: { name: reactionEmoji }, count: reactionCount, message }) => {
    RULES.forEach(({ emoji, count, role }) => {
        if (emoji === reactionEmoji && count <= reactionCount) {
            assignRole(message, role);
        }
    });
};

export function handleReactions({ reactions }) {
    reactions.cache.each(handleReaction);
}

