var app = angular.module('meizi', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/meizis',{
      templateUrl: 'part/meizi-list.html',
      controller: 'MeiziListCtrl'
    })
    .otherwise({
      redirectTo:'/meizis'
    });
}]);

app.controller('MeiziListCtrl', ['$scope', function($scope){

}]);

