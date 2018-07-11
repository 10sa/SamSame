//	This script is auto-generated.	//


var login = {};
account.login = function (username, password) {
	Util.CallAPI(String.format("username={0}&password={1}", username, password), "/apis/account/login", "POST", callback);
}

account.logout = function () {
	Util.CallAPI("", "/apis/account/logout", "POST", callback);
}

account.register = function () {
	Util.CallAPI("", "/apis/account/register", "PUT", callback);
}

account.userProfile = function () {
	Util.CallAPI("", "/apis/account/userProfile", "GET", callback);
}

account.userProfile = function (key, value) {
	Util.CallAPI(String.format("key={0}&value={1}", key, value), "/apis/account/userProfile", "POST", callback);
}

