class commandBase {
    constructor(client, {
        name = null,
        desc = "No description",
        usage = name,
        guildOnly = false,
        guildOwnerOnly = false,
        devOnly = false,
    }){
        this.client = client;
        this.cmd = {name, desc, usage};
        this.options = {guildOnly, guildOwnerOnly, devOnly};
    }

    run(msg, args) {
        console.log("NO RUN FUNCTION FOUND!")
    }
}

module.exports = commandBase;