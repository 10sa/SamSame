var mysql = require("mysql");
var dbConfigs = require("/Configs/configs.js").dev;

module.exports = function () {
	return {
		init: function () {
			return mysql.createConnection({
				host: dbConfigs.host,
				port: dbConfigs.port,
				user: dbConfigs.user,
				password: dbConfigs.password,
				database: dbConfigs.database
			});
		},

		connect: function (connection) {
			connection.connect(function (error) {
				if (error)
					console.error("DB Connection Error!");
			});
		},

		getConnection: function () {
			var temp = this.init();
			this.connect(temp);

			return temp;
		}
	}
}