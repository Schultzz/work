/**
 * Created by Morten on 15/04/15.
 */
var app = angular.module('ex3', ['ngRoute']);

var persons = [
     {id: 1,name: "Jens",age : 18}
    ,{id: 2,name: "Peter",age : 23}
    ,{id: 3,name: "Hanne",age : 23}
];

    app.controller('PersonController', function($scope, $routeParams){


        $scope.newPerson = {};

        $scope.addPerson = function(){
            $scope.newPerson.id = persons.length + 1;
            persons.push($scope.newPerson);
            $scope.newPerson = {};
        };

        $scope.id = $routeParams.id;
        $scope.personInView = persons[$scope.id - 1];

        $scope.persons = persons;
        $scope.title = "Router Example 2";
    });

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/', {
                templateUrl: 'table.html',
                controller: 'PersonController'
            }).
            when('/details/:id', {
                templateUrl: 'personDetails.html',
                controller: 'PersonController'
            }).
            when('/newPerson', {
                templateUrl: 'newPerson.html',
                controller: 'PersonController'
        });
    }]);

