const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    enabled: true,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    
    async execute(interaction) {
        const ping = interaction.client.ws.ping; // Get bot's ping
        
        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Pong!')
            .setDescription(`Latency: **${ping}ms**`)
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .setAuthor({
                name: interaction.user.username,
                iconURL: interaction.user.displayAvatarURL({ dynamic: true })
            })
            .setFooter({ text: 'GN Development', iconURL: interaction.guild.iconURL({ dynamic: true}) })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    }
};
