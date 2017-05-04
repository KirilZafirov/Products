productsModule.controller("rootCtrl",
    function ($scope, productsService, $http, $q, viewModelHelper) {

        $scope.viewModelHelper = viewModelHelper;
        $scope.productsService = productsService;

        var initialize = function () {
        };

        initialize();

    });