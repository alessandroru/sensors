(function() {
    'use strict';

    angular
        .module('app.sensor.elements')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.elements-buttons', {
            url: '/elements/buttons',
            templateUrl: 'app/sensor/elements/buttons.tmpl.html',
            controller: 'ButtonsController',
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-icons', {
            url: '/elements/icons',
            templateUrl: 'app/sensor/elements/icons.tmpl.html',
            controller: 'IconsController',
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            },
            resolve: {
                icons: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'elements/icons'
                    });
                },
                fa: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'elements/icons-fa'
                    });
                }
            }
        })
        .state('triangular.elements-checkboxes', {
            url: '/elements/checkboxes',
            templateUrl: 'app/sensor/elements/checkboxes.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-radios', {
            url: '/elements/radios',
            templateUrl: 'app/sensor/elements/radios.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-toolbars', {
            url: '/elements/toolbars',
            templateUrl: 'app/sensor/elements/toolbars.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-tooltips', {
            url: '/elements/tooltips',
            templateUrl: 'app/sensor/elements/tooltips.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-whiteframes', {
            url: '/elements/whiteframes',
            templateUrl: 'app/sensor/elements/whiteframes.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-sliders', {
            url: '/elements/sliders',
            templateUrl: 'app/sensor/elements/sliders.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-toasts', {
            url: '/elements/toasts',
            templateUrl: 'app/sensor/elements/toasts.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-progress', {
            url: '/elements/progress',
            templateUrl: 'app/sensor/elements/progress.tmpl.html',
            controller: 'ProgressController',
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-switches', {
            url: '/elements/switches',
            templateUrl: 'app/sensor/elements/switches.tmpl.html',
            controller: function() {
                this.toggleAll = function(data, value) {
                    for(var x in data) {
                        data[x] = value;
                    }
                };
            },
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-dialogs', {
            url: '/elements/dialogs',
            templateUrl: 'app/sensor/elements/dialogs.tmpl.html',
            controller: 'DialogsController',
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.menus', {
            url: '/elements/menus',
            templateUrl: 'app/sensor/elements/menus.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-tabs', {
            url: '/elements/tabs',
            templateUrl: 'app/sensor/elements/tabs.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-sidebars', {
            url: '/elements/sidebars',
            templateUrl: 'app/sensor/elements/sidebars.tmpl.html',
            controller: function($mdSidenav) {
                this.openSidebar = function(id) {
                    $mdSidenav(id).toggle();
                };
            },
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-grids', {
            url: '/elements/grids',
            templateUrl: 'app/sensor/elements/grids.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.fab-speed', {
            url: '/elements/fab-speed',
            templateUrl: 'app/sensor/elements/fab-speed.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.fab-toolbar', {
            url: '/elements/fab-toolbar',
            templateUrl: 'app/sensor/elements/fab-toolbar.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-selects', {
            url: '/elements/selects',
            templateUrl: 'app/sensor/elements/selects.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-tables', {
            url: '/elements/tables',
            templateUrl: 'app/sensor/elements/tables.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-textangular', {
            url: '/elements/textangular',
            templateUrl: 'app/sensor/elements/textangular.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-lists', {
            url: '/elements/lists',
            templateUrl: 'app/sensor/elements/lists.tmpl.html',
            controller: function(emails) {
                this.emails = emails.data.splice(0, 5);
            },
            controllerAs: 'vm',
            resolve: {
                emails: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'email/inbox'
                    });
                }
            },
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-chips', {
            url: '/elements/chips',
            templateUrl: 'app/sensor/elements/chips.tmpl.html',
            controller: 'ChipsController',
            controllerAs: 'vm',
            resolve: {
                contacts: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'email/contacts'
                    });
                }
            },
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-cards', {
            url: '/elements/cards',
            templateUrl: 'app/sensor/elements/cards.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-upload', {
            url: '/elements/upload',
            templateUrl: 'app/sensor/elements/upload.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-loader', {
            url: '/elements/loader',
            templateUrl: 'app/sensor/elements/loader.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.elements-datepicker', {
            url: '/elements/datepicker',
            templateUrl: 'app/sensor/elements/datepicker.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        });

        triMenuProvider.addMenu({
            name: 'Elements',
            icon: 'zmdi zmdi-graduation-cap',
            type: 'dropdown',
            priority: 3.1,
            permission: 'viewElements',
            children: [{
                name: 'Buttons',
                type: 'link',
                state: 'triangular.elements-buttons'
            },{
                name: 'Cards',
                type: 'link',
                state: 'triangular.elements-cards'
            },{
                name: 'Checkboxes',
                type: 'link',
                state: 'triangular.elements-checkboxes'
            },{
                name: 'Chips',
                type: 'link',
                state: 'triangular.elements-chips'
            },{
                name: 'Datepicker',
                type: 'link',
                state: 'triangular.elements-datepicker'
            },{
                name: 'Dialogs',
                type: 'link',
                state: 'triangular.elements-dialogs'
            },{
                name: 'FAB Speed Dial',
                type: 'link',
                state: 'triangular.fab-speed'
            },{
                name: 'FAB Toolbar',
                type: 'link',
                state: 'triangular.fab-toolbar'
            },{
                name: 'Grids',
                type: 'link',
                state: 'triangular.elements-grids'
            },{
                name: 'Icons',
                type: 'link',
                state: 'triangular.elements-icons'
            },{
                name: 'Lists',
                type: 'link',
                state: 'triangular.elements-lists'
            },{
                name: 'Loader',
                type: 'link',
                state: 'triangular.elements-loader'
            },{
                name: 'Menus',
                type: 'link',
                state: 'triangular.menus'
            },{
                name: 'Progress',
                type: 'link',
                state: 'triangular.elements-progress'
            },{
                name: 'Radios',
                type: 'link',
                state: 'triangular.elements-radios'
            },{
                name: 'Selects',
                type: 'link',
                state: 'triangular.elements-selects'
            },{
                name: 'Sidebars',
                type: 'link',
                state: 'triangular.elements-sidebars'
            },{
                name: 'Sliders',
                type: 'link',
                state: 'triangular.elements-sliders'
            },{
                name: 'Switches',
                type: 'link',
                state: 'triangular.elements-switches'
            },{
                name: 'Tables',
                type: 'link',
                state: 'triangular.elements-tables'
            },{
                name: 'Tabs',
                type: 'link',
                state: 'triangular.elements-tabs'
            },{
                name: 'Textangular',
                type: 'link',
                state: 'triangular.elements-textangular'
            },{
                name: 'Toasts',
                type: 'link',
                state: 'triangular.elements-toasts'
            },{
                name: 'Toolbars',
                type: 'link',
                state: 'triangular.elements-toolbars'
            },{
                name: 'Tooltips',
                type: 'link',
                state: 'triangular.elements-tooltips'
            },{
                name: 'Whiteframes',
                type: 'link',
                state: 'triangular.elements-whiteframes'
            },{
                name: 'Upload',
                type: 'link',
                state: 'triangular.elements-upload'
            }]
        });
    }
})();
