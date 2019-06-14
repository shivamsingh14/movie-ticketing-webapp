/* eslint-disable object-shorthand */
angular.module('movieTicketing.user')
  .service('userService', ['Restangular', 'constant',
    function userService(Restangular, constant) {
      function login(userLoginOject) {
        return Restangular.all(constant.URL.USER_LOGIN).post(userLoginOject);
      }
      function register(userSignUpOject) {
        return Restangular.all(constant.URL.USERS).post(userSignUpOject);
      }
      function getUser() {
        return Restangular.one(constant.URL.USERS).get();
      }
      function changePassword(passwordObject) {
        return Restangular.one(constant.URL.CHANGE_PASSWORD).patch(passwordObject);
      }
      function updateUserDetails(userUpdateObject) {
        return Restangular.one(constant.URL.UPDATE_DETAIL).patch(userUpdateObject);
      }
      function bookings() {
        return Restangular.one(constant.URL.MY_BOOKINGS).get();
      }
      angular.extend(this, {
        login: login,
        register: register,
        getUser: getUser,
        changePassword: changePassword,
        updateUserDetails: updateUserDetails,
        bookings: bookings,
      });
    }]);
