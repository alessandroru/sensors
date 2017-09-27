(function() {
    'use strict';

    angular
        .module('app.sensor.dashboards')
        .controller('SalesOrderDialogController', SalesOrderDialogController);

    /* @ngInject */
    function SalesOrderDialogController($window, $mdDialog, order, $http) {
        var vm = this;
        vm.cancelClick = cancelClick;
        vm.okClick = okClick;
        vm.order = order;
        vm.printClick = printClick;
        vm.deleteClick = deleteClick;

        ////////////////

        function okClick() {
            $mdDialog.hide();
        }

        function cancelClick() {
            $mdDialog.cancel();
        }

        function printClick() {
            $window.print();
        }

        function deleteClick(){

            $http({
                method: 'jsonp',
                url: 'http://localhost:8888/sensor_back/delete_session/',
                params: {id: order['id']}
            }).then(function successCallback(response) {

                var data = response.data;

                $window.location.reload();

            }, function errorCallback(response) {
                console.log(response);
            });

        }


    }
})();
