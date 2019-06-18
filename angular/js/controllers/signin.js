'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state','userSigninSvc', function($scope, $http, $state,userSigninSvc) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login


      userSigninSvc.userSignIn({username: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if ( response.data.user ) {
          $scope.authError = 'Email or Password not right';
        }else{
            localStorage.setItem('token', response.data.token);
          $state.go('app.dashboard-v1');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });

     
    };
  }]);