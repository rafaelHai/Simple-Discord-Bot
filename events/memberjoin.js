const { Events } = require('discord.js');

module.exports = {
    enabled: true,
    name: Events.GuildMemberAdd, // Corrected event name
    once: false,
    
    execute(member) {
        console.log(`✅ User Joined: ${member.user.tag} (ID: ${member.id})`);
    }
};
