'use strict'
const mongoose = require('mongoose')

const connect = function (app) {
    const dbhost = app.get('DB_HOST')

    mongoose.connect(dbhost, (err) => {
        if (err) throw err
        else console.log('Connection Successful')
    })
}

module.exports = connect