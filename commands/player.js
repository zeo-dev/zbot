const commandBase = require('../src/commandBase.js');
const {RichEmbed} = require('discord.js')

class player extends commandBase {
    constructor(client){
        super(client, {
            name: 'player',
            desc: 'Get roleplay information about a player!',
            usage: 'roleplay <rpName>',
            guildOnly: true
        })
    }

    run(msg, args){
        let qs = `SELECT * FROM \`darkrp_player\` WHERE rpname = '${args[0]}'`;
        this.client.database.query(qs, function(results, fields) {
            let embed = new RichEmbed()
            .setTitle(`${results[0].rpname}'s Info`)
            .addField("Money", "$" + results[0].wallet);

            msg.channel.send(embed)
        });
    }
}

module.exports = player;