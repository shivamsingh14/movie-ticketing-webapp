/* eslint-disable object-shorthand */
angular.module('movieTicketing.movie')
  .service('movieService', ['Restangular', 'constant',
    function movieService(Restangular, constant) {
      function movieList() {
        return Restangular.one(constant.URL.MOVIE_LIST).get();
      }
      function createMovie(movieObject) {
        return Restangular.all(constant.URL.MOVIE_LIST).post(movieObject);
      }
      function movieDetails(uid) {
        return Restangular.one(constant.URL.MOVIE_DETAIL.replace(':id', uid)).get();
      }
      function freeSlots(dates) {
        return Restangular.one(constant.URL.FREE_SLOTS).get(dates);
      }
      function slotBooking(createSlot) {
        return Restangular.all(constant.URL.SLOT_BOOKING).post(createSlot);
      }
      function bookSlot(bookRequestObject, movieId) {
        return Restangular.all(constant.URL.BOOK_SLOT.replace(':id', movieId)).post(bookRequestObject);
      }
      function updateMovieDetails(movieId, movieObject) {
        return Restangular.one(constant.URL.UPDATE_MOVIE.replace(':id', movieId)).patch(movieObject);
      }
      function cancelBooking(slotId) {
        return Restangular.one(constant.URL.DELETE_SLOT.replace(':id', slotId)).remove();
      }
      angular.extend(this, {
        movieList: movieList,
        createMovie: createMovie,
        movieDetails: movieDetails,
        freeSlots: freeSlots,
        slotBooking: slotBooking,
        bookSlot: bookSlot,
        updateMovieDetails: updateMovieDetails,
        cancelBooking: cancelBooking,
      });
    }]);
