'use strict';

/**
 * 0.1.1
 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
 *
 * @ flatfull.com All Rights Reserved.
 * Author url: http://themeforest.net/user/flatfull
 */

angular.module('app')
    .factory('brandChartsSvc',['$http', function ($http) {
        return {
            getAllBrandsElements: function () {
                return $http({
                    method: 'GET',
                    url: apiUrl + "items/",
                    headers: {
                        "content-type": "application/json",
                    }
                });
            }
        }
    }]);