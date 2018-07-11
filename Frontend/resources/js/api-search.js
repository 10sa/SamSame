//	This script is auto-generated.	//


var recentSearch = {};
search.recentSearch = function () {
	Util.CallAPI("", "/apis/search/recentSearch", "GET", callback);
}

search.querySearchString = function (query) {
	Util.CallAPI(String.format("query={0}", query), "/apis/search/querySearchString", "POST", callback);
}

search.searching = function (query) {
	Util.CallAPI(String.format("query={0}", query), "/apis/search/searching", "POST", callback);
}

