var Pages = require("./apis-responser/api-pages.js");

var express = require("express");
var router = express.Router();

// Path : "/page/getPages" //
router.post("/getPages", function(request, response, next) {
	var pagesId;	// Int[],	Return Value
	
	// Insert code here //
	
	//
	
	Pages.getPages(response, pagesId);
});

// Path : "/page/getPage" //
router.post("/getPage", function(request, response, next) {
	var pageId = request.body.pageId	// Int,		Parameter
	var category;						// String, 	Return Value
	var reputation;						// Int, 	Return Value
	var summary;						// String, 	Return Value
	var origin;							// String, 	Return Value
	var text;							// String, 	Return Value
			
	// Insert code here //
	
	//
	
	Pages.getPage(response, category, reputation, summary, origin, text);
});

// External Handling //
// Path : "/page/sharePages" //
router.post("/sharePages", function(request, response, next) {
	var pageId = request.body.pageId;	// Int,	Parameter
	
	// Insert code here //
	
	//
});

// Path : "/page/badPage" //
router.post("/badPage", function(request, response, next) {
	var pageId = request.body.pageId;	// Int,		Parameter
	var isSuccess = false;				// Bool,	Return Value
	
	// Insert code here //
	
	//
	
	Pages.badPage(response, isSuccess);
});

// Path : "/page/goodPage" //
router.post("/goodPage", function(request, response, next) {
	var pageId = request.body.pageId;	// Int,		Parameter
	var isSuccess = false;				// Bool,	Return Value
	
	// Insert code here //
	
	//
	
	Pages.goodPage(response, isSuccess);
});

// Path : "/page/subscribePage" //
router.post("/subscribePage", function(request, response, next) {
	var pageId = request.body.pageId;	// Int,		Parameter
	var isSuccess = false;				// Bool,	Return Value
	
	// Insert code here //
	
	//
	
	Pages.subscribePage(response, isSuccess);
});

// Path : "/page/unsubscribePage" //
router.post("/unsubscribePage", function(request, response, next) {
	var pageId = request.body.pageId;	// Int,		Parameter
	var isSuccess = false;				// Bool,	Return Value
	
	// Insert code here //
	
	//
	
	Pages.unsubscribePage(response, isSuccess);
});

// Path : "/page/subscribeTag" //
router.post("/subscribeTag", function(request, response, next) {
	var tag = request.body.tag;	// String,	Parameter
	var isSuccess = false;		// Bool,	Return Value
	
	// Insert code here //
	
	//
	
	Pages.subscribeTag(response, isSuccess);
});

// Path : "/page/unsubscribeTag" //
router.post("/unsubscribeTag", function(request, response, next) {
	var tag = request.body.tag;	// String,	Parameter
	var isSuccess = false;		// Bool,	Return Value
	
	// Insert code here //
	
	//
	
	Pages.unsubscribeTag(response, isSuccess);
});

module.exports = router;