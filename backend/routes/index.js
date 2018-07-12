/* load express modules */
const router = require('express').Router()

/* load routers */
const account = require('./account')
//const profiles = require('./profiles')
//const search = require('./search')

/* load middlewares */
const auth = require('./../middlewares/auth')

router.use('/account', auth, account)
//router.use('/profiles', auth, profiles)
//router.use('/search', auth, search)

module.exports = router