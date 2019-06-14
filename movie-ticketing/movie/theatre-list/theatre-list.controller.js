/* eslint-disable object-shorthand */
angular.module('movieTicketing.movie')
  .controller('TheatreListController', ['theatreService', '$scope', '$state',
    function TheatreListController(theatreService, $scope, $state) {
      theatreService.theatreList().then((response) => {
        $scope.theatres = response.plain();
      });
      function editTheatre(id) {
        $state.go('homeNavBar.createTheatre', { id: id });
      }
      function createTheatre() {
        $state.go('homeNavBar.createTheatre');
      }
      angular.extend($scope, {
        createTheatre: createTheatre,
        editTheatre: editTheatre,
      });
    }]);
