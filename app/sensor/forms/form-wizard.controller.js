(function() {
    'use strict';

    angular
        .module('app.sensor.forms')
        .controller('FormWizardController', FormWizardController);

    /* @ngInject */
    function FormWizardController() {
        var vm = this;
        vm.data = {
            account: {
                username: 'Oxygenna'
            }
        };
    }
})();
