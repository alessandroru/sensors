(function() {
    'use strict';

    angular
        .module('app.sensor.dashboards')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.sales-layout', {
            abstract: true,
            views: {
                sidebarLeft: {
                    templateUrl: 'app/layouts/leftsidenav/leftsidenav.tmpl.html',
                    controller: 'MenuController',
                    controllerAs: 'vm'
                },
                content: {
                    template: '<div id="admin-panel-content-view" flex ui-view></div>'
                },
                belowContent: {
                    template: '<div ui-view="belowContent"></div>'
                }
            }
        })
        .state('triangular.dashboard-general', {
            url: '/dashboards/general',
            templateUrl: 'app/sensor/dashboards/general/dashboard-general.tmpl.html'
        })
        .state('triangular.dashboard-analytics', {
            url: '/dashboards/analytics',
            views: {
                '': {
                    templateUrl: 'app/sensor/dashboards/analytics/analytics.tmpl.html',
                    controller: 'DashboardAnalyticsController',
                    controllerAs: 'vm'
                },
                'belowContent': {
                    templateUrl: 'app/sensor/dashboards/analytics/fab-button.tmpl.html',
                    controller: 'DashboardAnalyticsFabButtonController',
                    controllerAs: 'vm'
                }
            },
            data: {
                layout: {
                    contentClass: 'analytics-dashboard'
                }
            }
        })
        .state('triangular.dashboard-classic', {
            url: '/dashboards/classic',
            templateUrl: 'app/sensor/dashboards/classic/classic.tmpl.html',
            controller: 'DashboardClassicController',
            controllerAs: 'vm'
        })
        .state('triangular.dashboard-server', {
            url: '/dashboards/server',
            templateUrl: 'app/sensor/dashboards/server/dashboard-server.tmpl.html',
            controller: 'DashboardServerController',
            controllerAs: 'vm'
        })
        .state('triangular.dashboard-widgets', {
            url: '/dashboards/widgets',
            templateUrl: 'app/sensor/dashboards/widgets.tmpl.html'
        })
        .state('triangular.dashboard-social', {
            url: '/dashboards/social',
            templateUrl: 'app/sensor/dashboards/social/dashboard-social.tmpl.html',
            controller: 'DashboardSocialController',
            controllerAs: 'vm'
        })
        .state('triangular.dashboard-logs', {
            url: '/dashboards/logs',
            data: {
                layout: {
                    showToolbar: true
                }
            },
            views: {
                '': {
                    templateUrl: 'app/sensor/dashboards/logs/dashboard-sales.tmpl.html',
                    controller: 'DashboardSalesController',
                    controllerAs: 'vm'
                }
            }
        })/*
        .state('triangular.dashboard-draggable', {
            url: '/dashboards/draggable-widgets',
            templateUrl: 'app/sensor/dashboards/dashboard-draggable.tmpl.html',
            controller: 'DashboardDraggableController',
            controllerAs: 'vm'
        })*/
        .state('triangular.dashboard-log', {
            url: '/dashboards/session/:logID',
            templateUrl: 'app/sensor/dashboards/log/log.tmpl.html',
            controller: 'DashboardLogController',
            controllerAs: 'vm'
        });

        /*
        .state('triangular.dashboard-log', {
            url: '/dashboards/new-session',
            templateUrl: 'app/sensor/dashboards/log/log.tmpl.html',
            controller: 'DashboardLogController',
            controllerAs: 'vm'
        });
        */
        triMenuProvider.addMenu({
            name: 'Dashboards',
            icon: 'zmdi zmdi-home',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Analytics',
                state: 'triangular.dashboard-analytics',
                type: 'link'
            },{
                name: 'General',
                state: 'triangular.dashboard-general',
                type: 'link'
            },{
                name: 'Sessions',
                state: 'triangular.dashboard-logs',
                type: 'link'
            },{
                name: 'Classic',
                state: 'triangular.dashboard-classic',
                type: 'link'
            },{
                name: 'Server',
                state: 'triangular.dashboard-server',
                type: 'link'
            }
                /*{
                name: 'Social',
                state: 'triangular.dashboard-social',
                type: 'link'
            },{
                name: 'Widgets',
                state: 'triangular.dashboard-widgets',
                type: 'link'
            },{
                name: 'Draggable',
                state: 'triangular.dashboard-draggable',
                type: 'link'
            }*/]
        });

    }
})();
