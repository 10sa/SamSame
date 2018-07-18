//	This script is auto-generated.	//


var account = {};
account.login = function (username, password, callback) {
	Util.CallAPI(String.format("email={0}&password={1}", username, password), "/apis/account/login", "POST", callback);
}

account.logout = function (callback) {
	Util.CallAPI("", "/apis/account/logout", "GET", callback);
}

account.register = function (email, password, username, callback) {
	Util.CallAPI(String.format("email={0}&password={1}&username={2}", email, password, username), "/apis/account/register", "PUT", callback);
}

account.userProfile = function (callback) {
	Util.CallAPI("", "/apis/account/userProfile", "GET", callback);
}

account.userProfile = function (key, value, callback) {
	Util.CallAPI(String.format("email={0}&username={1}", key, value), "/apis/account/userProfile", "POST", callback);
}