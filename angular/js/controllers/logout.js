'use strict';

/* Controllers */
// signin controller
app.controller('logoutController', ['$scope', '$http', '$state','userLogoutSvc', function($scope, $http, $state,userLogoutSvc) {
    $scope.user = {};
    $scope.authError = null;
    $scope.logout = function() {
        $scope.authError = null;
        // Try to login


        userLogoutSvc.userLogout({username: $scope.user.email, password: $scope.user.password})
            .then(function(response) {
                localStorage.removeItem('token');
                    $state.go('access.signin');

            });


    };
}]);