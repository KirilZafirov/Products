    mainModule.directive('userInfoCard', function (jediPolicy) {
    return {
        templateUrl: '/App/atsGrid/Views/userInfoFile.html',
        restrict: 'E',
        scope: {
            user: '=',
            initialCollapsed:'@collapsed'
        },
        controllerAs: 'vm',
        bindToController:true,
        controller: function ($scope) {
            this.knightMe = function (user) {
                this.showKnightModal = true;
            };
            this.knightDialogDone = function (response) {
                this.showKnightModal = false;
                if (response) {
                    if (this.user.hasForce &&
                       (
                           this.user.yearsOfJediTraining > 20 ||
                               this.user.isChosenOne ||
                               (this.user.master === 'Yoda' && this.user.yearsOfJediTraining > 3)) &&
                       this.user.masterApproves &&
                       this.user.passedTrials)
                    {
                        this.user.rank = 'Jedi Knight';
                    } else {
                        alert('Sorry,' + this.user.name + ' is not ready to become a jedi Knight');
                    }
                } else {
                    alert('Sorry,' + this.user.name + ' is not ready to become a jedi Knight');
                }
            }
           
            this.removeFriend = function (friend) {
                var idx = this.user.friends.indexOf(friend);
                if (idx > -1) {
                    this.user.friends.splice(idx, 1);
                }
            }
        }
    }
    });
 


    