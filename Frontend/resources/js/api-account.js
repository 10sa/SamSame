//	This script is auto-generated.	//


var account = {};
account.login = function (username, password, callback) {
	Util.CallAPI(String.format("username={0}&password={1}", username, password), "/apis/account/login", "POST", callback);
}

account.logout = function (callback) {
	Util.CallAPI("", "/apis/account/logout", "POST", callback);
}

account.register = function (email, password, callback) {
	Util.CallAPI(String.format("email={0}&password={1}", email, password), "/apis/account/register", "PUT", callback);
}

account.userProfile = function (callback) {
	Util.CallAPI("", "/apis/account/userProfile", "GET", callback);
}

account.userProfile = function (key, value, callback) {
	Util.CallAPI(String.format("key={0}&value={1}", key, value), "/apis/account/userProfile", "POST", callback);
}

