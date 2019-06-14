/* eslint-disable object-shorthand */
angular.module('movieTicketing')
  .controller('NavBarController', ['$cookies', '$scope', 'navBarService', '$state',
    function NavBarController($cookies, $scope, navBarService, $state) {
      function logout() {
        navBarService.logout().then(() => {
          if ($cookies.get('token')) {
            $cookies.remove('token');
          }
          $state.go('navBar.login');
        });
      }
      angular.extend($scope, {
        logout: logout,
      });
    }]);
