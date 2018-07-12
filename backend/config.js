const dotenv = require('dotenv').config()
const dbconfig = require('./database/connect')

const setEnv = function (app) {
    return new Promise(function (resolve, reject) {
        try {
            for (let s in process.env) {
                // dotenv configure
                app.set(s, process.env[s])
            }
            resolve(app)
        } catch (err) {
            reject(err)
        }
    })
}

const errorProc = function (err) {
    console.log('Error Catched!')
    console.log(err)
}

module.exports = function (app) {
    setEnv(app)
        .then(dbconfig)
        .catch(errorProc)
}