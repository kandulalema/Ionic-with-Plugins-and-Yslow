app.controller('ListController', ['$scope','ListService',function($scope,details){

	details.success(function(data){
		$scope.details = data;

//emailcomposer
    angular.app('ngCordova.plugins.emailComposer', [])

      .factory('$cordovaEmailComposer', ['$q', function ($q) {

        return {
          isAvailable: function () {
            var q = $q.defer();

            cordova.plugins.email.isAvailable(function (isAvailable) {
              if (isAvailable) {
                q.resolve();
              } else {
                q.reject();
              }
            });

            return q.promise;
          },

          open: function (properties) {
            var q = $q.defer();

            cordova.plugins.email.open(properties, function () {
              q.reject(); // user closed email composer
            });

            return q.promise;
          },

          addAlias: function (app, schema) {
            cordova.plugins.email.addAlias(app, schema);
          }
        };
      }]);


	})
} ]);
