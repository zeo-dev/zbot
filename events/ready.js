class ready {
    constructor(client){
        this.client = client;
    }

    run() {
        this.client.logger.success(`Bot logged in as ${this.client.user.username}#${this.client.user.discriminator}!`);
    }
}

module.exports = ready;