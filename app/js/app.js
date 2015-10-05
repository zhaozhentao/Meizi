angular.module('meizi', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/Meizis', {
          templateUrl: 'part/meizi-list.html',
          controller: 'Meizis',
          controllerAs: 'meizis'
        })
        .otherwise({
          redirectTo: '/Meizis'
        })
      // configure html5 to get links working on jsfiddle
      $locationProvider.html5Mode(true);
  }])
  .controller('MainCtrl', ['$route', '$routeParams', '$location',
    function($route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
  }])
  .controller('Meizis', ['$scope', '$routeParams', function($scope, $routeParams) {
    this.name = "Mezis";
    this.params = $routeParams;
    $scope.meizi = "cyndi";
  }]);
