'use strict'
/* load express & general modules */
const router = require('express').Router()
const jwt = require('jsonwebtoken')

/* load mongoose models */
const EmailAccount = require('./../../database/models/emailaccuont')
const User = require('./../../database/models/user')

/* load custom modules & functions */
const isNullOrUndefined = require('./../func/isNullOrUndefined')

router.post('/login', (req, res, next) => {
	const email = req.body.email
	const password = req.body.password

	const userPromise = function (data) {
		return User.findById(data.userid)
	}

	const signPromise = function (data) {
		return new Promise((resolve, reject) => {
			if (data === null)
				return res.json({ message: 'Could not find User!' })

			jwt.sign(
				{
					id: data._id,
					username: data.username,
					level: data.level
				},
				req.app.get('JWT_SECRET'),
				{
					expiresIn: '45m',
					issuer: 'celebrity.org',
					subject: 'userinfo'
				},
				(err, token) => {
					if (err) reject(err)
					resolve(token)
				}
			)
		})
	}

	if (req.user !== null)
		return res.json({ message: 'Already logined!' })

	if (isNullOrUndefined(email, password))
		return res.json({ message: 'Wrong Input!' })

	EmailAccount.findOne({ email: email, password: password })
		.then(data => {
			if (data === null)
				return res.send('Not Found')

			User.findById(data.userid)
				.then(resUser => {
					signPromise(resUser).then(token => {
						res.send(token)
					}).catch(err => {
						next(err)
					})
				})
		})
})

router.get('/logout', (req, res, next) => {
	if (req.user === null)
		return req.json({ message: 'You are not logined!' })

	req.headers.authorization = null
	res.json({ message: 'Success to logout' })
})

router.put('/register', (req, res, next) => {
	if (req.user !== null)
		return res.json({ message: 'Already logined!' })

	const { username, email, password } = req.body
	const level = 'User'

	console.log(req.body)

	if (isNullOrUndefined(username, email, password))
		return res.send('Fail')

	EmailAccount.findOne({ email: email })
		.then(data => {
			if (data !== null)
				return res.send('Fuck')

			let user = new User({
				username: username,
				email: email,
				level: level
			})
			user.save()

			let eac = new EmailAccount({
				userid: user._id,
				email: email,
				password: password
			})
			eac.save()
		})
		.catch(err => {
			next(err)
		})

	res.json({ message: 'Success to register!' })
})

router.get('/userProfile', (req, res, next) => {
	if (req.user === null)
		return res.json({ message: 'Could not find User!' })

	User.findById(req.user.id)
		.then(user => {
			return res.json({ userProfile: user })
		})
		.catch(err => next(err))
})

router.post('/userProfile', (req, res, next) => {
	if (req.user === null)
		return res.json({ message: 'Could not find User!' })

	const { email, username } = req.body

	User.findByIdAndUpdate(req.user.id, {
		email: email,
		username: username
	}, (err, res) => {
		if (err) next(err)
	})

	EmailAccount.findOneAndUpdate({ userid: req.user.id },
		{
			email: email
		},
		(err, res) => {
			if (err) next(err)
		})

	res.json({ message: 'Success to update user' })
})

module.exports = router