//	This script is auto-generated.	//


var account = {};
var authKey = sessionStorage.getItem(@authKey);

account.login = function (username, password, callback) {
	Util.CallAPI(String.format("email={0}&password={1}", username, password), "/apis/account/login", "POST", authKey, callback);
}

account.logout = function (callback) {
	Util.CallAPI("", "/apis/account/logout", "GET", authKey, callback);
}

account.register = function (email, password, username, callback) {
	Util.CallAPI(String.format("email={0}&password={1}&username={2}", email, password, username), "/apis/account/register", "PUT", authKey, callback);
}

account.getUserProfile = function (callback) {
	Util.CallAPI("", "/apis/account/userProfile", "GET", authKey, callback);
}

account.setUserProfile = function (key, value, callback) {
	Util.CallAPI(String.format("email={0}&username={1}", key, value), "/apis/account/userProfile", "POST", authKey, callback);
}