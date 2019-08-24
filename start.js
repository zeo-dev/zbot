require('dotenv').config()

const Client = require('./src/client.js');
const zBot = new Client(process.env.DISCORD_TOKEN);

zBot.start();