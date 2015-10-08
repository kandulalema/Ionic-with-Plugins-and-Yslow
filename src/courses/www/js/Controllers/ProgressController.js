/**
 * Created by Lema Chowdary on 10/8/2015.
 */
app.controller('ProgressController', function($scope, $cordovaProgress) {


  $cordovaProgress.showBar(true, 50000)

  $cordovaProgress.showBarWithLabel(false, 100000, "Loading")



});
