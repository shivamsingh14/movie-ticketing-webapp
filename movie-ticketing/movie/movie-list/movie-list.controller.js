/* eslint-disable object-shorthand */
angular.module('movieTicketing.movie')
  .controller('MovieListController', ['$scope', 'movieService', '$state',
    function MovieListController($scope, movieService, $state) {
      $scope.loading = true;
      movieService.movieList().then((response) => {
        $scope.movies = response.plain();
        $scope.loading = false;
      });
      function movieDetails(id) {
        $state.go('homeNavBar.createMovie', { id: id });
      }
      function bookTicket(id) {
        $state.go('homeNavBar.bookTicket', { movieId: id });
      }
      function createMovie() {
        $state.go('homeNavBar.createMovie');
      }
      angular.extend($scope, {
        createMovie: createMovie,
        movieDetails: movieDetails,
        bookTicket: bookTicket,
      });
    }]);
