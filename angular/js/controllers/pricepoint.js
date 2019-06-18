'use strict';

/* Controllers */

app
// Flot Chart controller
    .controller('pricepointCtrl', ['$rootScope', '$scope',  function ($rootScope, $scope) {
        $scope.pricepoint = [
                              {
                                "name":"DPAM",
                                "color":"#70D4A",
                                "value":[
                                  {
                                    "nb_sku" : 10,
                                    "image":"./img/b14.jpg",
                                    "price" : 45
                                  },
                                  {
                                    "nb_sku" : 3,
                                    "image":"./img/b14.jpg",
                                    "price" : 40
                                  },
                                  {
                                    "nb_sku" : 5,
                                    "image":"./img/b14.jpg",
                                    "price" : 35
                                  },
                                  {
                                    "nb_sku" : 10,
                                    "image":"./img/b14.jpg",
                                    "price" : 30
                                  },
                                  {
                                    "nb_sku" : 12,
                                    "image":"./img/b14.jpg",
                                    "price" : 25
                                  },
                                  {
                                    "nb_sku" : 13,
                                    "image":"./img/b14.jpg",
                                    "price" : 20
                                  },
                                  {
                                    "nb_sku" : 10,
                                    "image":"./img/b14.jpg",
                                    "price" : 15
                                  },
                                  {
                                    "nb_sku" : 7,
                                    "image":"./img/b14.jpg",
                                    "price" : 10
                                  },
                                  {
                                    "nb_sku" : 3,
                                    "image":"./img/b14.jpg",
                                    "price" : 5
                                  }
                                ]
                              },
                              {
                                "name":"LAHALLE",
                                "color":"#BBBBB9",
                                "value":[
                                  {
                                    "nb_sku" : 10,
                                    "image":"./img/b14.jpg",
                                    "price" : 45
                                  },
                                  {
                                    "nb_sku" : 3,
                                    "image":"./img/b14.jpg",
                                    "price" : 40
                                  },
                                  {
                                    "nb_sku" : 5,
                                    "image":"./img/b14.jpg",
                                    "price" : 35
                                  },
                                  {
                                    "nb_sku" : 10,
                                    "image":"./img/b14.jpg",
                                    "price" : 30
                                  },
                                  {
                                    "nb_sku" : 12,
                                    "image":"./img/b14.jpg",
                                    "price" : 25
                                  },
                                  {
                                    "nb_sku" : 13,
                                    "image":"./img/b14.jpg",
                                    "price" : 20
                                  },
                                  {
                                    "nb_sku" : 10,
                                    "image":"./img/b14.jpg",
                                    "price" : 15
                                  },
                                  {
                                    "nb_sku" : 7,
                                    "image":"./img/b14.jpg",
                                    "price" : 10
                                  },
                                  {
                                    "nb_sku" : 1,
                                    "image":"./img/b14.jpg",
                                    "price" : 5
                                  }
                                ]
                              },
                              {
                                "name":"ORHESTRA",
                                "color":"#FEBF95",
                                "value":[
                                  {
                                    "nb_sku" : 10,
                                    "image":"./img/b14.jpg",
                                    "price" : 45
                                  },
                                  {
                                    "nb_sku" : 9,
                                    "image":"./img/b14.jpg",
                                    "price" : 40
                                  },
                                  {
                                    "nb_sku" : 12,
                                    "image":"./img/b14.jpg",
                                    "price" : 35
                                  },
                                  {
                                    "nb_sku" : 8,
                                    "image":"./img/b14.jpg",
                                    "price" : 30
                                  },
                                  {
                                    "nb_sku" : 7,
                                    "image":"./img/b14.jpg",
                                    "price" : 25
                                  },
                                  {
                                    "nb_sku" : 3,
                                    "image":"./img/b14.jpg",
                                    "price" : 20
                                  },
                                  {
                                    "nb_sku" : 12,
                                    "image":"./img/b14.jpg",
                                    "price" : 15
                                  },
                                  {
                                    "nb_sku" : 4,
                                    "image":"./img/b14.jpg",
                                    "price" : 10
                                  },
                                  {
                                    "nb_sku" : 9,
                                    "image":"./img/b14.jpg",
                                    "price" : 5
                                  }
                                ]
                              },
                              {
                                "name":"OKAIDI",
                                "color":"#4DA79C",
                                "value":[
                                  {
                                    "nb_sku" : 9,
                                    "image":"./img/b14.jpg",
                                    "price" : 45
                                  },
                                  {
                                    "nb_sku" : 3,
                                    "image":"./img/b14.jpg",
                                    "price" : 40
                                  },
                                  {
                                    "nb_sku" : 8,
                                    "image":"./img/b14.jpg",
                                    "price" : 35
                                  },
                                  {
                                    "nb_sku" : 5,
                                    "image":"./img/b14.jpg",
                                    "price" : 30
                                  },
                                  {
                                    "nb_sku" : 12,
                                    "image":"./img/b14.jpg",
                                    "price" : 25
                                  },
                                  {
                                    "nb_sku" : 13,
                                    "image":"./img/b14.jpg",
                                    "price" : 20
                                  },
                                  {
                                    "nb_sku" : 15,
                                    "image":"./img/b14.jpg",
                                    "price" : 15
                                  },
                                  {
                                    "nb_sku" : 2,
                                    "image":"./img/b14.jpg",
                                    "price" : 10
                                  },
                                  {
                                    "nb_sku" : 12,
                                    "image":"./img/b14.jpg",
                                    "price" : 5
                                  }
                                ]
                              },
                              {
                                "name":"KIABI",
                                "color":"#D6E5F3",
                                "value":[
                                  {
                                    "nb_sku" : 11,
                                    "image":"./img/b14.jpg",
                                    "price" : 45
                                  },
                                  {
                                    "nb_sku" : 3,
                                    "image":"./img/b14.jpg",
                                    "price" : 40
                                  },
                                  {
                                    "nb_sku" : 2,
                                    "image":"./img/b14.jpg",
                                    "price" : 35
                                  },
                                  {
                                    "nb_sku" : 15,
                                    "image":"./img/b14.jpg",
                                    "price" : 30
                                  },
                                  {
                                    "nb_sku" : 8,
                                    "image":"./img/b14.jpg",
                                    "price" : 25
                                  },
                                  {
                                    "nb_sku" : 13,
                                    "image":"./img/b14.jpg",
                                    "price" : 20
                                  },
                                  {
                                    "nb_sku" : 6,
                                    "image":"./img/b14.jpg",
                                    "price" : 15
                                  },
                                  {
                                    "nb_sku" : 7,
                                    "image":"./img/b14.jpg",
                                    "price" : 10
                                  },
                                  {
                                    "nb_sku" : 4,
                                    "image":"./img/b14.jpg",
                                    "price" : 5
                                  }
                                ]
                              }

                            ];
 
        
}]);
