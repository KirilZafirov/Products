stickerComponentModule.directive('stickerChartComponent', function () {
    return {
        templateUrl: '/App/stickerComponent/Views/stickerChartComponent.html',
        restrict: 'AE',
        scope: {
            atsChartCustomization: '='
        },
        controller: function ($scope, chartComponentService) {
            var chart = chartComponentService.chartOptions;
            $scope.chartOptions = chart;
    
        }
    }
});