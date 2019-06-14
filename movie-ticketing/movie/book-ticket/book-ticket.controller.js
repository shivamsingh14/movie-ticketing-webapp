/* eslint-disable object-shorthand */
angular.module('movieTicketing.movie')
  .controller('BookTicketController', ['$scope', 'movieService', '$stateParams', '$state',
    function BookTicketController($scope, movieService, $stateParams, $state) {
      $scope.loading = true;
      $scope.bookTicketObject = {
        slot: '',
        seats_booked: '',
      };
      movieService.movieDetails($stateParams.movieId).then((response) => {
        $scope.loading = false;
        $scope.movieDetails = response.plain();
        $scope.slots = $scope.movieDetails.slots;
      }, () => {
        $scope.loading = false;
      });
      function bookSlot(id) {
        $scope.loading = true;
        $scope.bookTicketObject.slot = id;
        movieService.bookSlot($scope.bookTicketObject, $stateParams.movieId).then(() => {
          $scope.loading = false;
          $state.go('homeNavBar.bookings');
        }, (response) => {
          if (response.data.non_field_errors) {
            $scope.non_field_errors = '';
            for (let i = 0; i < response.data.non_field_errors.length; i++) {
              $scope.non_field_errors += response.data.non_field_errors[i];
            }
          }
          $scope.loading = false;
        });
      }
      angular.extend($scope, {
        bookSlot: bookSlot,
      });
    }]);
