'use strict';

/* Controllers */

app
// Flot Chart controller
    .controller('brandChartCtrl', ['$rootScope', '$scope', 'brandChartsSvc', '$timeout', function ($rootScope, $scope, brandChartsSvc, $timeout) {

        $scope.dataProduct = [
            {"value": 0},
            {"value": 0},
            {"value": 0},
            {"value": 0},
            {"value": 0}
        ];

        window.onMouseOverOnRectParent = function (elem, shopName) {
            if (shopName) {
                $scope.getDatesOfAnaliseGraph($($(elem)[0]).find('title').text(), shopName);
            }
        };

        window.svgTransition = {};

        $scope.dataDpam = false;
        $scope.dataLahalle = false;
        $scope.dataOrchestra = false;
        $scope.dataOkaidi = false;
        $scope.dataKiabi = false;

        $scope.shopImages = [];

        $scope.getShopData = function (shopName) {
            var shopData = $scope.sourceData.filter(function (obj) {
                return obj.network == shopName;
            });

            if (shopData.length !== 0) {
                var sourceObj = {
                    "name": shopData[0].network,
                    "shopName": shopData[0].network,
                    "children": []
                };

                var categoryDpam = _.uniqBy(shopData, 'category');

                for (var i = 0; i < categoryDpam.length; i++) {
                    sourceObj.children.push({
                        "name": categoryDpam[i].category,
                        "colorCategory": categoryDpam[i].categorycolor,
                        "shopName": categoryDpam[i].network,
                        "children": []
                    });
                }

                var subCategoryes = _.uniqBy(shopData, 'sub_category');

                for (var k = 0; k < categoryDpam.length; k++) {
                    for (var j = 0; j < subCategoryes.length; j++) {
                        if (subCategoryes[j].category == categoryDpam[k].category) {
                            sourceObj.children[k].children.push({
                                "name": subCategoryes[j].sub_category,
                                "colorSubCategory": subCategoryes[j].sub_category_color,
                                "value": shopData.filter(function (obj) {
                                    return obj.sub_category == subCategoryes[j].sub_category
                                }).length
                            });
                        }
                    }
                }
            }
            else {
                return false;
            }

            return sourceObj;
        };

        // Getting all data elements from db
        $scope.getAllBrands = function () {
            brandChartsSvc.getAllBrandsElements()
                .success(function (res) {
                    $scope.itemsSource = res;
                    $scope.sourceData = res;

                    setTimeout(function(){//first data for left area chart and images
                        $scope.getDatesOfAnaliseGraph(res[0].category,res[0].network);
                    },700);

                    //runing the function to up the left side chart and images
                    $scope.filterDates = _.uniqBy($scope.itemsSource, 'date');
                    $scope.filterMarket = _.uniqBy($scope.itemsSource, 'market');
                    $scope.filterDestinataire = _.uniqBy($scope.itemsSource, 'destinataire');
                    $scope.filterCategory = _.uniqBy($scope.itemsSource, 'category');

                    $scope.dataDpam = $scope.getShopData('Dpam');
                    $scope.dataLahalle = $scope.getShopData('Lahalle');
                    $scope.dataOrchestra = $scope.getShopData('Orchestra');
                    $scope.dataOkaidi = $scope.getShopData('Okaidi');
                    $scope.dataKiabi = $scope.getShopData('Kiabi');
                });
        };
        $scope.getAllBrands();

        $(document).ready(function () {
            setTimeout(function () {
                window.initTriggers = function () {
                    $(document).on('click', '.grandparent', function () {
                        var title = $(this).find('text').text();
                        var shopName = title.split(' ')[0];
                        window.triggerSvgShops(shopName, 0, '');
                    });

                    $('g.children').on('mouseover', function () {


                    });
                };
                window.initTriggers();
            }, 500);

        });

        $scope.selectedFilters = [];

        $scope.resetFilters = function () {
            $scope.selectedFilters = [];
            $scope.sourceData = $scope.itemsSource;
            $scope.dataFilters();
        };

        $scope.addFilter = function (value, type) {
            var current = $scope.selectedFilters.filter(function (obj) {
                return obj.type == type;
            });
            if (current.length) {
                for (var i = 0; i < $scope.selectedFilters.length; i++) {
                    if ($scope.selectedFilters[i].type == type) {
                        $scope.selectedFilters[i] = {type: type, value: value};
                    }
                }
            } else {
                $scope.selectedFilters.push({
                    type: type,
                    value: value
                });
            }

            $scope.dataFilters();
        };

        $scope.dataFilters = function () {
            $scope.dataDpam = false;
            $scope.dataLahalle = false;
            $scope.dataOrchestra = false;
            $scope.dataOkaidi = false;
            $scope.dataKiabi = false;

            setTimeout(function () {

                $scope.sourceData = $scope.itemsSource;

                var type1 = $scope.selectedFilters.filter(function (obj) {
                    return obj.type == 1;
                });

                if (type1.length) {
                    $scope.sourceData = $scope.sourceData.filter(function (obj) {
                        return obj.date == type1[0].value;
                    });
                }

                var type2 = $scope.selectedFilters.filter(function (obj) {
                    return obj.type == 2;
                });

                if (type2.length) {
                    $scope.sourceData = $scope.sourceData.filter(function (obj) {
                        return obj.market == type2[0].value;
                    });
                }

                var type3 = $scope.selectedFilters.filter(function (obj) {
                    return obj.type == 3;
                });

                if (type3.length) {
                    $scope.sourceData = $scope.sourceData.filter(function (obj) {
                        return obj.destinataire == type3[0].value;
                    });
                }

                var type4 = $scope.selectedFilters.filter(function (obj) {
                    return obj.type == 4;
                });
                if (type4.length) {
                    $scope.sourceData = $scope.sourceData.filter(function (obj) {
                        return obj.category == type4[0].value;
                    });
                }

                $scope.dataDpam = $scope.getShopData('Dpam');
                $scope.dataLahalle = $scope.getShopData('Lahalle');
                $scope.dataOrchestra = $scope.getShopData('Orchestra');
                $scope.dataOkaidi = $scope.getShopData('Okaidi');
                $scope.dataKiabi = $scope.getShopData('Kiabi');
                $rootScope.$broadcast('event::RENDER_D3');
                $scope.$apply();
            }, 1000);
        };

        $scope.countOfLoops = 0;

        $scope.getDatesOfAnaliseGraph = function (routName, shopName) {
            if ($scope.countOfLoops == 0) {
                $scope.shopImages = $scope.sourceData.filter(function (obj) {
                    return obj.network == shopName && obj.category == routName;
                });
            }

            $scope.countOfLoops++;
            $timeout(function () {
                $scope.countOfLoops = 0;
            }, 500);

            $scope.dipamPercent = $scope.sourceData.filter(function (obj) {
                return obj.network == "Dpam" && obj.category == routName;
            });

            $scope.lahallePercent = $scope.sourceData.filter(function (obj) {
                return obj.network == "Lahalle" && obj.category == routName;
            });

            $scope.orchestraPercent = $scope.sourceData.filter(function (obj) {
                return obj.network == "Orchestra" && obj.category == routName;
            });

            $scope.okaidiPercent = $scope.sourceData.filter(function (obj) {
                return obj.network == "Okaidi" && obj.category == routName;
            });

            $scope.kiabiPercent = $scope.sourceData.filter(function (obj) {
                return obj.network == "Kiabi" && obj.category == routName;
            });

            $scope.dataProduct = [
                {"value": Math.round($scope.dipamPercent.length / $scope.dataDpam.value * 100)},
                {"value": Math.round($scope.lahallePercent.length / $scope.dataLahalle.value * 100)},
                {"value": Math.round($scope.orchestraPercent.length / $scope.dataOrchestra.value * 100)},
                {"value": Math.round($scope.okaidiPercent.length / $scope.dataOkaidi.value * 100)},
                {"value": Math.round($scope.kiabiPercent.length / $scope.dataKiabi.value * 100)}
            ];
            window.appendItems($scope.dataProduct);
        };

        window.triggerSvgShops = function (shopName, type, routName) {
            if (!type) {
                $scope.shopImages = [];
                $scope.$apply();

                window.svgTransition['Dpam'].f($scope.dataDpam);

                window.svgTransition['Lahalle'].f($scope.dataLahalle);

                window.svgTransition['Orchestra'].f($scope.dataOrchestra);

                window.svgTransition['Okaidi'].f($scope.dataOkaidi);

                window.svgTransition['Kiabi'].f($scope.dataKiabi);

            } else {
                //$scope.getDatesOfAnaliseGraph(routName, shopName);
                if ($scope.dataDpam) {
                    var rootData = $scope.dataDpam.children.filter(function (obj) {
                        return obj.name == routName;
                    });
                    window.svgTransition['Dpam'].f(rootData[0]);
                }
                if ($scope.dataLahalle) {
                    var rootData = $scope.dataLahalle.children.filter(function (obj) {
                        return obj.name == routName;
                    });
                    window.svgTransition['Lahalle'].f(rootData[0]);
                }
                if ($scope.dataOrchestra) {
                    var rootData = $scope.dataOrchestra.children.filter(function (obj) {
                        return obj.name == routName;
                    });
                    window.svgTransition['Orchestra'].f(rootData[0]);
                }
                if ($scope.dataOkaidi) {
                    var rootData = $scope.dataOkaidi.children.filter(function (obj) {
                        return obj.name == routName;
                    });
                    window.svgTransition['Okaidi'].f(rootData[0]);
                }
                if ($scope.dataKiabi) {
                    var rootData = $scope.dataKiabi.children.filter(function (obj) {
                        return obj.name == routName;
                    });
                    window.svgTransition['Kiabi'].f(rootData[0]);
                }
            }
        };
    }]);
