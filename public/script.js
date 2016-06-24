var app = angular.module('mainApp',['ngRoute']);

app.config(['$routeProvider','$locationProvider' , function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/',{
        
        templateUrl : 'pages/home.html'
    })
    
    .when('/about',{
        
       templateUrl : 'pages/about.html' 
    });
    
}]);

app.controller('mainController', function($scope){
               $scope.message = 'This is my Refresh Controller';
               });

