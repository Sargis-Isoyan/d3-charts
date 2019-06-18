'use strict';

/**
 * 0.1.1
 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
 *
 * @ flatfull.com All Rights Reserved.
 * Author url: http://themeforest.net/user/flatfull
 */

angular.module('app')
    .factory('userLogoutSvc',['$http', function ($http) {
        return {
            userLogout: function (data) {
                return $http({
                    method: 'GET',
                    url: window.apiUrl + "users/access/logout",
                    data:data,
                    headers: {
                        "content-type": "application/json",
                    }
                });
            }
        }
    }]);