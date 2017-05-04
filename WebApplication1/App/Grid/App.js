//TODO:MJ dividde up services in separate files
//TODO:MJ add repositories for api calls

var gridModule = angular.module('grid', ['common'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/grid',
            { templateUrl: '/App/atsGrid/Views/GridView.html', controller: 'GridHomeCtrl' });

        $routeProvider.otherwise({ redirectTo: '/grid' });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

gridModule.factory('gridService',
    function ($rootScope, $http, $q, $location, viewModelHelper) {
        return MyApp.gridService($rootScope, $http, $q, $location, viewModelHelper);
    });