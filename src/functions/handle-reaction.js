/* eslint-disable no-negated-condition */
/* eslint-disable curly */
/* eslint-disable no-console */

import { RULES, REVIEWED_MESSAGE } from '../constants.js';

import { roleAssignedMessege, roleUnassignedMessege } from './role-assing-messsage.js';
import { haveAReaction } from './have-a-reaction.js';
import { checkAsReviewed } from './check-as-reviewed.js';

const getRolByName = (name, guild) => {
    const role = guild.roles.cache.find(aRole => aRole.name === name);
    if (!role) {
        console.log(`The role ${role} does not exist`);
    }
    return role;
};

const assignRole = ({ member, guild, channel, content }, role) => {
    const { roles, user } = member;
    const aRole = getRolByName(role, guild);

    if (!aRole) return;

    if (roles.cache.has(aRole?.id)) {
        console.log(`The role ${aRole.name} has already been assigned to ${user.username}`);
    } else {
        console.log(`The role ${aRole.name} will be assigned to ${user.username}`);

        roles.add([aRole]);
        roleAssignedMessege(channel, content, user);
    }
};

const unassignRole = ({ member, guild, channel, content }, role) => {
    const { roles, user } = member;
    const aRole = getRolByName(role, guild);

    if (!aRole) return;

    if (roles.cache.has(aRole?.id)) {
        console.log(`The role ${aRole.name} will be unassigned to ${user.username}`);

        roles.remove([aRole]);
        roleUnassignedMessege(channel, content, user);
    } else {
        console.log(`The role ${aRole.name} is not assigned to ${user.username}`);
    }
};


const handleReaction = ({ emoji: { name: reactionEmoji }, count: reactionCount, message }) => {
    if (!haveAReaction(message, REVIEWED_MESSAGE)) {
        RULES.forEach(({ emoji, count, role, removeRole }) => {
            if (emoji === reactionEmoji && count <= reactionCount) {
                checkAsReviewed(message);
                if (role) assignRole(message, role);
                if (removeRole) unassignRole(message, removeRole);
            }
        });
    }
};

export function handleReactions({ reactions }) {
    reactions.cache.each(handleReaction);
}

