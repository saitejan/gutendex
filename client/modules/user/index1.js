angular.module('appUser',['appUserCtrl','UserServiceMod'])

.config(function($stateProvider) {
    $stateProvider

        .state('app.userData', {
            url: "/userData",
            controller: 'UserCtrl',
            templateUrl: "modules/user/template/usertemp.html"
        })
});