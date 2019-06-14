angular.module('movieTicketing.movie')
  .controller('BookingsController', ['$scope', 'userService',
    function BookingsController($scope, userService) {
      $scope.loading = true;
      userService.bookings().then((response) => {
        $scope.loading = false;
        $scope.bookings = response.plain();
      }, () => {
        $scope.loading = false;
      });
    }]);
