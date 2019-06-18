'use strict';

/* Controllers */

app
// Flot Chart controller
    .controller('discountbyplayerCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $scope.discaountbyplayer = [
                                {
                                "name":"DPAM",
                                "value":[
                                    {
                                      "category":"Jeans",
                                      "Share": 40,
                                      "Rate": 16,
                                      "color": "#171438"                                      
                                    },
                                    {
                                      "category":"Dresses",
                                      "Share": 33,
                                      "Rate": 43,
                                      "color": "#15255D"
                                      
                                    },
                                    {
                                      "category":"Pants",
                                      "Share": 70,
                                      "Rate": 19,
                                      "color": "#152f6e"
                                    
                                    },
                                    {
                                      "category":"T-shirts",
                                      "Share": 25,
                                      "Rate": 33,
                                      "color": "#275A98"
                                      
                                    },
                                    {
                                      "category":"Shorts",
                                      "Share": 23,
                                      "Rate": 24,
                                      "color": "#387bc8"
                                      
                                    },
                                    {
                                      "category":"Tops",
                                      "Share": 48,
                                      "Rate": 21,
                                      "color": "#70a4d4"
                                      
                                    },
                                    {
                                      "category":"Blazers",
                                      "Share": 100,
                                      "Rate": 5,
                                      "color": "#99c0de"
                                      
                                    }                                
                                ]
                              },
                              {
                                "name":"LAHALLE",
                                "value":[{
                                      "category":"Jeans",
                                      "Share": 40,
                                      "Rate": 19,
                                      "color": "#171438"
                                      
                                    },
                                    {
                                      "category":"Dresses",
                                      "Share": 33,
                                      "Rate": 25,
                                      "color": "#15255D"
                                      
                                    },
                                    {
                                      "category":"Pants",
                                      "Share": 31,
                                      "Rate": 30,
                                      "color": "#152f6e"
                                      
                                    },
                                    {
                                      "category":"T-shirts",
                                      "Share": 62,
                                      "Rate": 22,
                                      "color": "#275A98"
                                      
                                    },
                                    {
                                      "category":"Shorts",
                                      "Share": 23,
                                      "Rate": 19,
                                      "color": "#387bc8"
                                      
                                    },
                                    {
                                      "category":"Tops",
                                      "Share": 38,
                                      "Rate": 20,
                                      "color": "#70a4d4"
                                      
                                    },
                                    {
                                      "category":"Blazers",
                                      "Share": 22,
                                      "Rate": 24,
                                      "color": "#99c0de"
                                      
                                    }
                                ]
                              },
                              {
                                "name":"ORCHESTRA",
                                "value":[{
                                      "category":"Jeans",
                                      "Share": 45,
                                      "Rate": 16,
                                      "color": "#171438"
                                      
                                    },
                                    {
                                      "category":"Dresses",
                                      "Share": 33,
                                      "Rate": 22,
                                      "color": "#15255D"
                                      
                                    },
                                    {
                                      "category":"Pants",
                                      "Share": 50,
                                      "Rate": 15,
                                      "color": "#152f6e"
                                      
                                    },
                                    {
                                      "category":"T-shirts",
                                      "Share": 27,
                                      "Rate": 25,
                                      "color": "#275A98"
                                      
                                    },
                                    {
                                      "category":"Shorts",
                                      "Share": 80,
                                      "Rate": 50,
                                      "color": "#387bc8"
                                      
                                    },
                                    {
                                      "category":"Tops",
                                      "Share": 68,
                                      "Rate": 21,
                                      "color": "#70a4d4"
                                     
                                    },
                                    {
                                      "category":"Blazers",
                                      "Share": 22,
                                      "Rate": 8,
                                      "color": "#99c0de"
                                      
                                    }
                                ]
                              },
                              {
                                "name":"OKAIDI",
                                "value":[{
                                      "category":"Jeans",
                                      "Share": 25,
                                      "Rate": 21,
                                      "color": "#171438"
                                      
                                    },
                                    {
                                      "category":"Dresses",
                                      "Share": 33,
                                      "Rate": 18,
                                      "color": "#15255D"
                                      
                                    },
                                    {
                                      "category":"Pants",
                                      "Share": 14,
                                      "Rate": 42,
                                      "color": "#152f6e"
                                      
                                    },
                                    {
                                      "category":"T-shirts",
                                      "Share": 25,
                                      "Rate": 36,
                                      "color": "#275A98"
                                      
                                    },
                                    {
                                      "category":"Shorts",
                                      "Share": 66,
                                      "Rate": 2,
                                      "color": "#387bc8"
                                      
                                    },
                                    {
                                      "category":"Tops",
                                      "Share": 35,
                                      "Rate": 9,
                                      "color": "#70a4d4"
                                      
                                    },
                                    {
                                      "category":"Blazers",
                                      "Share": 22,
                                      "Rate": 30,
                                      "color": "#99c0de"
                                      
                                    }
                                ]
                              },
                              {
                                "name":"KIABI",
                                "value":[{
                                      "category":"Jeans",
                                      "Share": 16,
                                      "Rate": 21,
                                      "color": "#171438"
                                      
                                    },
                                    {
                                      "category":"Dresses",
                                      "Share": 33,
                                      "Rate": 22,
                                      "color": "#15255D"
                                      
                                    },
                                    {
                                      "category":"Pants",
                                      "Share": 31,
                                      "Rate": 16,
                                      "color": "#152f6e"
                                      
                                    },
                                    {
                                      "category":"T-shirts",
                                      "Share": 20,
                                      "Rate": 8,
                                      "color": "#275A98"
                                      
                                    },
                                    {
                                      "category":"Shorts",
                                      "Share": 23,
                                      "Rate": 44,
                                      "color": "#387bc8"
                                      
                                    },
                                    {
                                      "category":"Tops",
                                      "Share": 20,
                                      "Rate": 30,
                                      "color": "#70a4d4"
                                      
                                    },
                                    {
                                      "category":"Blazers",
                                      "Share": 80,
                                      "Rate": 11,
                                      "color": "#99c0de"
                                      
                                    }
                                ]
                            }
                          ]
    }]);
