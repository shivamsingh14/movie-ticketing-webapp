/* eslint-disable no-param-reassign */
/* eslint-disable object-shorthand */
angular.module('movieTicketing.movie')
  .controller('CreateTheatreController', ['$scope', '$state', 'theatreService', '$stateParams', '$rootScope', 'toast',
    function CreateTheatreController($scope, $state, theatreService, $stateParams, $rootScope, toast) {
      $scope.theatreOject = {
        name: '',
        city: '',
        state: '',
        zipcode: '',
      };
      $scope.addAudi = false;
      $scope.createButton = true;
      if ($stateParams.id) {
        theatreService.theatreDetail($stateParams.id).then((response) => {
          $scope.loading = false;
          $scope.theatreDetail = response.plain();
          $scope.theatreOject = $scope.theatreDetail;
          $scope.audiList = $scope.theatreDetail.auditoriums;
        });
        $scope.heading = true;
        $scope.disable = true;
        $scope.addAudi = true;
        $scope.createButton = false;
        $scope.editButton = true;
      }
      function removeAudi(id) {
        $rootScope.removeAudiId = id;
        $rootScope.editAudiButton = false;
        $rootScope.addAudiButton = false;
        $rootScope.removeAudiButton = true;
      }
      function editAudi(id) {
        $rootScope.editAudiButton = true;
        $rootScope.addAudiButton = false;
        $rootScope.removeAudiButton = false;
        $rootScope.audiId = id;
      }
      function addAuditorium() {
        $rootScope.addAudiButton = true;
        $rootScope.editAudiButton = false;
        $rootScope.removeAudiButton = false;
      }
      function updateTheatre() {
        $scope.loading = true;
        $scope.edit = true;
        theatreService.updateTheatre($scope.theatreOject, $stateParams.id).then((response) => {
          toast({
            duration: 1000,
            message: 'Details Updated Successfully',
            className: 'alert-success',
          });
          $scope.theatreDetail = response.plain();
          $state.reload();
          $scope.loading = false;
        });
      }
      function editPage() {
        $scope.addAudi = false;
        $scope.disable = false;
        $scope.updateButton = true;
      }
      function createTheatre() {
        if (!$scope.theatreForm.$invalid) {
          $scope.loading = true;
          $rootScope.addAudiButton = true;
          $rootScope.editAudiButton = false;
          $rootScope.removeAudiButton = false;
          theatreService.createTheatre($scope.theatreOject).then((response) => {
            $scope.loading = false;
            $state.go('homeNavBar.createTheatre', { id: response.plain().id });
          }, () => {
            $scope.loading = false;
            $scope.createButton = true;
            $scope.addAudi = false;
          });
        }
      }
      angular.extend($scope, {
        updateTheatre: updateTheatre,
        editPage: editPage,
        createTheatre: createTheatre,
        removeAudi: removeAudi,
        editAudi: editAudi,
        addAuditorium: addAuditorium,
      });
    }]);
