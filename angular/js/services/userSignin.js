'use strict';

/**
 * 0.1.1
 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
 *
 * @ flatfull.com All Rights Reserved.
 * Author url: http://themeforest.net/user/flatfull
 */

angular.module('app')
    .factory('userSigninSvc',['$http', function ($http) {
        return {
            userSignIn: function (data) {
                return $http({
                    method: 'POST',
                    url: window.apiUrl + "users/access/signin",
                    data:data,
                    crossDomain: true,
                    headers: {
                        "content-type": "application/json",
                        "authorization": "Basic Og=="
                    }
                });
            },
            checkUser:function(){
                return $http({
                    method: 'GET',
                    crossDomain: true,
                    url: window.apiUrl + "users/checkUser",
                    headers: {
                        "content-type": "application/json",
                        "authorization": "Basic Og=="
                    }
                });
            }
        }
    }]);