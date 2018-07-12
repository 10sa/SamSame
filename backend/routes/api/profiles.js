/* load express & general modules */
const router = require('express').Router()

/* load mongoose models */
const User = require('./../../database/models/user')
const Profile = require('./../../database/models/profile')

/* load custom modules & functions */
const isNullOrUndefined = require('./../func/isNullOrUndefined')

router.get('/profiles', (req, res) => {
	Profile.find({})
		.then(data => {
			res.json({ profiles: data })
		})
		.catch(err => next(err))
})

router.get('/favProfile', (req, res) => {
	if (req.user === null)
		res.json({ message: 'You are not logined!' })

	let result = []

	User.findById(req.user.id)
		.then(data => {
			if (data !== null)
				result = data.favprofiles

			return res.json({ profiles: result })
		})
		.catch(err => next(err))
})

router.put('/favProfile', (req, res) => {
	if (req.user === null)
		res.json({ message: 'You are not logined!' })

	const { profileid } = req.body

	User.findById(req.user.id)
		.then(data => {
			console.log(data.favprofiles.indexOf(profileid))
			if (data.favprofiles.indexOf(profileid) !== null)
				return res.json({ message: 'Already selected!' })

			let newFav = data.favprofiles.push(profileid)

			User.findByIdAndUpdate(req.user.id, {
				favprofiles: newFav
			})
				.then(data => {
					res.json({ message: 'Success to Update!' })
				})
				.catch(err => next(err))
		})
})

router.delete('/favProfile', (req, res) => {
	if (req.user === null)
		res.json({ message: 'You are not logined!' })

	const { profileid } = req.body

	User.findById(req.user.id)
		.then(data => {
			console.log(data.favprofiles.indexOf(profileid))
			if (data.favprofiles.indexOf(profileid) === null)
				return res.json({ message: 'Not Found!' })

			let newFav = favprofiles.slice(favprofiles.indexOf(profileid), 1)

			User.findByIdAndUpdate(req.user.id, {
				favprofiles: newFav
			})
				.then(data => {
					res.json({ message: 'Success to Remove!' })
				})
				.catch(err => next(err))
		})
})

router.put('/registerProfile', (req, res) => {
	if (req.user !== 'Admin')
		return res.json({ message: 'No Auth to access' })
	res.json({ message: 'Not Available' })
})

module.exports = router