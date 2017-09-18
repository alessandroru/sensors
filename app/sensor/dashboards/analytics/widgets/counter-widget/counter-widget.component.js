(function() {
    'use strict';

    angular
        .module('app.sensor.dashboards')
        .component('counterWidget', {
            templateUrl: 'app/sensor/dashboards/analytics/widgets/counter-widget/counter-widget.tmpl.html',
            controllerAs: 'vm',
            bindings: {
                title: '@',
                count: '<',
                icon: '@',
                background: '@',
                color: '@'
            }
        });
})();
