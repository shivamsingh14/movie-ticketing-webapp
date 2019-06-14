/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
angular.module('movieTicketing')
  .config(['$stateProvider', '$urlRouterProvider', 'constant', function movieTicketingConfig($stateProvider, $urlRouterProvider, constant) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
      .state('navBar', {
        url: '',
        abstract: true,
        template: require('./nav-bar/nav-bar.template.html'),
        // template: require(constant.TEMPLATES_PATH.NAV_BAR),
        controller: 'NavBarController',
        data: {
          loginRequired: false,
        },
      })
      .state('homeNavBar', {
        url: '',
        abstract: true,
        template: require('./nav-bar/home-nav-bar.template.html'),
        data: {
          loginRequired: true,
        },
      })
      .state('navBar.login', {
        url: '/login',
        template: require('./user/login/login.template.html'),
        controller: 'LoginController',
        data: {
          loginRequired: false,
        },
      })
      .state('navBar.signUp', {
        url: '/sign-up',
        template: require('./user/sign-up/sign-up.template.html'),
        controller: 'SignUpController',
        data: {
          loginRequired: false,
        },
      })
      .state('homeNavBar.createTheatre', {
        url: '/theatres/{id}',
        params: {
          id: '',
        },
        template: require('./movie/create-theatre/create-theatre.template.html'),
        controller: 'CreateTheatreController',
        data: {
          loginRequired: true,
        },
      })
      .state('homeNavBar.theatreList', {
        url: '/theatres',
        template: require('./movie/theatre-list/theatre-list.template.html'),
        controller: 'TheatreListController',
        data: {
          loginRequired: true,
        },
      })
      .state('homeNavBar.createMovie', {
        url: '/movies/{id}',
        params: {
          id: '',
        },
        template: require('./movie/create-movie/create-movie.template.html'),
        controller: 'CreateMovieController',
        data: {
          loginRequired: true,
        },
      })
      .state('homeNavBar.movieList', {
        url: '/movies',
        template: require('./movie/movie-list/movie-list.template.html'),
        controller: 'MovieListController',
        data: {
          loginRequired: true,
        },
      })
      .state('homeNavBar.addMovie', {
        url: '/add-movie/{movieId}?end_date&start_date',
        params: {
          movieId: '',
        },
        template: require('./movie/add-movie/add-movie.template.html'),
        controller: 'AddMovieController',
        data: {
          loginRequired: true,
        },
      })
      .state('homeNavBar.bookTicket', {
        url: '/movie/{movieId}',
        template: require('./movie/book-ticket/book-ticket.template.html'),
        controller: 'BookTicketController',
        data: {
          loginRequired: true,
        },
      })
      .state('homeNavBar.profile', {
        url: '/profile',
        template: require('./user/profile/profile.template.html'),
        controller: 'ProfileController',
        data: {
          loginRequired: true,
        },
      })
      .state('homeNavBar.bookings', {
        url: '/bookings',
        template: require('./user/bookings/bookings.template.html'),
        controller: 'BookingsController',
        data: {
          loginRequired: true,
        },
      });
  }])
  .run(['Restangular', '$transitions', '$cookies', 'constant', 'userService', '$rootScope',
    function movieTicketingRun(Restangular, $transitions, $cookies, constant, userService, $rootScope) {
      $transitions.onBefore({}, (transition) => {
        if ($cookies.get('token')) {
          $rootScope.inProcess = true;
          userService.getUser().then((response) => {
            $rootScope.inProcess = false;
            if (response.plain().is_admin === true) {
              $rootScope.admin = true;
            }
          });
        }
        if (transition.to().data.loginRequired && !($cookies.get('token'))) {
          return transition.router.stateService.target('navBar.login');
        } if (!transition.to().data.loginRequired && ($cookies.get('token'))) {
          return transition.router.stateService.target('homeNavBar.movieList');
        }
        return true;
      });
      Restangular.setBaseUrl(constant.URL.BASE_URL);
      Restangular.addFullRequestInterceptor((element, operation, what, url, headers) => {
        let myHeader;
        if ((operation === 'post' && (url === constant.URL.BASE_URL + constant.URL.USER_LOGIN || url === constant.URL.BASE_URL + constant.URL.USERS)) || !$cookies.get('token')) {
          myHeader = headers;
        } else {
          headers.Authorization = `Token ${$cookies.get('token')}`;
          myHeader = headers;
        }
        return {
          headers: myHeader,
        };
      });
    }]);
