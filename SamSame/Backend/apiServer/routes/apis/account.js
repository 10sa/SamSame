var Account = require("./apis-responser/api-account.js");

var express = require("express");
var router = express.Router();

// Path: "/account/login" //
router.post("/login", function(request, response, next) {
	var id = request.body.id;	// String,	Parameter
	var pw = request.body.pw;	// String,	Parameter
	var isSuccess = false;		// Bool,	Return Value
	
	// Insert code here //
	
	//
	
	Account.login(response, isSuccess);
});

// Path: "/account/destoryAccount" //
router.post("/destoryAccount", function(request, response, next) {
	var isSuccess = false;	// Bool,	Return Value
	
	// Insert code here //
	
	//
	
	Account.destoryAccount(response, isSuccess);
});

// Path: "/account/editProfile" //
router.post("/editProfile", function(request, response, next) {
	var key = request.body.key;		// String,	Parameter
	var value = request.body.value;	// String,	Parameter
	var isSuccess = false;			// Bool,	Return Value
	
	// Insert code here //
	
	//
	
	Account.editProfile(response, isSuccess);
});

// Path: "/account/userPage" //
router.post("/userPage", function(request, response, next) {
	var isSuccess = false;	// Bool,	Return Value
	var profileImagePath; 	// String,	Return Value
	var subscribePagesId; 	// Int[],	Return Value
	var goodPagesId; 		// Int[],	Return Value
	
	// Insert code here //
	
	//
	
	Account.userPage(response, isSuccess, profileImagePath, subscribePagesId, goodPagesId);
});

module.exports = router;