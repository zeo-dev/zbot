const commandBase = require('../src/commandBase.js');
const axios = require('axios');

class link extends commandBase {
    constructor(client) {
        super(client, {
            name: 'link',
            desc: 'Link a steam account to your discord account.',
            usage: 'link',
            guildOnly: true,
        });
    }

    run(msg) {
        let link = `http://zeodev.me/zbot/verify.php?linkID=${msg.author.id}&guildID=${msg.guild.id}`
        
        msg.author.send('Use this link to connect your steam account to your Discord account.\n' + link)
    }
}

module.exports = link;