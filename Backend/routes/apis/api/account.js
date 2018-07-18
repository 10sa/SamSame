'use strict'
/* load express & general modules */
const router = require('express').Router()
const jwt = require('jsonwebtoken')

/* load mongoose models */
const EmailAccount = require('./../../../database/models/emailaccuont')
const User = require('./../../../database/models/user')

/* load custom modules & functions */
const isNullOrUndefined = require('./../func/isNullOrUndefined')

router.post('/login', (req, res, next) => {
	const email = req.body.email
	const password = req.body.password
	console.log(email, password)

	const redirect_url = '/'

	const userPromise = function (data) {
		return User.findById(data.userid)
	}

	const signPromise = function (data) {
		return new Promise((resolve, reject) => {
			if (data === null)
				return res.redirect('/')

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

	if (req.user !== null) {
		return res.redirect('/')
	}

	if (isNullOrUndefined(email, password)) {
		return res.redirect('/')
	}

	EmailAccount.findOne({ email: email, password: password })
		.then(data => {
			if (data === null) {
				return res.redirect('/')
			}

			User.findById(data.userid)
				.then(resUser => {
					signPromise(resUser).then(token => {
						const bearer_token = 'bearer ' + token

						res.header(300)
						res.cookie('authorization', bearer_token, {
							maxAge: 1500000000,
							httpOnly: true
						})
						res.redirect(redirect_url)
					}).catch(next)
				})
		})
})

router.get('/logout', (req, res, next) => {
	if (req.user === null)
		return res.json({ message: 'You are not logined!' })

	req.clearCookie('authorization')
	res.json({ message: 'Success to logout' })
})

router.put('/register', (req, res, next) => {
	if (req.user !== null) {
		res.header(400)
		return res.json({ message: 'Already logined!' })
	}

	const { username, email, password } = req.body
	const level = 'User'

	if (isNullOrUndefined(username, email, password)) {
		res.header(400)
		return res.send('Fail')
	}

	EmailAccount.findOne({ email: email })
		.then(data => {
			if (data !== null)
				throw new Error('!')

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

			res.header(200)
			res.end()
		})
		.catch(next)
})

router.get('/userProfile', (req, res, next) => {
	if (req.user === null) {
		res.json(400)
		return res.json({ message: 'Could not find User!' })
	}

	User.findById(req.user.id)
		.then(user => {
			return res.json({ profile: user })
		})
		.catch(err => next(err))
})

router.post('/userProfile', (req, res, next) => {
	if (req.user === null) {
		res.header(400)
		return res.json({ message: 'Could not find User!' })
	}

	const { email, username } = req.body
	const key = email
	const value = username

	User.findByIdAndUpdate(req.user.id, {
		email: key,
		username: value
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

	res.header(200)
	res.end()
})

module.exports = router