# Simple-Discord-Bot
A simple discord.js v14 bot, with command loader, event loader, and interactionCreate handler.


## **Simple Discord Bot**

A simple, modular Discord bot built using **Discord.js v14**, designed for easy deployment and customization.

---

## 🚀 **Installation**

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/rafaelHai/Simple-Discord-Bot.git
   cd Simple-Discord-Bot
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configuration**
   - Copy the example config file:
     ```bash
     cp config.json.example config.json
     ```

      Or you can do it manually: just rename the `config.json.example` file to `config.json`.
     
   - Open `config.json` and fill in your bot details:
     ```json
     {
      "token": "YOUR_BOT_TOKEN",
      "clientId": "YOUR_CLIENT_ID",
      "guildId": "YOUR_GUILD_ID"
     }
     ```
4. **Start the Bot**
   Start the bot!
   ```bash
   node index.js
   ```



   ------------------------------

## 🛠️ Commands
- `/ping` – Replies with bot latency information.

## 📚 Features
- Modular Command Handler
- Event Listener for `guildMemberAdd`
- Embed-based Command Responses
- Enable or disable commands and events.
  Example:
  ```js
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
  ```
  
  `enabled: true/false`

  Same for the events.

  -------------------------------


If you need any help with the bot setup, or any question in general.
Please open a ticket in our server! we are happy to help.

Server Link - https://discord.gg/tF3GKku6TD
