'use strict'
module.exports = function (err, req, res, next) {
    console.log('Error Occured')
    console.log(err)
    res.header(500)
    res.json({ error: 'Error!' })
}