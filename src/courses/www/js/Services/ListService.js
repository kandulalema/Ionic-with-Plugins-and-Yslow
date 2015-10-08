app.factory('ListService',['$http',function($http){
	return $http.get('http://192.168.0.16:8081/com.umkc.cr/api/mongo/retrieve/courses')
	.success(function(data){
		return data;
		
	})
	.error(function(error){
		return error;
	});
	
}]);
