'use strict';

// signup controller
app.controller('SignupFormController', ['$scope', '$http', '$state','userSignupSvc', function($scope, $http, $state,userSignupSvc) {
    $scope.user = {};
    $scope.authError = null;
    $scope.signup = function() {
    $scope.authError = null;
      // Try to create
      $http.post(window.apiUrl + 'users/access/signup', {name: $scope.user.name, email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if ( !response.data.user ) {
            localStorage.setItem('token', response.data.token);
            $state.go('app.dashboard-v1');
        }else{
            $scope.authError = 'User exist pleas try again';
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
 ;