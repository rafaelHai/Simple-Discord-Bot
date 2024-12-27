const { Client, GatewayIntentBits, Events, ActivityType } = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('./config.json');
const interactionCreate = require('./handlers/interactionCreate');
const CommandLoader = require('./handlers/Commands');
const EventsLoader = require('./handlers/Events');

// Create a new Discord client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Activity Rotator
const activities = [
    { name: 'GN Core', type: ActivityType.Watching },
    { name: 'Made with ❤️', type: ActivityType.Playing },
    { name: 'Dev: ForzZy :)', type: ActivityType.Listening }
];

let currentActivity = 0;

// Set Bot Status
client.once(Events.ClientReady, () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
    interactionCreate(client);
    CommandLoader(client);
    EventsLoader(client);
    
    setInterval(() => {
        const activity = activities[currentActivity];
        client.user.setActivity(activity.name, { type: activity.type });
        currentActivity = (currentActivity + 1) % activities.length;
    }, 10000);
});

// Log in to Discord
client.login(config.token);
