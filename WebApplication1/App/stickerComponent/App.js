//TODO:MJ dividde up services in separate files
//TODO:MJ add repositories for api calls

var stickerComponentModule = angular.module('stickerComponent', ['common'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/stickerComponent',
            { templateUrl: '/App/stickerComponent/Views/stickerComponentView.html', controller: 'StickerComponentHomeCtrl' });

        $routeProvider.otherwise({ redirectTo: '/stickerComponent' });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

stickerComponentModule.factory('stickerComponentService',
    function ($rootScope, $http, $q, $location, viewModelHelper) {
        return MyApp.stickerComponentService($rootScope, $http, $q, $location, viewModelHelper);
    });
stickerComponentModule.factory('gridComponentService',
    function ($rootScope, $http, $q, $location, viewModelHelper,stickerComponentService) {
        return MyApp.gridComponentService($rootScope, $http, $q, $location, viewModelHelper, stickerComponentService);
    });
stickerComponentModule.factory('chartComponentService',
    function ($rootScope, $http, $q, $location, viewModelHelper,stickerComponentService) {
        return MyApp.chartComponentService($rootScope, $http, $q, $location, viewModelHelper, stickerComponentService);
    });
stickerComponentModule.factory('spiderWebComponentService',
    function ($rootScope, $http, $q, $location, viewModelHelper, stickerComponentService) {
        return MyApp.spiderWebComponentService($rootScope, $http, $q, $location, viewModelHelper, stickerComponentService);
    });