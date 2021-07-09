export const haveAReaction = (msg, emoji) => {
    const reactions = msg.reactions.cache;
    return reactions.some(reaction => reaction.emoji.name === emoji);
};
