mainModule.directive('address', function () {
    return {
        restrict: 'E',
        templateUrl: '/App/atsGrid/Views/address.html',
        scope:true,
        controller:function($scope) {
            $scope.expandAddress = function() {
                $scope.collapsed = false;
            }
            $scope.collapseAddress = function () {
                $scope.collapsed = true;
            }
        }
}
});