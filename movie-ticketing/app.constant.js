angular.module('movieTicketing')
  .constant('constant', {
    REQUIRED_FIELD_ERROR: 'This Field is Required',
    URL: {
      BASE_URL: 'http://localhost:8000/api',
      USER_LOGIN: '/users/login/',
      USER_LOGOUT: '/users/logout/',
      USERS: '/users/',
      THEATRE: '/movies/theatre/',
      AUDI: '/movies/theatre/:id/audi/',
      THEATRE_DETAIL: '/movies/theatre/:id/',
      AUDI_DETAIL: '/movies/theatre/:theatreId/audi/:audiId/',
      MOVIE_LIST: '/movies/movie/',
      MOVIE_DETAIL: '/movies/movie/:id',
      FREE_SLOTS: '/movies/free-slots/',
      SLOT_BOOKING: '/movies/slots-booking/',
      BOOK_SLOT: '/movies/book/:id/',
      CHANGE_PASSWORD: '/users/change-password/',
      UPDATE_DETAIL: '/users/',
      UPDATE_MOVIE: '/movies/movie/:id/',
      MY_BOOKINGS: '/movies/bookings/',
      DELETE_SLOT: '/movies/delete-slots/:id/',
    },
    MESSAGES: 'movie-ticketing/commons/messages.html',
    MOVIE_LANGUAGES: ['English', 'Hindi'],
    MOVIE_TYPES: ['3D', '2D'],
    DEFAULT_LANGUAGE: 'English',
    DEFAULT_TYPE: '3D',
    TOAST_DISPLAY_TIME: 1000,
    TEMPLATES_PATH: {
      NAV_BAR: './nav-bar/nav-bar.template.html',
    },
  });
