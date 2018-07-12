const router = require('express').Router()

router.get('/recentSearch', (req, res) => {
	const recentSearchs	//String[]	Response Paramater



	res.json = {
		recentSearchs: recentSearchs
	}

})

router.post('/querySearchString', (req, res) => {
	const query = req.getParameter('query')	//String	Request Parameter
	const recommandSearchs	//String[]	Response Paramater



	res.json = {
		recommandSearchs: recommandSearchs
	}

})

router.post('/searching', (req, res) => {
	const query = req.getParameter('query')	//String	Request Parameter
	const searchResult	//Profile[]	Response Paramater



	res.json = {
		searchResult: searchResult
	}
})


module.exports = router