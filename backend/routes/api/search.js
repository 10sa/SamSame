/* load express & general modules */
const router = require('express').Router()

/* load mongoose models */
const Profile = require('./../database/models/profile')

/* load custom modules & functions */
const isNullOrUndefined = require('./../func/isNullOrUndefined')

router.get('/recentSearch', (req, res) => {
	if (req.user === null)
		return res.json({ message: 'You are not logined!' })

	User.findById(req.user.id)
		.then(data => {
			if (data === null) next(err)
			return res.json({ recentSearchs: data.recentsearchs })
		})
		.catch(err => {
			next(err)
		})
})

router.post('/querySearchString', (req, res) => {
	const query = req.body.query
	let searchResult = []

	if (isNullOrUndefined(query) || query === "")
		return res.json({ searchResult: searchResult })

	Profile.find({ profilename: `%${query}%` }).limit(5)
		.then(data => {
			searchResult = data
			return res.json({ searchResult: searchResult })
		})
		.catch(err => {
			if (err) next(err)
			console.log(err)
		})
})

router.post('/searching', (req, res) => {
	const query = req.body.query
	let searchResult = []

	if (isNullOrUndefined(query) || query === "")
		return res.json({ searchResult: searchResult })

	Profile.find({ profilename: `%${query}%` })
		.then(data => {
			searchResult = data
			return res.json({ searchResult: searchResult })
		})
		.catch(err => {
			if (err) next(err)
			console.log(err)
		})
})


module.exports = router