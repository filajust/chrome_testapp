(function(){
    var app = angular.module('test', []);

    app.controller("testCtrl", function($scope) {
       $scope.testValue = "This is a test";
    });
})();