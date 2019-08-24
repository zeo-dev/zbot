const mysql = require('mysql');
require('dotenv').config();

class DatabaseManager {
    constructor(client) {
        this.client = client;
    }

    connect(){
        this.client.logger.error("uwu")
        this.connection = mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
        })

        this.connection.connect(function(err) {
            if (err) {
                this.client.logger.error("Error occured while trying to connect to the database!")
                this.client.logger.error(err);
                return;
            }

            //this.client.logger.error("uwu")
        });
    }

    query(qs, callback){
        this.connection.query(qs, function(error, results, fields) {
            if (error) throw error;

            callback(results, fields)
        });
    }
}

module.exports = DatabaseManager;