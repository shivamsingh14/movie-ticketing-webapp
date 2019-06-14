/* eslint-disable no-else-return */
/* eslint-disable no-useless-return */
/* eslint-disable object-shorthand */
angular.module('movieTicketing.movie')
  .controller('CreateAudiController', ['$scope', '$state', 'audiService', '$stateParams', '$rootScope', 'toast', 'theatreService', 'constant',
    function CreateAudiController($scope, $state, audiService, $stateParams, $rootScope, toast, theatreService, constant) {
      $scope.reset = {};
      $scope.audiOject = {
        name: '',
        seats: '',
        opening_time: 9,
        closing_time: 21,
      };
      function createAudi() {
        if ($scope.audiModal.$invalid) {
          console.log('novalidate fired');
        } else {
          $scope.loading = true;
          $scope.audiOject.theatre = $stateParams.id;
          audiService.createAudi($scope.audiOject, $stateParams.id).then(() => {
            $scope.loading = false;
            toast({
              duration: constant.TOAST_DISPLAY_TIME,
              message: 'Auditorium Added Successfully',
              className: 'alert-success',
            });
            $('.modal').modal('toggle');
            // $state.reload();
            theatreService.theatreDetail($stateParams.id).then((response) => {
              $scope.loading = false;
              $scope.theatreDetail = response.plain();
              $scope.theatreOject = $scope.theatreDetail;
              $scope.audiList = $scope.theatreDetail.auditoriums;
            });
            // $state.go('homeNavBar.createTheatre');
          }, (response) => {
            if (!response.data.non_field_errors) {
              // $scope.registrationForm.email.$error = response.data.email;
            } else {
              $scope.non_field_errors = '';
              for (let i = 0; i < response.data.non_field_errors.length; i++) {
                $scope.non_field_errors += response.data.non_field_errors[i];
              }
            }
          });
        }
      }
      function editAudi() {
        if (!$scope.audiModal.$invalid) {
          $scope.loading = true;
          audiService.editAudi($stateParams.id, $rootScope.audiId, $scope.audiOject).then(() => {
            $scope.loading = false;
            toast({
              duration: constant.TOAST_DISPLAY_TIME,
              message: 'Details Updated Successfully',
              className: 'alert-success',
            });
            $('.modal').modal('toggle');
            // $state.reload();
            theatreService.theatreDetail($stateParams.id).then((response) => {
              $scope.loading = false;
              $scope.theatreDetail = response.plain();
              $scope.theatreOject = $scope.theatreDetail;
              $scope.audiList = $scope.theatreDetail.auditoriums;
            });
          }, (response) => {
            if (response.data.non_field_errors) {
              $scope.non_field_errors = '';
              for (let i = 0; i < response.data.non_field_errors.length; i++) {
                $scope.non_field_errors += response.data.non_field_errors[i];
              }
            }
          });
        }
      }
      function removeAudi() {
        $scope.loading = true;
        audiService.removeAudi($stateParams.id, $rootScope.removeAudiId).then(() => {
          $scope.loading = false;
          toast({
            duration: constant.TOAST_DISPLAY_TIME,
            message: 'Auditorium Deleted',
            className: 'alert-success',
          });
          $state.reload();
        });
      }
      function closeModal() {
        $scope.audiOject = angular.copy($scope.reset);
        $scope.non_field_errors = '';
        $scope.audiModal.$setPristine();
        $scope.audiModal.$setUntouched();
      }
      angular.extend($scope, {
        removeAudi: removeAudi,
        createAudi: createAudi,
        editAudi: editAudi,
        closeModal: closeModal,
      });
    }])
  .directive('createAudiDirective', [function createAudiDirective() {
    return {
      template: require('./create-audi.template.html'),
    };
  }]);
