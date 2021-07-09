const isReaction = (emoji, me, reaction) => {
    const haveEmoji = reaction.emoji.name === emoji;
    const userIsMe = reaction.users.cache.some(user => user.id === me.id);

    return haveEmoji && userIsMe;
};

export const haveAReaction = (msg, emoji) => {
    const me = msg.client.user;
    const reactions = msg.reactions.cache;
    return reactions.some(reaction => isReaction(emoji, me, reaction));
};
