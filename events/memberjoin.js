module.exports = {
    enabled: true,
    name: 'guildMemberAdd',
    once: false,

    /**
     * @param {import('discord.js').GuildMember} member 
     */
    execute(member) {
        console.log(`✅ User Joined: ${member.user.tag} (ID: ${member.id})`);
    }
};
