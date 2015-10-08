app.controller('ListController', ['$scope','ListService',function($scope,details){

	details.success(function(data){
		$scope.details = data;
    document.addEventListener("deviceready", function () {

      $rootScope.$on('$cordovaBatteryStatus:status', function (result) {
        var batteryLevel = result.level;       // (0 - 100)
        var isPluggedIn  = result.isPlugged;   // bool
      });

      $rootScope.$on('$cordovaBatteryStatus:critical', function (result) {
        var batteryLevel = result.level;       // (0 - 100)
        var isPluggedIn  = result.isPlugged;   // bool
      });

      $rootScope.$on('$cordovaBatteryStatus:low', function (result) {
        var batteryLevel = result.level;       // (0 - 100)
        var isPluggedIn  = result.isPlugged;   // bool
      });

    }, false);
	})
} ]);
