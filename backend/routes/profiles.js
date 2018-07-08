//	This script is auto-generated.	//


var express = require("express");
var router = express.Router();

router.get("/profiles", function(request, response, next) {
	var profiles;	//Profile[]	Response Paramater
	
	
	
	response.json = {
		profiles: profiles
	};

});

router.put("/favProfile", function(request, response, next) {
	var profileId = request.getParameter("profileId");	//int	Request Parameter

});

router.get("/favProfile", function(request, response, next) {
	var profiles;	//Profile[]	Response Paramater
	
	
	
	response.json = {
		profiles: profiles
	};

});

router.delete("/favProfile", function(request, response, next) {
	var profileId = request.getParameter("profileId");	//int	Request Parameter

});

router.put("/registerProfile", function(request, response, next) {
	var profileUrl = request.getParameter("profileUrl");	//String	Request Parameter
	var tags = request.getParameter("tags");	//String	Request Parameter

});


module.exports = router;