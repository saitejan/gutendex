

'use strict';

var App = angular.module('github',['ui.router','appHome','appUser']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				$urlRouterProvider.otherwise("/app/home");
				
				$stateProvider
                    .state('app', {
                        url: "/app",
                        abstract: true
                    })



			}]);









