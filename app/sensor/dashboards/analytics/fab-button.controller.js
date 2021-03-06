(function() {
    'use strict';

    angular
        .module('app.sensor.dashboards')
        .controller('DashboardAnalyticsFabButtonController', DashboardAnalyticsFabButtonController);

    /* @ngInject */
    function DashboardAnalyticsFabButtonController($rootScope) {
        var vm = this;

        vm.changeDate = changeDate;

        ////////////////

        function changeDate($event) {
            // send event to open the change data dialog
            $rootScope.$broadcast('analyticsChangeDate', $event);
        }
    }

})();
