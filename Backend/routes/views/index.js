'use strict'
const router = require('express').Router()
const auth = require('./../../middlewares/auth')
const path = require('path')

const front_path = './../../Frontend/'

router.use('/', auth)
router.get('/', (req, res) => {
    if (req.user)
        res.sendFile(path.join(front_path, 'Celebrity.html'))
    else 
        res.redirect('/login')
})

router.get('/register', (req, res) => {
    if (req.user === null)
        res.sendFile(path.join(front_path, 'register.html'))
    else 
        res.redirect('/')
})

router.get('/login', (req, res) => {
    if (req.user === null)
        res.sendFile(path.join(front_path, 'login.html'))
    else 
        res.redirect('/')
})

router.get('/detail', (req, res) => {
    if (req.user)
        res.sendFile(path.join(front_path, 'Celebrity_detail.html'))
    else 
        res.redirect('/login')
})

router.get('/favorites', (req, res) => {
    if (req.user)
        res.sendFile(path.join(front_path, 'Celebrity_Favorites.html'))
    else 
        res.redirect('/login')
})

module.exports = router