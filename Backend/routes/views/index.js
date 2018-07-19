'use strict'
const router = require('express').Router()
const auth = require('./../../middlewares/auth')
const path = require('path')

router.use('/', auth)
router.get('/', (req, res) => {
    const front_path = req.app.get('FRONT_PATH')
    if (req.user)
        res.sendFile(path.join(front_path, 'Celebrity.html'))
    else
        res.redirect('/login')
})

router.get('/register', (req, res) => {
    const front_path = req.app.get('FRONT_PATH')
    if (req.user === null)
        res.sendFile(path.join(front_path, 'register.html'))
    else
        res.redirect('/')
})

router.get('/login', (req, res) => {
    const front_path = req.app.get('FRONT_PATH')
    if (req.user === null) {
        res.sendFile(path.join(front_path, 'login.html'))
    }
    else
        res.redirect('/')
})

router.get('/detail', (req, res) => {
    const front_path = req.app.get('FRONT_PATH')
    if (req.user)
        res.sendFile(path.join(front_path, 'Celebrity_detail.html'))
    else
        res.redirect('/login')
})

router.get('/favorites', (req, res) => {
    const front_path = req.app.get('FRONT_PATH')
    if (req.user)
        res.sendFile(path.join(front_path, 'Celebrity_Favorites.html'))
    else
        res.redirect('/login')
})

module.exports = router