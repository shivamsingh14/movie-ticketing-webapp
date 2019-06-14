/* eslint-disable object-shorthand */
angular.module('movieTicketing.movie')
  .controller('AddMovieController', ['$scope', 'movieService', '$filter', '$stateParams', '$state', 'constant',
    function AddMovieController($scope, movieService, $filter, $stateParams, $state, constant) {
      movieService.movieDetails($stateParams.movieId).then((response) => {
        $scope.languages = response.language;
        $scope.types = response.movie_type;
      });
      $scope.todayDate = new Date();
      $scope.datesChoosen = false;
      $scope.audiSlots = {};
      $scope.theatresList = [];
      $scope.selectedName = '';
      $scope.dates = {
        start_date: new Date(),
        end_date: new Date(),
      };

      $scope.language = constant.DEFAULT_LANGUAGE;
      $scope.type = constant.DEFAULT_TYPE;
      $scope.selection = [];
      function selectSlot(audiId, time) {
        if ($scope.audiSlots[audiId]) {
          const index = $scope.audiSlots[audiId].indexOf(time);
          if (index > -1) {
            $scope.audiSlots[audiId].splice(index, 1);
          } else {
            $scope.audiSlots[audiId].push(time);
          }
        } else {
          $scope.audiSlots[audiId] = [time];
        }
      }
      function slotsBooking() {
        $scope.payLoad = {
          audiSlots: $scope.audiSlots,
          movie: $stateParams.movieId,
          opening_date: $scope.dates.start_date,
          closing_date: $scope.dates.end_date,
          movie_language: $scope.language,
          movie_type: $scope.type,
        };
        movieService.slotBooking($scope.payLoad).then(() => {
          $state.go('homeNavBar.createMovie', { id: $stateParams.movieId });
        });
      }
      function freeSlots() {
        $scope.datesChoosen = true;
        $scope.dates.start_date = $filter('date')($scope.dates.start_date, 'yyyy-MM-dd');
        $scope.dates.end_date = $filter('date')($scope.dates.end_date, 'yyyy-MM-dd');
        movieService.freeSlots($scope.dates).then((response) => {
          $scope.submitButton = true;
          $scope.slots = response.plain();
        }, (response) => {
          if (response.data.non_field_errors) {
            $scope.non_field_errors = '';
            for (let i = 0; i < response.data.non_field_errors.length; i++) {
              $scope.non_field_errors += response.data.non_field_errors[i];
            }
          }
        });
      }
      function changeDates() {
        $scope.datesChoosen = false;
        $scope.submitButton = false;
        $scope.non_field_errors = '';
      }
      angular.extend($scope, {
        freeSlots: freeSlots,
        slotsBooking: slotsBooking,
        selectSlot: selectSlot,
        changeDates: changeDates,
      });
    }]);
