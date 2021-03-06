(function() {
    var app = angular.module('todoApp', ['ngRoute']);

    app.controller('MainCtrl', function($scope) {
        $scope.todos = [
            {text: 'learn angular', done: true},
            {text: 'build an angular Chrome packaged app', done: false}
        ];

        $scope.addTodo = function () {
            $scope.todos.push({text: $scope.todoText, done: false});
            $scope.todoText = '';
        }

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        }

        $scope.archive = function() {
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) {
                    $scope.todos.push(todo);
                }
            })
        }
    })

    app.controller("testCtrl", function($scope) {
        $scope.testValue = "This is a test";
    });

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'AngularJsIndex.html',
                controller: 'MainCtrl'
            })
            .when('/test', {
                templateUrl: 'test.html',
                controller: 'TestCtrl'
            })
            .otherwise({redirectTo: '/' });
    });

})();