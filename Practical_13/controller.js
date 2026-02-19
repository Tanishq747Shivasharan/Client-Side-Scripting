var app = angular.module("myApp", []);

app.controller("myController", function($scope) {
    $scope.message = "Hello from External Controller File!";
});
