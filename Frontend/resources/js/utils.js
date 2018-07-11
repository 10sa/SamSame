var Util = {};

Util.CallAPI = function (params, path, method, callback) {
	var http = new XMLHttpRequest();
	http.open(method, path, true);
	http.onreadystatechange = function () {
		if (http.readyState == 4 && http.status == 200 && callback)
			callback(JSON.parse(http.responseText));
	}

	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	http.send(params);
}

String.format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number] 
        : match
      ;
    });
  };