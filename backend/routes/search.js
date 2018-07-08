//	This script is auto-generated.	//


var express = require("express");
var router = express.Router();

router.get("/recentSearch", function(request, response, next) {
	var recentSearchs;	//String[]	Response Paramater
	
	
	
	response.json = {
		recentSearchs: recentSearchs
	};

});

router.post("/querySearchString", function(request, response, next) {
	var query = request.getParameter("query");	//String	Request Parameter
	var recommandSearchs;	//String[]	Response Paramater
	
	
	
	response.json = {
		recommandSearchs: recommandSearchs
	};

});

router.post("/searching", function(request, response, next) {
	var query = request.getParameter("query");	//String	Request Parameter
	var searchResult;	//Profile[]	Response Paramater
	
	
	
	response.json = {
		searchResult: searchResult
	};

});


module.exports = router;