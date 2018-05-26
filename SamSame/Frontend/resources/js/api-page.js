var Page = {};

/* response.json = {
		pages:Int[]
	}
*/
Page.getPages = function(callback) {
	Utils.Post("", "/apis/page/getPages" , callback);
}

/* response.json = {
		pageData: {
			category:String
			reputation:Int
			summary:String
			origin:String
			text:String
		}
	}
*/
Page.getPage = function(pageId, callback) {
	Utils.Post(String.format("pageId={0}", pageId), "/apis/page/getPage" , callback);
}

/* response.json = {
		
	}
*/
Page.sharePage = function(pageId, callback) {
	Utils.Post(String.format("pageId={0}", pageId), "/apis/page/sharePage" , callback);
}

/* response.json = {
		isSuccess:Bool
	}
*/
Page.badPage = function(pageId, callback) {
	Utils.Post(String.format("pageId={0}", pageId), "/apis/page/badPage" , callback);
}

/* response.json = {
		isSuccess:Bool
	}
*/
Page.goodPage = function(pageId, callback) {
	Utils.Post(String.format("pageId={0}", pageId), "/apis/page/goodPage" , callback);
}

/* response.json = {
		isSuccess:Bool
	}
*/
Page.subscribePage = function(pageId, callback) {
	Utils.Post(String.format("pageId={0}", pageId), "/apis/page/subscribePage" , callback);
}

/* response.json = {
		isSuccess:Bool
	}
*/
Page.unsubscribePage = function(pageId, callback) {
	Utils.Post(String.format("pageId={0}", pageId), "/apis/page/unsubscribePage" , callback);
}

/* response.json = {
		isSuccess:Bool
	}
*/
Page.subscribeTag = function(tag, callback) {
	Utils.Post(String.format("tag={0}", pageId), "/apis/page/subscribeTag" , callback);
}

/* response.json = {
		isSuccess:Bool
	}
*/
Page.unsubscribeTag = function(tag, callback) {
	Utils.Post(String.format("tag={0}", pageId), "/apis/page/unsubscribeTag" , callback);
}