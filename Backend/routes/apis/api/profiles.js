'use strict'
/* load express & general modules */
const router = require('express').Router()
const client = require('cheerio-httpcli')

/* load mongoose models */
const User = require('./../../../database/models/user')
const Profile = require('./../../../database/models/profile')

router.get('/profiles', (req, res, next) => {
	Profile.find({})
		.then(data => {
			res.json({ profiles: data })
		})
		.catch(err => next(err))
})

router.get('/favProfile', (req, res, next) => {
	if (req.user === null) {
		res.header(400)
		return res.json({ message: 'You are not logined!' })
	}

	User.findById(req.user.id)
		.then(data => {
			return res.json({ profiles: data.favprofiles })
		})
		.catch(err => next(err))
})

router.put('/favProfile', (req, res, next) => {
	if (req.user === null) {
		res.header(400)
		return res.json({ message: 'You are not logined!' })
	}

	const { profileId } = req.body

	if (profileId === undefined) {
		res.header(400)
		return res.json({ message: 'Wrong Input!' })
	}

	User.findById(req.user.id)
		.then(data => {
			const favprofiles = data.favprofiles
			if (favprofiles.indexOf(profileId) !== -1) {
				res.header(400)
				return res.json({ message: 'Already selected!' })
			}
			favprofiles.push(profileId)

			User.findByIdAndUpdate(req.user.id, {
				favprofiles: favprofiles
			})
				.then(data => {
					res.header(200)
					res.end()
				})
				.catch(err => next(err))
		})
})

router.delete('/favProfile', (req, res, next) => {
	if (req.user === null) {
		res.json({ message: 'You are not logined!' })
	}

	const { profileId } = req.body

	if (profileId === undefined) {
		res.header(400)
		return res.json({ message: 'Wrong Input!' })
	}

	User.findById(req.user.id)
		.then(data => {
			if (data.favprofiles.indexOf(profileId) === -1) {
				res.header(400)
				return res.json({ message: 'Not Found!' })
			}

			const favprofiles = data.favprofiles

			const newFav = favprofiles.slice(favprofiles.indexOf(profileId), 1)
			console.log(newFav)
			User.findByIdAndUpdate(req.user.id, {
				favprofiles: newFav
			})
				.then(data => {
					res.header(200)
					res.end()
				})
				.catch(err => next(err))
		})
})

router.put('/registerProfile', (req, res, next) => {
	if (req.user === null) {
		res.header(400)
		return res.json({ message: 'Could not find User!' })
	}

	if (req.user.level !== 'Admin') {
		res.header(400)
		return res.json({ message: 'No Auth to access' })
	}

	const { profileUrl, tags } = req.body
	const tagArr = JSON.parse(tags)

	client.fetch(profileUrl)
		.then(result => {
			const html = result.$.html()
			const imageuri = html.match(/(?<="profile_pic_url":").*?(?=")/)[0]
			const profilename = html.match(/(?<="username":").*?(?=")/)[0]
			const originfollow = html.match(/(?<="edge_followed_by":{"count":).*?(?=})/)[0]
			console.log(typeof tagArr)

			let newProfile = new Profile({
				profilename: profilename,
				imageuri: imageuri,
				originfollow: originfollow,
				originprofileuri: profileUrl,
				tags: tagArr
			})

			newProfile.save()
			return res.json({ message: 'Success to insert!' })
		})
		.catch(err => {
			next(err)
		})
})

module.exports = router