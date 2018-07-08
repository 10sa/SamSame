//	This script is auto-generated.	//


var express = require("express");
var router = express.Router();

router.post("/login", function(request, response, next) {
	var username = request.getParameter("username");	//String	Request Parameter
	var password = request.getParameter("password");	//String	Request Parameter

});

router.post("/logout", function(request, response, next) {

});

router.put("/register", function(request, response, next) {

});

router.get("/userProfile", function(request, response, next) {
	var profile;	//UserProfile	Response Paramater
	
	
	
	response.json = {
		profile: profile
	};

});

router.post("/userProfile", function(request, response, next) {
	var key = request.getParameter("key");	//String	Request Parameter
	var value = request.getParameter("value");	//String	Request Parameter

});


module.exports = router;