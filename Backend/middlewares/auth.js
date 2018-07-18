'use strict'
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    req.user = null

    /* extract jwt from bearer token */
    const authorization = req.cookies.authorization
    console.log(authorization)

    if (authorization === undefined) return next()

    const token = authorization.split(" ")[1]
    const secret = req.app.get('JWT_SECRET') // get jwt secrect key

    const authlogic = new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) reject(err)
            resolve(decoded)
        })
    })

    authlogic
        .then(decoded => {
            req.user = decoded
            next()
        })
        .catch(err => {
            if (err.name === 'TokenExpiredError') next()
            else next(err)
        })
}