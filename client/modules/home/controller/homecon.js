

angular.module('appMainCtrl',[])
    .controller('HomeCtrl',function ($scope,$http,$state,UserService) {
    	// $http.post("/api/githubData")
    	// .then(function (result) {
    	// 	$scope.githubData = result.data.response;
    	// });
    $scope.userData = function(oneUserData){
    	console.log('userData : '+oneUserData)
    	UserService.setUserData(oneUserData);
    	$state.go('app.userData');
    };

})