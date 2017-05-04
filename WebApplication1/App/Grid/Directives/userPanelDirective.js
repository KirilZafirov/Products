mainModule.directive('userPanel',
   function () {
       return {
           restrict: 'E',
           transclude: true,
           templateUrl: '/App/atsGrid/Views/userPanel.html',
           scope: {
               name: '@',
               level: '=',
               initialCollapsed: '@'
           },
           controller: function ($scope) {
               $scope.collapsed = ($scope.initialCollapsed === 'true');
               $scope.nextState = function (evt) {
                   evt.stopPropagation();
                   evt.preventDefault();
                   $scope.level++;
                   $scope.level = $scope.level % 4;
               }
               $scope.collapse = function () {
                   $scope.collapsed = !$scope.collapsed;
               }
           }
       }
   });
