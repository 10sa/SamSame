'use strict'
/* load express & general modules */
const router = require('express').Router()

/* load mongoose models */
const Profile = require('./../../../database/models/profile')
const User = require('./../../../database/models/user')

/* load custom modules & functions */
const isNullOrUndefined = require('./../func/isNullOrUndefined')

router.get('/recentSearch', (req, res, next) => {
	if (req.user === null) {
		res.header(400)
		return res.json({ message: 'You are not logined!' })
	}

	User.findById(req.user.id)
		.then(data => {
			if (data === null) next(err)
			return res.json({ recentSearchs: data.recentsearchs })
		})
		.catch(err => {
			next(err)
		})
})

router.post('/querySearchString', (req, res, next) => {
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
		})
})

router.post('/searching', (req, res, next) => {
	function parseAge(tagArr, ages) {
		for (let i = 0; i < ages.length; i++) {
			if (ages[i] === true) {
				tagArr.push(((i + 1) * 10) + '대')
				return
			}
		}
	}

	function parseHair(tagArr, hairs) {
		const hairnames = ['장발', '단발', '숏컷']

		for (let i = 0; i < 3; i++) {
			if (hairs[i] === true)
				tagArr.push(hairnames[i])
		}
	}

	function parseMood(tagArr, moods) {
		const cmoods = ['시크한', '쿨한', '귀여운', '몽환적인', '이색적인', '청순한',
			'지능적인', '밝은', '사랑스러운', '섹시한', '명량한', '차분한', '도도한']

		for (let i = 0; i < 3; i++) {
			if (moods[i] === true)
				tagArr.push(cmoods[i])
		}
	}

	function parseSex(tagArr, sex) {
		const female = sex[0]
		const male = sex[1]

		if (female)
			tagArr.push('여성')

		else if (male)
			tagArr.push('남성')
	}

	function parseSkin(tagArr, ton) {
		const cool = ton[0]
		const warm = ton[1]

		if (cool)
			tagArr.push('쿨톤')

		else if (warm)
			tagArr.push('웜톤')
	}

	function parseHeight(tagArr, ht) {
		if (!isNullOrUndefined(ht[0])) {
			if (ht[0] === true) tagArr.push('150cm-')
			return
		}

		for (let i = 1; i < ht.length; i++) {
			if (ht[i] === true) {
				tagArr.push(150 + ((i - 1) * 10) + 'cm+')
				return
			}
		}
	}

	function parseQuery(tagArr, query) {
		const arr = query.split(/[# ]/)
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === '') continue
			tagArr.push(arr[i])
		}
	}

	function sortAndDeduplicate(array) {
		let tagArr = []
		let sorted = array.sort()

		tagArr[0] = sorted[0]
		let resultIndex = 0

		for (let i = 1; i < sorted.length; i++) {
			if (tagArr[resultIndex] === sorted[i]) continue
			tagArr[++resultIndex] = sorted[i]
		}

		return tagArr
	}

	if (req.user === null)
		return res.json({ message: 'You are not logined!' })

	const query = req.body.query
	let searchResult = []
	let tagArray = []

	if (!isNullOrUndefined(query)) {
		parseQuery(tagArray, query)
		User.findById(req.user.id)
			.then(data => {
				const resSearch = data.recentsearchs
				if (resSearch.length >= 5)
					resSearch.shift()
				resSearch.push(query)

				User.findByIdAndUpdate(req.user.id, {
					recentsearchs: resSearch
				}).catch(next)
			})
	}

	if (!isNullOrUndefined(req.body.filter)) {
		const filter = JSON.parse(req.body.filter)
		if (filter.age !== undefined)
			parseAge(tagArray, filter.age)
		if (filter.hair !== undefined)
			parseHair(tagArray, filter.hair)
		if (filter.mood !== undefined)
			parseMood(tagArray, filter.mood)
		if (filter.sex !== undefined)
			parseSex(tagArray, filter.sex)
		if (filter.skin !== undefined)
			parseSkin(tagArray, filter.skin)
		if (filter.height !== undefined)
			parseHeight(tagArray, filter.height)
	}

	const result = sortAndDeduplicate(tagArray)

	Profile.find().where('tags').in(tagArray)
		.then(data => {
			res.json({ profiles: data })
		})
		.catch(err => {
			next(err)
		})
})


module.exports = router