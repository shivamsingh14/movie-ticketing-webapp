/* eslint-disable object-shorthand */
angular.module('movieTicketing.user')
  .controller('LoginController', ['$scope', 'userService', '$cookies', '$state', 'toast',
    function LoginController($scope, userService, $cookies, $state, toast) {
      $scope.userLoginOject = {
        username: '',
        password: '',
      };

      $scope.processing = false;
      $scope.loginButton = 'Login';
      function login() {
        if ($scope.loginForm.$invalid) {
          $scope.requiredErrorMessage = true;
        } else {
          $scope.processing = true;
          $scope.loginButton = 'Logging in...';
          userService.login($scope.userLoginOject).then((response) => {
            toast({
              duration: 1000,
              message: 'Successfully logged in',
              className: 'alert-success',
            });
            $scope.processing = false;
            $scope.loginButton = 'Login';
            $cookies.put('token', response.token);
            $state.go('homeNavBar.movieList');
          }, (response) => {
            $scope.non_field_errors = '';
            for (let i = 0; i < response.data.non_field_errors.length; i++) {
              $scope.non_field_errors += response.data.non_field_errors[i];
            }
            $scope.invalidCredentiails = true;
            $scope.processing = false;
            $scope.loginButton = 'Login';
          });
        }
      }
      angular.extend($scope, {
        login: login,
      });
    }]);
