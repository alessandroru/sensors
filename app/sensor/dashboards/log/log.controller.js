/**
 * Created by alessandro on 22/09/17.
 */
(function() {
    'use strict';

    angular
        .module('app.sensor.dashboards')
        .controller('DashboardLogController', LogController);

    /* @ngInject */
    function LogController($scope, $timeout, $mdToast, $rootScope,  $stateParams ,$state, $http, $interval) {
        var vm = this;



        vm.init = init;

        /////////////////////

        function init() {
            var i = 0;

            $interval(function () {
                i++;

                var options = {
                    maintainAspectRatio: true,
                    datasetFill: false,
                    responsive: true,
                    scaleShowGridLines: true,
                    bezierCurve: true,
                    pointDotRadius: 2,
                    scaleFontColor: '#ffffff',
                    scaleFontSize: 16
                };

                var chartDataAc = {
                    labels: [],
                    series: ['x', 'y', 'z'],
                    options: options,
                    colors: ['#ffffff'],
                    data: []
                };

                var chartDataGy = {
                    labels: [],
                    series: ['x', 'y', 'z'],
                    options: options,
                    colors: ['#ffffff'],
                    data: []
                };

                var chartDataMa = {
                    labels: [],
                    series: ['x', 'y', 'z'],
                    options: options,
                    colors: ['#ffffff'],
                    data: []
                };

                var chartDataTh = {
                    labels: [],
                    series: ['Thermometer'],
                    options: options,
                    colors: ['#ffffff'],
                    data: []
                };

                $http({
                    method: 'jsonp',
                    url: 'http://localhost:8888/sensor_back/real_time/?tick='+i+'&id='+$stateParams['logID']
                }).then(function successCallback(response) {

                    var data = response.data;
                    console.log(data);
                    var accelerometer = data.accelerometer;

                    var gyroscope = data.gyroscope;

                    var magnetometer = data.magnetometer;

                    var thermometer = data.thermometer;


                    var rowTh = [];

                    var rowAx = [];
                    var rowAy = [];
                    var rowAz = [];

                    var rowGx = [];
                    var rowGy = [];
                    var rowGz = [];

                    var rowMx = [];
                    var rowMy = [];
                    var rowMz = [];

                    var rowT = [];


                    (accelerometer).forEach(function(key) {
                        rowAx.push(parseFloat(key['average_x']));
                        rowAy.push(parseFloat(key['average_y']));
                        rowAz.push(parseFloat(key['average_z']));
                        chartDataAc.labels.push(key['timestamp']);
                    });
                    chartDataAc.data.push(rowAx);
                    chartDataAc.data.push(rowAy);
                    chartDataAc.data.push(rowAz);
                    vm.chartLineDataAc = chartDataAc;

                    /**/
                    (gyroscope).forEach(function(key) {
                        rowGx.push(parseFloat(key['average_x']));
                        rowGy.push(parseFloat(key['average_y']));
                        rowGz.push(parseFloat(key['average_z']));
                        chartDataGy.labels.push(key['timestamp']);
                    });
                    chartDataGy.data.push(rowGx);
                    chartDataGy.data.push(rowGy);
                    chartDataGy.data.push(rowGz);
                    vm.chartLineDataGy = chartDataGy;

                    /**/
                    (magnetometer).forEach(function(key) {
                        rowMx.push(parseFloat(key['average_x']));
                        rowMy.push(parseFloat(key['average_y']));
                        rowMz.push(parseFloat(key['average_z']));
                        chartDataMa.labels.push(key['timestamp']);
                    });
                    chartDataMa.data.push(rowMx);
                    chartDataMa.data.push(rowMy);
                    chartDataMa.data.push(rowMz);
                    vm.chartLineDataMa = chartDataMa;

                    /**/
                    (thermometer).forEach(function(key) {

                        chartDataTh.labels.push(key['timestamp']);
                        rowTh.push(key['average']);

                    });
                    chartDataTh.data.push(rowTh);

                    vm.chartLineDataTh = chartDataTh;

                }, function errorCallback(response) {
                    $mdToast.show(
                        $mdToast.simple()
                            .content($filter('triTranslate')('Problem!'))
                            .position('bottom right')
                            .hideDelay(2000)
                    );
                });
            }, 10000);
        }
        init();
    }
})();
