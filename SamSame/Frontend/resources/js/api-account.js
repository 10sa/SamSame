var Account = {};

/* response.json = {
		isSuccess:Bool
	}
*/
Account.login = function (id, pw, callback) {
	Utils.Post(String.format("id={0}&pw={1}", id, pw), "/apis/account/login" , callback);
}

/* response.json = {
		isSuccess:Bool
	}
*/
Account.destoryAccount = function (id, pw, callback) {
	Utils.Post("", "/apis/account/destoryAccount" , callback);
}

/* response.json = {
		isSuccess:Bool
	}
*/
Account.editProfile = function (key, value, callback) {
	Utils.Post(String.format("key={0}&value={1}", key, value), "/apis/account/editProfile" , callback);
}

/* response.json = {
		isSuccess:Bool
		profile:{
			imagePath:String, 
			subscribePagesId:Int[], 
			goodPagesId:Int[]
		}
	}
*/
Account.userPage = function (callback) {
	Utils.Post("", "/apis/account/userPage" , callback);
}