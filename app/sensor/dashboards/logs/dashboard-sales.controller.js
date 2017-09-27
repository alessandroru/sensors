(function() {
    'use strict';

    angular
        .module('app.sensor.dashboards')
        .controller('DashboardSalesController', ['$scope', '$q', '$mdDialog', '$http','$state', DashboardSalesController])
        .config(function($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist([
                // Allow same origin resource loads.
                'self',
                // Allow loading from our assets domain.  Notice the difference between * and **.
                'http://localhost:8888/**'
            ]);
        });

    /* @ngInject */
    function DashboardSalesController($scope, $q, $mdDialog, $http, $state) {

        var vm = this;


        vm.query = {
            order: 'date',
            limit: 5,
            page: 1
        };

        vm.user = {
            username: 'Morris',
            password: '',
            description: '',
            favouriteColor: ''
        };

        vm.openOrder = openOrder;

        vm.openLog = openLog;

        vm.deleteLog = deleteLog;

        vm.exportLog = exportLog;

        vm.newLog = newLog;

        /////////////////////////////////

        function newLog(log, $event){
            $mdDialog.show({
                controller: 'SalesNewOrderDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/sensor/dashboards/logs/log_new-dialog.tmpl.html',
                locals: {
                    order: log
                },
                targetEvent: $event
            });
        }


        function exportLog(log, $event) {
            $mdDialog.show({
                controller: 'SalesOrderDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/sensor/dashboards/logs/log_export-dialog.tmpl.html',
                locals: {
                    order: log
                },
                targetEvent: $event
            });
        }

        function deleteLog(order, $event) {
            $mdDialog.show({
                controller: 'SalesOrderDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/sensor/dashboards/logs/log-delete-dialog.tmpl.html',
                locals: {
                    order: order
                },
                targetEvent: $event
            });
        }

        function openOrder(order, $event) {

            $mdDialog.show({
                controller: 'SalesOrderDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/sensor/dashboards/logs/order-dialog.tmpl.html',
                locals: {
                    order: order
                },
                targetEvent: $event
            });

        }

        function openLog(order){
            $state.go('triangular.dashboard-log', {
                logID: order.id
            });

            vm.selectedLog= order.id;
        }


        function getData() {

            $http({
                method: 'jsonp',
                url: 'http://localhost:8888/sensor_back/get_sessions/?page='+vm.query.page+'&limit=5',

            }).then(function successCallback(response) {

                var data = response.data;
                var log = [];
                Object.keys(data).forEach(function(key) {
                    //console.log(data[key]);


                    var item = {
                        id: key,
                        start: data[key]['start'],
                        stop: data[key]['stop'],
                        title: data[key]['title'],
                        date: 1234
                    };

                    log.push(item);

                });


                vm.logsData = log;


            }, function errorCallback(response) {
                $mdToast.show(
                    $mdToast.simple()
                        .content($filter('triTranslate')('Problem!'))
                        .position('bottom right')
                        .hideDelay(2000)
                );
            });

        }





        getData();
    }
})();
