stickerComponentModule.directive('stickerSpiderWebComponent', function () {
    return {
        templateUrl: '/App/stickerComponent/Views/stickerSpiderWebComponent.html',
        restrict: 'AE',
        scope: {
            atsSpiderWebCustomization: '='
        },
        controller: function ($scope, spiderWebComponentService) {
            $scope.polarChartOptions = spiderWebComponentService.polarChartOptions;
        }
    }
});