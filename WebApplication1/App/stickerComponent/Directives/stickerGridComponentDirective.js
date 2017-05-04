stickerComponentModule.directive('stickerGridComponent', function () {
    return {
        templateUrl: '/App/stickerComponent/Views/stickerGridComponent.html',
        restrict: 'AE',
        scope: {
            atsGridCustomization:'=' 
        },
        controller: function ($scope, gridComponentService) {
            $scope.grouping = gridComponentService.grouping;
            
            $scope.dataGridOptions = gridComponentService.dataGridOptions;
            $scope.checkBoxOptions = gridComponentService.checkBoxOption;
            }
    }
});
