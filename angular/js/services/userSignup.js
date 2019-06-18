'use strict';

/**
 * 0.1.1
 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
 *
 * @ flatfull.com All Rights Reserved.
 * Author url: http://themeforest.net/user/flatfull
 */

angular.module('app')
    .factory('userSignupSvc',['$http', function ($http) {
        return {
            userSignUp: function () {
                return $http({
                    method: 'POST',
                    url: window.apiUrl + "users/access/signup",
                    headers: {
                        "content-type": "application/json",
                    }
                });
            }
        }
    }]);