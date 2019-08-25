class message {
    constructor(client) {
        this.client = client;
    }
    
    run(message){
        if(message.author.bot) return;

        let prefixes = ['!'];
        let prefix;

        for (const thisPrefix of prefixes) {
            if(message.content.toLowerCase().indexOf(thisPrefix) == 0) prefix = thisPrefix;
        }

        // Prefix is not defined, run non-command things here
        if(!prefix) return;

        var args = message.content.slice(prefix.length).trim().split(' ');
        var command = args.shift().toLowerCase();

        let cmd;
        if(this.client.commands.has(command)){
            cmd = this.client.commands.get(command);
        }

        if(cmd && !message.guild && cmd.options.guildOnly) return message.channel.send(":x: This command is guild only!");
        if(cmd && message.author.id !== message.guild.owner.id && cmd.options.guildOwnerOnly) return message.channel.send(":x: You don't have enough permissions to run this command!");

        if(cmd){
            try {
                cmd.run(message, args)
            } catch(err){
                this.client.logger.error(err)
            }
        }
    }
}

module.exports = message;