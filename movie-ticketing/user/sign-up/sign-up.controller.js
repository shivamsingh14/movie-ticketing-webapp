/* eslint-disable object-shorthand */
angular.module('movieTicketing.user')
  .controller('SignUpController', ['$scope', 'userService', '$cookies', '$state',
    function SignUpController($scope, userService, $cookies, $state) {
      $scope.userSignUpOject = {
        name: '',
        email: '',
        gender: '',
        password: '',
      };
      $scope.processing = false;
      $scope.registerButton = 'Register';
      function register() {
        if (!$scope.registrationForm.$invalid) {
          $scope.processing = true;
          $scope.registerButton = 'Signing Up...';
          userService.register($scope.userSignUpOject).then((response) => {
            $scope.processing = false;
            $scope.registerButton = 'Register';
            // $cookies.put('token', response.token);
            // $state.go('homeNavBar.movieList');
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
            console.log(response);
            console.log(response.token);
            $cookies.put('token', response.token);
            $state.go('homeNavBar.movieList');
          }, (response) => {
            if (!response.data.non_field_errors) {
              $scope.registrationForm.email.$error = response.data.email;
            } else {
              $scope.non_field_errors = '';
              for (let i = 0; i < response.data.non_field_errors.length; i++) {
                $scope.non_field_errors += response.data.non_field_errors[i];
              }
            }
            $scope.processing = false;
            $scope.registerButton = 'Register';
          });
        }
      }
      module.exports = { SignUpController };
      angular.extend($scope, {
        register: register,
      });
    }]);
