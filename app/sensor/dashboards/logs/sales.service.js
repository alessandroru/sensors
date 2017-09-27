(function() {
    'use strict';

    angular
        .module('app.sensor.dashboards')
        .factory('LogService', LogService);

    /* @ngInject */
    function LogService() {
        return {
            getLogs: getLogs,
            //createLineChartData: createLineChartData,
            //createPieChartData: createPieChartData,
            //createBarChartData: createBarChartData
        };


        function getLogs(){

        }


        ////////////////
        /*
        function generateSales(dateRange) {
            var salesData = {
                totalSales: 0,
                totalEarnings: 0,
                dayTotals: [],
                orders: []
            };

            var startTime = dateRange.start.toDate();
            var endTime = dateRange.end.toDate();

            for(var date = startTime.getTime(); date < endTime.getTime(); date += 86400000) {
                var salesForTheDay = Math.floor(Math.random() * (100 - 0)) + 0;
                var ordersData = generateOrders(salesForTheDay, date);

                salesData.orders = salesData.orders.concat(ordersData.orders);

                salesData.dayTotals.push({
                    date: moment(date),
                    sales: salesForTheDay,
                    earnings: ordersData.totalEarnings
                });
                salesData.totalSales += salesForTheDay;
                salesData.totalEarnings += ordersData.totalEarnings;
            }

            return salesData;
        }
        */
        /*
        function generateOrders(numOrders, date) {
            var ordersData = {
                orders: [],
                totalEarnings: 0
            };
            for(var o = 0; o < numOrders; o++) {
                var order = generateOrder(date);
                ordersData.totalEarnings += order.total;
                ordersData.orders.push(order);
            }

            return ordersData;
        }
        */
        /*
        function generateOrder(date) {
            var statuses = ['complete', 'pending', 'delivered'];

            var titles = ['Sessione n1','Sessione n2','Sessione n3','Sessione n4','Sessione n5','Sessione n6','Sessione n7','Sessione n8','Sessione n9','Sessione n10','Sessione n11','Sessione n12','Sessione n13','Sessione n14'];


            var durata = ['1234','1234','1234','1234','1234','1234','1234','1234','1234','1234','1234','1234','1234','1234'];
            var order = {
                id: makeid(),
                durata: durata[Math.floor(Math.random() * durata.length)],
                titolo: titles[Math.floor(Math.random() * titles.length)],
                date: moment(date + Math.floor(Math.random() * (86400000 - 0)) + 0),
                items: []
                //subTotal: 0,
                //status: statuses[Math.floor(Math.random() * statuses.length)],
                //tax: 0,
                //total: 0
            };

            var numItems = 10;
            var productAdjectives = ['Super', 'Amazing', 'Great', 'New'];
            var productTypes = ['T-Shirt', 'Book', 'Desk', 'Coat', 'Chair', 'Hat', 'Jeans'];
            var productColors = ['Red', 'Green', 'Blue', 'Pink', 'Yellow', 'Orange'];
            var productCategories = ['Books', 'Electronics', 'Home', 'Toys', 'Clothes', 'Shoes', 'Mobiles'];

            for(var i = 0; i < numItems; i++) {
                var item = {
                    name: productAdjectives[0] + ' ' + productColors[0] + ' ' + productTypes[0],
                    category: productCategories[0],
                    price: (Math.random() * (100 - 1) + 1).toFixed(2)
                };
                order.subTotal += parseFloat(item.price);

                order.items.push(item);
            }


            order.tax = order.subTotal * 0.2;
            order.total += order.subTotal + order.tax;

            return order;
        }
        */


        /*
        function createLineChartData(salesData) {
            var chartData = {
                labels: [],
                series: ['Sales'],
                options: {
                    maintainAspectRatio: false,
                    datasetFill: false,
                    responsive: true,
                    scaleShowGridLines: false,
                    bezierCurve: true,
                    pointDotRadius: 2,
                    scaleFontColor: '#ffffff',
                    scaleFontSize: 16
                },
                colors: ['#ffffff'],
                data: []
            };

            var row = [];
            for (var i = 0; i < salesData.dayTotals.length; i++) {
                chartData.labels.push(salesData.dayTotals[i].date.format('M/D/YY'));
                row.push(salesData.dayTotals[i].sales);
            }
            chartData.data.push(row);

            return chartData;
        }

        function createPieChartData(salesData) {
            var chartData = {
                labels: [],
                data: []
            };

            for (var i = 0; i < salesData.orders.length; i++) {
                if(chartData.labels.indexOf(salesData.orders[i].status) === -1) {
                    chartData.labels.push(salesData.orders[i].status);
                    chartData.data.push(0);
                }
                var index = chartData.labels.indexOf(salesData.orders[i].status);
                chartData.data[index]++;
            }
            return chartData;
        }

        function createBarChartData(salesData) {
            var chartData = {
                labels: [],
                series: ['Sales'],
                data: [],
                options: {
                    barShowStroke : false
                }
            };

            var row = [];
            for (var order = 0; order < salesData.orders.length; order++) {
                for (var item = 0; item < salesData.orders[order].items.length; item++) {
                    if(chartData.labels.indexOf(salesData.orders[order].items[item].category) === -1) {
                        chartData.labels.push(salesData.orders[order].items[item].category);
                        row.push(0);
                    }
                    var index = chartData.labels.indexOf(salesData.orders[order].items[item].category);
                    row[index]++;
                }
            }
            chartData.data.push(row);
            return chartData;
        }
        */

        function makeid() {
            var text = '';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

            for( var i=0; i < 5; i++ ) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text;
        }

    }
})();
