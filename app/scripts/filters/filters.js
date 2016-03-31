angular.module('PhonecatFilters', [])
.filter('checkmark',function () {
	return function (input) {
		return input? '\u2713': '\u2718';
	}
});