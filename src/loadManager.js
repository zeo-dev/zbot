const path = require('path');
const klaw = require('klaw');

class loadManager {
    constructor(client) {
        this.client = client;

        this.loadEvents();
        this.loadCommands();
    }

    loadCommands() {
        klaw(`./commands`).on('data', (item) => {
            let itemFile = path.parse(item.path);
            if (!itemFile.ext || itemFile.ext !== '.js') return;

            let commandFile = require(`${itemFile.dir}${path.sep}${itemFile.base}`);
            let command = new commandFile(this.client);

            this.client.commands.set(command.cmd.name, command);
            this.client.logger.load('command', itemFile.name);
        }).on('error', (err) => {
            console.error(err);
        });
    }

    loadEvents() {
        klaw(`./events`).on('data', (item) => {
            let itemFile = path.parse(item.path);
            if (!itemFile.ext || itemFile.ext !== '.js') return;

            let eventFile = require(`${itemFile.dir}${path.sep}${itemFile.base}`);
            let event = new eventFile(this.client);

            this.client.on(itemFile.name, (...args) => event.run(...args));
            this.client.logger.load('event', itemFile.name);
        }).on('error', (err) => {
            console.error(err);
        });
    }
}

module.exports = loadManager;