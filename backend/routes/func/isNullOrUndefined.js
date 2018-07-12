 module.exports = function isNullOrUndefined() {
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] === null || arguments[i] === undefined)
			return true
	}
	return false
}