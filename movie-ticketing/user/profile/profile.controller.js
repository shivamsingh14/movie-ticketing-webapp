/* eslint-disable object-shorthand */
angular.module('movieTicketing.user')
  .controller('ProfileController', ['userService', '$scope', 'movieService', 'toast', '$state',
    function ProfileController(userService, $scope, movieService, toast, $state) {
      $scope.loading = true;
      $scope.disable = true;
      $scope.updateButton = false;
      $scope.userUpdateObject = {
        name: '',
        gender: '',
      };
      $scope.passwordObject = {
        password: '',
        new_password: '',
      };
      userService.getUser().then((response) => {
        $scope.loading = false;
        $scope.userDetails = response.plain();
        $scope.userUpdateObject = $scope.userDetails;
      }, () => {
        $scope.loading = false;
      });
      function changePassword() {
        if ($scope.passwordChangeForm.$invalid) {
          $scope.requiredErrorMessage = true;
        } else {
          userService.changePassword($scope.passwordObject).then(() => {
            $('.modal').modal('toggle');
            toast({
              duration: 2000,
              message: 'Password Changed',
              className: 'alert-success',
            });
          }, () => {
          });
        }
      }
      function editForm() {
        $scope.disable = false;
        $scope.updateButton = true;
      }
      function updateForm() {
        $scope.loading = true;
        userService.updateUserDetails($scope.userUpdateObject).then((response) => {
          $scope.loading = false;
          $scope.userDetails = response.plain();
          toast({
            duration: 2000,
            message: 'Profile Updated',
            className: 'alert-success',
          });
          $state.reload();
        });
      }
      angular.extend($scope, {
        changePassword: changePassword,
        editForm: editForm,
        updateForm: updateForm,
      });
    }]);
