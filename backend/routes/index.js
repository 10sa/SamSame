/* load express modules */
const router = require('express').Router()

/* load routers */
const account = require('./api/account')
const profiles = require('./api/profiles')
const search = require('./api/search')

/* load middlewares */
const auth = require('./../middlewares/auth')

router.use(auth)
router.use('/account', account)
router.use('/profiles', profiles)
router.use('/search', search)

module.exports = router