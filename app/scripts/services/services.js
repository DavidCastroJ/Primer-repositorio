var PhonecatServices=angular.module('PhonecatServices', ['ngResource']);
PhonecatServices.factory('Phone', ['$resource',
	function ($resource) {
		return $resource('phones/:phoneId.json', {}, {
			query:{method:'GET', params:{phoneId:'phones'}, isArray:true}
		});
	}
]);