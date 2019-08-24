const c = require('chalk');

class Logger {
    error(message){
        let timeString = this._timeString(new Date());
        console.log(c`${timeString} {bgRed {black  ERROR }} ${message}`)
    }

    warning(message){
        let timeString = this._timeString(new Date());
        console.log(c`${timeString} {bgYellow {black  WARNING }} ${message}`)
    }

    info(message){
        let timeString = this._timeString(new Date());
        console.log(c`${timeString} {bgBlue {black  INFO }} ${message}`)
    }
    
    success(message){
        let timeString = this._timeString(new Date());
        console.log(c`${timeString} {bgGreen {black  SUCCESS }} ${message}`)
    }

    load(type, loaded){
        let timeString = this._timeString(new Date());
        console.log(c`${timeString} {bgWhite {black  LOAD }} {yellow Loaded ${type}:} ${loaded}`)
    }

    database(message){
        let timeString = this._timeString(new Date());
        console.log(c`${timeString} {bgMagenta {black  DB }} ${message})`);
    }

    _timeString(date){
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
}

module.exports = Logger;