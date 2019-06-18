'use strict';

/* Controllers */

app
// Flot Chart controller
    .controller('colorCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
         // d3.json("./js/productcolor.json", function(error, data) {
         //    console.log(data);
            $scope.colorchart = [
                          {
                            "name":"DPAM",
                            "color":"#70D4A",
                            "value":[
                              {
                                "num": "1",
                                "sum": 1950
                              },
                              {
                                "num": "2",
                                "sum": 1540
                              },
                              {
                                "num": "3",
                                "sum": 100
                              },
                              {
                                "num": "4",
                                "sum": 1020
                              },
                              {
                                "num": "5",
                                "sum": 400
                              },
                              {
                                "num": "6",
                                "sum": 400
                              },
                              {
                                "num": "7",
                                "sum": 120
                              },
                              {
                                "num": "8",
                                "sum": 100
                              },
                              {
                                "num": "9",
                                "sum": 50
                              }
                            ]
                          },
                          {
                            "name":"LAHALLE",
                            "color":"#BBBBB9",
                            "value":[
                                {
                                "num": "1",
                                "sum": 512
                                },
                                {
                                "num": "2",
                                "sum": 1540
                                },
                                {
                                "num": "3",
                                "sum": 670
                                },
                                {
                                "num": "4",
                                "sum": 1020
                                },
                                {
                                "num": "5",
                                "sum": 876
                                },
                                {
                                "num": "6",
                                "sum": 230
                                },
                                {
                                "num": "7",
                                "sum": 200
                                },
                                {
                                "num": "8",
                                "sum": 100
                                },
                                {
                                "num": "9",
                                "sum": 400
                                }
                                ]
                                },
                            {
                              "name":"ORHESTRA",
                              "color":"#FEBF95",
                              "value":[
                                {
                                "num": "1",
                                "sum": 330
                                },
                                {
                                "num": "2",
                                "sum": 425
                                },
                                {
                                "num": "3",
                                "sum": 1230
                                },
                                {
                                "num": "4",
                                "sum": 1020
                                },
                                {
                                "num": "5",
                                "sum": 876
                                },
                                {
                                "num": "6",
                                "sum": 650
                                },
                                {
                                "num": "7",
                                "sum": 200
                                },
                                {
                                "num": "8",
                                "sum": 100
                                },
                                {
                                "num": "9",
                                "sum": 18
                                }
                              ]
                            },
                          {
                            "name":"OKAIDI",
                            "color":"#4DA79C",
                            "value":[
                              {
                              "num": "1",
                              "sum": 24
                              },
                              {
                              "num": "2",
                              "sum": 651
                              },
                              {
                              "num": "3",
                              "sum": 1230
                              },
                              {
                              "num": "4",
                              "sum": 493
                              },
                              {
                              "num": "5",
                              "sum": 876
                              },
                              {
                              "num": "6",
                              "sum": 400
                              },
                              {
                              "num": "7",
                              "sum": 318
                              },
                              {
                              "num": "8",
                              "sum": 100
                              },
                              {
                              "num": "9",
                              "sum": 65
                              }
                            ]
                          },
                          {
                            "name":"KIABI",
                            "color":"#D6E5F3",
                            "value":[
                              {
                                "num": "1",
                                "sum": 210
                              },
                              {
                                "num": "2",
                                "sum": 1540
                              },
                              {
                                "num": "3",
                                "sum": 467
                              },
                              {
                                "num": "4",
                                "sum": 1020
                              },
                              {
                                "num": "5",
                                "sum": 325
                              },
                              {
                                "num": "6",
                                "sum": 400
                              },
                              {
                                "num": "7",
                                "sum": 200
                              },
                              {
                                "num": "8",
                                "sum": 100
                              },
                              {
                                "num": "9",
                                "sum": 50
                              }
                            ]
                          }

                        ];
 
        // })
    }]);
