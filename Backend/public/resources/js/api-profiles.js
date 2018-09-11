//	This script is auto-generated.	//


var profiles = {};
var authKey = sessionStorage.getItem(@authKey);

profiles.profiles = function (callback) {
	Util.CallAPI("", "/apis/profiles/profiles", "GET", authKey, callback);
}

profiles.addFavProfile = function (profileId, callback) {
	Util.CallAPI(String.format("profileId={0}", profileId), "/apis/profiles/favProfile", "PUT", authKey, callback);
}

profiles.getFavProfile = function (callback) {
	Util.CallAPI("", "/apis/profiles/favProfile", "GET", authKey, callback);
}

profiles.deleteFavProfile = function (profileId, callback) {
	Util.CallAPI(String.format("profileId={0}", profileId), "/apis/profiles/favProfile", "DELETE", authKey, callback);
}

profiles.registerProfile = function (profileUrl, tags, callback) {
	Util.CallAPI(String.format("profileUrl={0}&tags={1}", profileUrl, tags), "/apis/profiles/registerProfile", "PUT", authKey, callback);
}

