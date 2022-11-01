// app.directive('appForm', appForm);

forms.directive('appForm', function () {
    return {
        restrict: 'A',
        template: '<h1>Oeee</h1>',
        replace: false,
        link: function (scope, element, attrs) {
            /*$('#map').click(function(e) {
                        $('#marker').css('left', e.pageX).css('top', e.pageY)
                                .show();
                    }); */
        }
    };
})

/*
function appForm() {
    return {
        restrict: 'A',
        template: '<p>adad</p>',
        controller: 'FormController'
        // templateUrl: 'app/directives/form/form-directive.html',
        /*locationscope: {
            data: '=data'
        },
        link: linkFunc,
        controller: 'FormController',
        // note: This would be 'ExampleController' (the exported controller name, as string)
        // if referring to a defined controller in its separate file.
        controllerAs: 'vm',
        bindToController: true // because the scope is isolated
    };

    function linkFunc(scope, el, attr, ctrl) {
        scope.text = attributes['appForm'];
        /*console.log('LINK: scope.min = %s *** should be undefined', scope.min);
        console.log('LINK: scope.max = %s *** should be undefined', scope.max);
        console.log('LINK: scope.vm.min = %s', scope.vm.min);
        console.log('LINK: scope.vm.max = %s', scope.vm.max);
    }

} */
