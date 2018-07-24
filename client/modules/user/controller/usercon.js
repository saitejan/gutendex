angular.module('appUserCtrl',['infinite-scroll'])
    .controller('UserCtrl',function ($scope,$http,$state,UserService) {
    $scope.oneuserData	= UserService.getUserData();
    	console.log('userData : '+JSON.stringify($scope.oneuserData))
    	
        $http.get("http://skunkworks.ignitesol.com:8000/books/?topic="+$scope.oneuserData+"&mime type=images") 
       
          .then(function(response) {
            $scope.details = response.data;
            console.log($scope.details);
          });
          $scope.author="";
      


      $scope.scrollFunction= function(){

          
        $http.get($scope.details.next) 
       
        .then(function(response) {
          $scope.details = response.data;
          console.log($scope.details);
        });  
        }
             


       


})
