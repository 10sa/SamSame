const router = require('express').Router()

router.get('/profiles', (req, res) => {
	const profiles	//Profile[]	Response Paramater

	res.json = {
		profiles: profiles
	}

})

router.put('/favProfile', (req, res) => {
	const profileId = req.getParameter('profileId')	//int	Request Parameter

})

router.get('/favProfile', (req, res) => {
	const profiles	//Profile[]	Response Paramater



	res.json = {
		profiles: profiles
	}

})

router.delete('/favProfile', (req, res) => {
	const profileId = req.getParameter('profileId')	//int	Request Parameter

})

router.put('/registerProfile', (req, res) => {
	const profileUrl = req.getParameter('profileUrl')	//String	Request Parameter
	const tags = req.getParameter('tags')	//String	Request Parameter

})

module.exports = router