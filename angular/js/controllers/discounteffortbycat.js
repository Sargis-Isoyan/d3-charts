'use strict';

/* Controllers */

app
// Flot Chart controller
    .controller('discounteffortbycatCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $scope.discounteffortbycat = [
                              {
                                "name":"JEANS",
                                "value":[
                                    {
                                      "category":"DPAM",
                                      "Share": 40,
                                      "Rate": 16,
                                      "color": "#99c0ed"                                      
                                    },
                                    {
                                      "category":"LAHALLE",
                                      "Share": 33,
                                      "Rate": 43,
                                      "color": "#bbbbb9"
                                      
                                    },
                                    {
                                      "category":"ORCHESTRA",
                                      "Share": 70,
                                      "Rate": 19,
                                      "color": "#febf95"
                                    
                                    },
                                    {
                                      "category":"OKAIDI",
                                      "Share": 25,
                                      "Rate": 33,
                                      "color": "#4da79c"
                                      
                                    },
                                    {
                                      "category":"KIABI",
                                      "Share": 23,
                                      "Rate": 24,
                                      "color": "#152f6e"
                                      
                                    }
                                                                   
                                ]
                              },
                              {
                                "name":"PANTS",
                                "value":[
                                    {
                                      "category":"DPAM",
                                      "Share": 40,
                                      "Rate": 19,
                                      "color": "#99c0ed"
                                      
                                    },
                                    {
                                      "category":"LAHALLE",
                                      "Share": 33,
                                      "Rate": 25,
                                      "color": "#bbbbb9"
                                      
                                    },
                                    {
                                      "category":"ORCHESTRA",
                                      "Share": 31,
                                      "Rate": 30,
                                      "color": "#febf95"
                                      
                                    },
                                    {
                                      "category":"OKAIDI",
                                      "Share": 62,
                                      "Rate": 22,
                                      "color": "#4da79c"
                                      
                                    },
                                    {
                                      "category":"KIABI",
                                      "Share": 23,
                                      "Rate": 19,
                                      "color": "#152f6e"
                                      
                                    }
                                    
                                ]
                              },
                              {
                                "name":"DRESSES",
                                "value":[
                                    {
                                      "category":"DPAM",
                                      "Share": 45,
                                      "Rate": 16,
                                      "color": "#99c0ed"
                                      
                                    },
                                    {
                                      "category":"LAHALLE",
                                      "Share": 33,
                                      "Rate": 22,
                                      "color": "#bbbbb9"
                                      
                                    },
                                    {
                                      "category":"ORCHESTRA",
                                      "Share": 50,
                                      "Rate": 15,
                                      "color": "#febf95"
                                      
                                    },
                                    {
                                      "category":"OKAIDI",
                                      "Share": 27,
                                      "Rate": 25,
                                      "color": "#4da79c"
                                      
                                    },
                                    {
                                      "category":"KIABI",
                                      "Share": 80,
                                      "Rate": 50,
                                      "color": "#152f6e"
                                      
                                    }
                                ]
                              },
                              {
                                "name":"TOPS",
                                "value":[
                                    {
                                      "category":"DPAM",
                                      "Share": 25,
                                      "Rate": 21,
                                      "color": "#99c0ed"
                                      
                                    },
                                    {
                                      "category":"LAHALLE",
                                      "Share": 33,
                                      "Rate": 18,
                                      "color": "#bbbbb9"
                                      
                                    },
                                    {
                                      "category":"ORCHESTRA",
                                      "Share": 14,
                                      "Rate": 42,
                                      "color": "#febf95"
                                      
                                    },
                                    {
                                      "category":"OKAIDI",
                                      "Share": 25,
                                      "Rate": 36,
                                      "color": "#4da79c"
                                      
                                    },
                                    {
                                      "category":"KIABI",
                                      "Share": 66,
                                      "Rate": 2,
                                      "color": "#152f6e"
                                      
                                    }
                                ]
                              },
                              {
                                "name":"BLAZERS",
                                "value":[
                                    {
                                      "category":"DPAM",
                                      "Share": 16,
                                      "Rate": 21,
                                      "color": "#99c0ed"
                                      
                                    },
                                    {
                                      "category":"LAHALLE",
                                      "Share": 33,
                                      "Rate": 22,
                                      "color": "#bbbbb9"
                                      
                                    },
                                    {
                                      "category":"ORCHESTRA",
                                      "Share": 31,
                                      "Rate": 16,
                                      "color": "#febf95"
                                      
                                    },
                                    {
                                      "category":"OKAIDI",
                                      "Share": 20,
                                      "Rate": 8,
                                      "color": "#4da79c"
                                      
                                    },
                                    {
                                      "category":"KIABI",
                                      "Share": 23,
                                      "Rate": 44,
                                      "color": "#152f6e"
                                      
                                    }
                                ]
                              },
                              {
                                "name":"SHIRTS",
                                "value":[
                                    {
                                      "category":"DPAM",
                                      "Share": 16,
                                      "Rate": 21,
                                      "color": "#99c0ed"
                                      
                                    },
                                    {
                                      "category":"LAHALLE",
                                      "Share": 33,
                                      "Rate": 22,
                                      "color": "#bbbbb9"
                                      
                                    },
                                    {
                                      "category":"ORCHESTRA",
                                      "Share": 31,
                                      "Rate": 16,
                                      "color": "#febf95"
                                      
                                    },
                                    {
                                      "category":"OKAIDI",
                                      "Share": 20,
                                      "Rate": 8,
                                      "color": "#4da79c"
                                      
                                    },
                                    {
                                      "category":"KIABI",
                                      "Share": 23,
                                      "Rate": 44,
                                      "color": "#152f6e"
                                      
                                    }
                                ]
                              }
                            ]
    }]);
