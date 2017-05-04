mainModule.directive('stateDisplay', function () {
    return {
        link: function (scope, el, attrs) {
            var parms = attrs['stateDisplay'].split(' ');
            var linkvar = parms[0];
            var classes = parms.slice(1);

            scope.$watch(linkvar, function (newVal) {
                //el.css('background-color', parms[newVal+1]);// this works
                el.removeClass(classes.join(' '));
                el.addClass(classes[newVal]);
            });
        }
    }
});