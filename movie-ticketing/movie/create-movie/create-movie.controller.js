/* eslint-disable object-shorthand */
angular.module('movieTicketing.movie')
  .controller('CreateMovieController', ['$scope', 'movieService', '$state', '$stateParams', 'constant',
    function CreateMovieController($scope, movieService, $state, $stateParams, constant) {
      $scope.addMovieButton = false;
      $scope.createMovieButton = true;
      $scope.movieObject = {
        name: '',
        duration: '',
        about: '',
        language: '',
        movie_type: '',
      };
      $scope.languages = constant.MOVIE_LANGUAGES;
      $scope.movieTypes = constant.MOVIE_TYPES;
      $scope.selectedLanguage = [];
      $scope.selectedType = [];
      $scope.disable = false;
      $scope.addMovieButton = false;
      $scope.createMovieButton = true;
      if ($stateParams.id) {
        movieService.movieDetails($stateParams.id).then((response) => {
          $scope.movieDetails = response.plain();
          $scope.movieObject = $scope.movieDetails;
          $scope.shows = response.slots;
          if ((response.slots.length) > 0) {
            $scope.slotHead = true;
          }
          $scope.heading = true;
          $scope.addMovieButton = true;
          $scope.createMovieButton = false;
          $scope.disable = true;
          $scope.editButton = true;
        });
      }
      function createMovie() {
        if (!$scope.movieForm.$invalid) {
          $scope.loading = true;
          $scope.movieObject.language = $scope.selectedLanguage;
          $scope.movieObject.movie_type = $scope.selectedType;
          movieService.createMovie($scope.movieObject).then((response) => {
            $scope.loading = false;
            $state.go('homeNavBar.createMovie', { id: response.id });
          });
        }
      }
      function selectLanguage(language) {
        const idx = $scope.selectedLanguage.indexOf(language);
        if (idx > -1) {
          $scope.selectedLanguage.splice(idx, 1);
        } else {
          $scope.selectedLanguage.push(language);
        }
      }
      function selectType(type) {
        const idx = $scope.selectedType.indexOf(type);
        if (idx > -1) {
          $scope.selectedType.splice(idx, 1);
        } else {
          $scope.selectedType.push(type);
        }
      }
      function editPage() {
        $scope.disable = false;
        $scope.createMovieButton = false;
        $scope.addMovieButton = false;
        $scope.updateButton = true;
      }
      function updateMovieDetails() {
        $scope.loading = true;
        $scope.updateButton = true;
        movieService.updateMovieDetails($stateParams.id, $scope.movieObject).then((response) => {
          $scope.loading = false;
          $scope.movieDetails = response.plain();
          $state.reload();
        });
      }
      function addMovie() {
        $state.go('homeNavBar.addMovie', { movieId: $stateParams.id });
      }
      function cancelBooking(id) {
        movieService.cancelBooking(id).then(() => {
          $state.reload();
        });
      }
      angular.extend($scope, {
        addMovie: addMovie,
        selectLanguage: selectLanguage,
        selectType: selectType,
        createMovie: createMovie,
        editPage: editPage,
        updateMovieDetails: updateMovieDetails,
        cancelBooking: cancelBooking,
      });
    }]);
