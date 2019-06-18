'use strict';

/* Controllers */

app
// Flot Chart controller
    .controller('priceStatisticCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $scope.pricestaticdata = [
        {name:"DPAM" , value: {
          periphery: {Lowprice : 4,Middleprice : 0,Highprice : 0},
          mall: {Lowprice : 12,Middleprice : 18,Highprice : 0},
          cityCenter: {Lowprice : 10,Middleprice : 8,Highprice : 14}
        },},
        {name:"LAHALLE" , value: {
          periphery: {Lowprice : 8,Middleprice : 0,Highprice : 0},
          mall: {Lowprice : 6,Middleprice : 23,Highprice : 0},
          cityCenter: {Lowprice : 12,Middleprice : 7,Highprice : 12,}
        },},
        {name:"ORCHESTRA", value: {
          periphery: {Lowprice : 7,Middleprice : 0,Highprice : 0},
          mall: {Lowprice : 14,Middleprice : 12,Highprice : 0},
          cityCenter: {Lowprice : 11,Middleprice : 9,Highprice : 10,}
        },},
        {name:"OKAIDI", value: {
          periphery: {Lowprice : 2,Middleprice : 0,Highprice : 0},
          mall: {Lowprice : 9,Middleprice : 10,Highprice : 0},
          cityCenter: {Lowprice : 11,Middleprice : 12,Highprice : 10,}
        },},
        {name:"KIABI", value: {
          periphery: {Lowprice : 5,Middleprice : 0,Highprice : 0},
          mall: {Lowprice : 7,Middleprice : 11,Highprice : 0},
          cityCenter: {Lowprice : 14,Middleprice : 18,Highprice : 16,}
        }}
        ]
    }]);
