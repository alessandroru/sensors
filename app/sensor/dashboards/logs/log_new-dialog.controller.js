/**
 * Created by alessandro on 26/09/17.
 */
(function() {
    'use strict';

    angular
        .module('app.sensor.dashboards')
        .controller('SalesNewOrderDialogController', SalesNewOrderDialogController);

    /* @ngInject */
    function SalesNewOrderDialogController($window, $mdDialog,$mdToast, $http) {
        var vm = this;
        vm.cancelClick = cancelClick;

        vm.startSession = startSession;

        vm.user = {
            title: '',
            description: '',
            location: ''
        };

        ////////////////

        function startSession() {

            console.log(vm.session);

            $http({
                method: 'jsonp',
                url: 'http://localhost:8888/sensor_back/start/',
                params: {title:vm.session.title, description:vm.session.description, location: vm.session.location}
            }).then(function successCallback(response) {
                console.log(response.data);

                if(response.data.status=='ok'){
                    console.log('fare redirect');
                    $mdDialog.hide();
                    $window.location.href = '/#!/dashboards/session/'+response.data.id;
                }else{
                    $mdToast.show(
                        $mdToast.simple()
                            .content(response.data.message)
                            .position('bottom right')
                            .hideDelay(2000)
                    );
                }

            }, function errorCallback(response) {
                $mdToast.show(
                    $mdToast.simple()
                        .content('Problem!')
                        .position('bottom right')
                        .hideDelay(2000)
                );
            });

        }

        function cancelClick() {
            $mdDialog.cancel();
        }

    }
})();
