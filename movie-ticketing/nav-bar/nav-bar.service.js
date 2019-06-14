angular.module('movieTicketing')
  .service('navBarService', ['Restangular', 'constant', '$cookies',
    function navBarService(Restangular, constant, $cookies) {
      this.logout = function logout() {
        const a = Restangular.one(constant.URL.USER_LOGOUT).remove();
        if ($cookies.get('token')) {
          $cookies.remove('token');
        }
        return a;
      };
    }]);
