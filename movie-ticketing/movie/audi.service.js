/* eslint-disable object-shorthand */
angular.module('movieTicketing.movie')
  .service('audiService', ['Restangular', 'constant',
    function audiService(Restangular, constant) {
      function createAudi(audiOject, uid) {
        return Restangular.all(constant.URL.AUDI.replace(':id', uid)).post(audiOject);
      }
      function removeAudi(theatreId, audiId) {
        return Restangular.one(constant.URL.AUDI_DETAIL.replace(':theatreId', theatreId).replace(':audiId', audiId)).remove();
      }
      function editAudi(theatreId, audiId, audiOject) {
        return Restangular.one(constant.URL.AUDI_DETAIL.replace(':theatreId', theatreId).replace(':audiId', audiId)).patch(audiOject);
      }
      angular.extend(this, {
        createAudi: createAudi,
        removeAudi: removeAudi,
        editAudi: editAudi,
      });
    }]);
