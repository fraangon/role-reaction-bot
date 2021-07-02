import { RULES } from '../constants.js';

const getRolByName = (name, message) => {
    message.guild.roles.cache.each(role => console.log(role.name, role.id));
};


const assignRole = (user, role, message) => {


};

const handleReaction = ({ emoji: { name: reactionName }, count: reactionCount, message }) => {
    message.guild.roles.cache.each(role => console.log(role.name, role.id));

    RULES.forEach(({ emoji, count, role }) => {
        if (emoji === reactionName && count <= reactionCount) {
            assingRole(user, role, message);
        }
    });
};

export function handleReactions({ reactions }) {
    // console.log(JSON.stringify(reactions.cache));
    reactions.cache.each(handleReaction);
}

