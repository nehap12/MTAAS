var app = angular.module('mainApp',['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/',{
        
        templateUrl : 'pages/home.html'
    })
    
    .when('/about',{
        
       templateUrl : 'pages/about.html' 
    });
    
}]);

app.controller('mainController', ['$scope',function($scope){
               $scope.message = 'This is my Refresh Controller';
               }]);

app.controller('TesterController', ['$scope', function($scope){
    $scope.message="Hello from tester controller";
    $scope.userInfo = {firstname: '', lastname: '', email: '', password: '', confrmPassword: '',country:''};
    
    $scope.submitForm = function() {
        console.log($scope. userInfo);
    }
    
}]);

app.controller('DevController', ['$scope', function($scope){
    $scope.message="Hello from tester controller";
    $scope.userInfo = {firstname: '', lastname: '', email: '', password: '', confrmPassword: '',country:''};
    
    $scope.submitForm = function() {
        console.log($scope. userInfo);
    }
}]);