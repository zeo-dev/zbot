const {Client, Collection} = require('discord.js');
const loadManager = require('./loadManager.js');
const databaseManager = require('./database.js');
const logger = require("../utils/logger.js");

class zBot extends Client {
    constructor(token, options){
        super(options);

        this.token = token;
        this.commands = new Collection();
        this.logger = new logger();
        this.database = new databaseManager(this);
    }

    start(){
        // Initialize the loadManager class, so it automatticaly loads the events and commands.
        new loadManager(this);

        this.database.connect();
        this.login(this.token);
    }
}

module.exports = zBot;