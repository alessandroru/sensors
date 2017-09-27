(function() {
    'use strict';

    angular
        .module('app.sensor.authentication')
        .controller('LockController', LockController);

    /* @ngInject */
    function LockController($state, triSettings) {
        var vm = this;
        vm.loginClick = loginClick;
        vm.errorMsg = '';
        /*
        vm.user = {
            name: 'Admin',
            email: 'admin@sensor.com',
            password: 'zumzum'
        };
        */
        vm.user = {
            email : '',
            password : ''
        };

        vm.triSettings = triSettings;

        ////////////////

        // controller to handle login check
        function loginClick() {
            // user logged in ok so goto the dashboard
            //$state.go('triangular.dashboard-general');
            if(vm.user.password=='zumzum'){
                $state.go('triangular.dashboard-logs');
            }else{
                vm.errorMsg = 'errore';
            }
        }
    }
})();
