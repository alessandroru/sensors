(function() {
    'use strict';

    angular
        .module('app.sensor.menu')
        .factory('dynamicMenuService', dynamicMenuService);

    /* @ngInject */
    function dynamicMenuService() {
        return {
            dynamicMenu: {
                showDynamicMenu: false
            }
        };
    }
})();
