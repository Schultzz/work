/**
 * Created by Morten on 16/04/15.
 */
var app = angular.module('ex5', ['ngRoute']);


app.controller("UserController", function ($scope, $http, PersonFactory) {

    if (PersonFactory.users.length === 0) {
        $http.get("data/data.json").success(function (data) {
            PersonFactory.users = data.users;
            $scope.users = PersonFactory.users;
        })
    }else{ //We could use the cache property on the http request instead
        $scope.users = PersonFactory.users;
    }


});

app.controller('DetailController', function($scope, $routeParams, PersonFactory){


        for (var i = 0; i < PersonFactory.users.length; i++) {
            if (PersonFactory.users[i].email === $routeParams.email) {
                console.log(i, 'index');
                $scope.user = PersonFactory.users[i];
            }
        }

});

app.factory('PersonFactory', function($http){

    var users= [];

    return {
        users: users
    };

});

app.config(function($routeProvider){
    $routeProvider.
        when('/', {
           templateUrl: 'views/view.html',
            controller: 'UserController'
        }).
        when('/detail/:email', {
            templateUrl: 'views/details.html',
            controller: 'DetailController'
        });
});