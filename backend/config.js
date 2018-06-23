require('dotenv').config()

/*
    Write here dotenv configure varaible :
    PORT = (NUMBER)
*/

module.exports = function(app) {
    /* .env config */
    for(key in process.env) {
        let val = process.env[key]
        app.set(key, val)
    }
}