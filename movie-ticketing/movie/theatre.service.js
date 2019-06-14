/* eslint-disable object-shorthand */
angular.module('movieTicketing.movie')
  .service('theatreService', ['Restangular', 'constant',
    function theatreService(Restangular, constant) {
      function createTheatre(theatreOject) {
        return Restangular.all(constant.URL.THEATRE).post(theatreOject);
      }
      function theatreList() {
        return Restangular.one(constant.URL.THEATRE).get();
      }
      function theatreDetail(uid) {
        return Restangular.one(constant.URL.THEATRE_DETAIL.replace(':id', uid)).get();
      }
      function updateTheatre(theatreOject, uid) {
        return Restangular.one(constant.URL.THEATRE_DETAIL.replace(':id', uid)).patch(theatreOject);
      }
      angular.extend(this, {
        createTheatre: createTheatre,
        theatreList: theatreList,
        theatreDetail: theatreDetail,
        updateTheatre: updateTheatre,
      });
    }]);
