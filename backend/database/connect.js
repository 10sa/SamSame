const mongoose = require('mongoose')

const connect = function (app) {
    const dbhost = app.get('DB_HOST')

    return new Promise(function (resolve, reject) {
        try {
            mongoose.connect(dbhost, err => {
                console.log(err)
                if (err) throw err
            })
        } catch(err) {
            reject(err)
        }

        console.log('Connection to ' + dbhost)
        resolve(app)
    })
}

module.exports = connect