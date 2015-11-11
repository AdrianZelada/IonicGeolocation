angular.module('starter').controller('main',function($scope,$cordovaGeolocation){
	$scope.checkModel=false;

	
	$scope.$watch('checkModel',function(newVal,oldValue){
		if(newVal==true){
			var posOptions={
				timeout:10000,
				enableHighAccuracy:false
			}

			$cordovaGeolocation.getCurrentPosition(posOptions)
				.then(function(pos){
					$scope.lat=pos.coords.latitude;
					$scope.lon=pos.coords.longitude;
					console.log(pos);
				},function(err){
					console.log(err)
			})		
		}
	});
})