(function() {
    'use strict';

    angular
        .module('app.sensor.todo')
        .controller('TodoFabController', TodoFabController);

    /* @ngInject */
    function TodoFabController($rootScope) {
        var vm = this;
        vm.addTodo = addTodo;

        ////////////////

        function addTodo($event) {
            $rootScope.$broadcast('addTodo', $event);
        }
    }
})();
