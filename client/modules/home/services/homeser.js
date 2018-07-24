var appMainCtrl= angular.module('UserServiceMod',[]);
appMainCtrl.factory('UserService', function() {
            var factory = {
            	userData:null
            };
            
            factory.setUserData = function(userData) {
             factory.userData= userData;
            }
            factory.getUserData = function() {
             return factory.userData;
            }
            return factory;
         });