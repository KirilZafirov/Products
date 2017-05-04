mainModule.directive('droidInfoCard', function () {
    return {
        templateUrl: '/App/atsGrid/Views/droidInfoFile.html',
        restrict: 'E',
        scope: {
            droid: '=',
            initialCollapsed: '@collapsed'
        },
        controllerAs: 'vm',
        bindToController:true,
        controller: function () {
          
        }
    }
});