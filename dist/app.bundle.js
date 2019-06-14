/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./movie-ticketing/app.config.js":
/*!***************************************!*\
  !*** ./movie-ticketing/app.config.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-param-reassign */\n/* eslint-disable global-require */\nangular.module('movieTicketing')\n  .config(['$stateProvider', '$urlRouterProvider', 'constant', function movieTicketingConfig($stateProvider, $urlRouterProvider, constant) {\n    $urlRouterProvider.otherwise('/login');\n    $stateProvider\n      .state('navBar', {\n        url: '',\n        abstract: true,\n        template: __webpack_require__(/*! ./nav-bar/nav-bar.template.html */ \"./movie-ticketing/nav-bar/nav-bar.template.html\"),\n        // template: require(constant.TEMPLATES_PATH.NAV_BAR),\n        controller: 'NavBarController',\n        data: {\n          loginRequired: false,\n        },\n      })\n      .state('homeNavBar', {\n        url: '',\n        abstract: true,\n        template: __webpack_require__(/*! ./nav-bar/home-nav-bar.template.html */ \"./movie-ticketing/nav-bar/home-nav-bar.template.html\"),\n        data: {\n          loginRequired: true,\n        },\n      })\n      .state('navBar.login', {\n        url: '/login',\n        template: __webpack_require__(/*! ./user/login/login.template.html */ \"./movie-ticketing/user/login/login.template.html\"),\n        controller: 'LoginController',\n        data: {\n          loginRequired: false,\n        },\n      })\n      .state('navBar.signUp', {\n        url: '/sign-up',\n        template: __webpack_require__(/*! ./user/sign-up/sign-up.template.html */ \"./movie-ticketing/user/sign-up/sign-up.template.html\"),\n        controller: 'SignUpController',\n        data: {\n          loginRequired: false,\n        },\n      })\n      .state('homeNavBar.createTheatre', {\n        url: '/theatres/{id}',\n        params: {\n          id: '',\n        },\n        template: __webpack_require__(/*! ./movie/create-theatre/create-theatre.template.html */ \"./movie-ticketing/movie/create-theatre/create-theatre.template.html\"),\n        controller: 'CreateTheatreController',\n        data: {\n          loginRequired: true,\n        },\n      })\n      .state('homeNavBar.theatreList', {\n        url: '/theatres',\n        template: __webpack_require__(/*! ./movie/theatre-list/theatre-list.template.html */ \"./movie-ticketing/movie/theatre-list/theatre-list.template.html\"),\n        controller: 'TheatreListController',\n        data: {\n          loginRequired: true,\n        },\n      })\n      .state('homeNavBar.createMovie', {\n        url: '/movies/{id}',\n        params: {\n          id: '',\n        },\n        template: __webpack_require__(/*! ./movie/create-movie/create-movie.template.html */ \"./movie-ticketing/movie/create-movie/create-movie.template.html\"),\n        controller: 'CreateMovieController',\n        data: {\n          loginRequired: true,\n        },\n      })\n      .state('homeNavBar.movieList', {\n        url: '/movies',\n        template: __webpack_require__(/*! ./movie/movie-list/movie-list.template.html */ \"./movie-ticketing/movie/movie-list/movie-list.template.html\"),\n        controller: 'MovieListController',\n        data: {\n          loginRequired: true,\n        },\n      })\n      .state('homeNavBar.addMovie', {\n        url: '/add-movie/{movieId}?end_date&start_date',\n        params: {\n          movieId: '',\n        },\n        template: __webpack_require__(/*! ./movie/add-movie/add-movie.template.html */ \"./movie-ticketing/movie/add-movie/add-movie.template.html\"),\n        controller: 'AddMovieController',\n        data: {\n          loginRequired: true,\n        },\n      })\n      .state('homeNavBar.bookTicket', {\n        url: '/movie/{movieId}',\n        template: __webpack_require__(/*! ./movie/book-ticket/book-ticket.template.html */ \"./movie-ticketing/movie/book-ticket/book-ticket.template.html\"),\n        controller: 'BookTicketController',\n        data: {\n          loginRequired: true,\n        },\n      })\n      .state('homeNavBar.profile', {\n        url: '/profile',\n        template: __webpack_require__(/*! ./user/profile/profile.template.html */ \"./movie-ticketing/user/profile/profile.template.html\"),\n        controller: 'ProfileController',\n        data: {\n          loginRequired: true,\n        },\n      })\n      .state('homeNavBar.bookings', {\n        url: '/bookings',\n        template: __webpack_require__(/*! ./user/bookings/bookings.template.html */ \"./movie-ticketing/user/bookings/bookings.template.html\"),\n        controller: 'BookingsController',\n        data: {\n          loginRequired: true,\n        },\n      });\n  }])\n  .run(['Restangular', '$transitions', '$cookies', 'constant', 'userService', '$rootScope',\n    function movieTicketingRun(Restangular, $transitions, $cookies, constant, userService, $rootScope) {\n      $transitions.onBefore({}, (transition) => {\n        if ($cookies.get('token')) {\n          $rootScope.inProcess = true;\n          userService.getUser().then((response) => {\n            $rootScope.inProcess = false;\n            if (response.plain().is_admin === true) {\n              $rootScope.admin = true;\n            }\n          });\n        }\n        if (transition.to().data.loginRequired && !($cookies.get('token'))) {\n          return transition.router.stateService.target('navBar.login');\n        } if (!transition.to().data.loginRequired && ($cookies.get('token'))) {\n          return transition.router.stateService.target('homeNavBar.movieList');\n        }\n        return true;\n      });\n      Restangular.setBaseUrl(constant.URL.BASE_URL);\n      Restangular.addFullRequestInterceptor((element, operation, what, url, headers) => {\n        let myHeader;\n        if ((operation === 'post' && (url === constant.URL.BASE_URL + constant.URL.USER_LOGIN || url === constant.URL.BASE_URL + constant.URL.USERS)) || !$cookies.get('token')) {\n          myHeader = headers;\n        } else {\n          headers.Authorization = `Token ${$cookies.get('token')}`;\n          myHeader = headers;\n        }\n        return {\n          headers: myHeader,\n        };\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/app.config.js?");

/***/ }),

/***/ "./movie-ticketing/app.constant.js":
/*!*****************************************!*\
  !*** ./movie-ticketing/app.constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('movieTicketing')\n  .constant('constant', {\n    REQUIRED_FIELD_ERROR: 'This Field is Required',\n    URL: {\n      BASE_URL: 'http://localhost:8000/api',\n      USER_LOGIN: '/users/login/',\n      USER_LOGOUT: '/users/logout/',\n      USERS: '/users/',\n      THEATRE: '/movies/theatre/',\n      AUDI: '/movies/theatre/:id/audi/',\n      THEATRE_DETAIL: '/movies/theatre/:id/',\n      AUDI_DETAIL: '/movies/theatre/:theatreId/audi/:audiId/',\n      MOVIE_LIST: '/movies/movie/',\n      MOVIE_DETAIL: '/movies/movie/:id',\n      FREE_SLOTS: '/movies/free-slots/',\n      SLOT_BOOKING: '/movies/slots-booking/',\n      BOOK_SLOT: '/movies/book/:id/',\n      CHANGE_PASSWORD: '/users/change-password/',\n      UPDATE_DETAIL: '/users/',\n      UPDATE_MOVIE: '/movies/movie/:id/',\n      MY_BOOKINGS: '/movies/bookings/',\n      DELETE_SLOT: '/movies/delete-slots/:id/',\n    },\n    MESSAGES: 'movie-ticketing/commons/messages.html',\n    MOVIE_LANGUAGES: ['English', 'Hindi'],\n    MOVIE_TYPES: ['3D', '2D'],\n    DEFAULT_LANGUAGE: 'English',\n    DEFAULT_TYPE: '3D',\n    TOAST_DISPLAY_TIME: 1000,\n    TEMPLATES_PATH: {\n      NAV_BAR: './nav-bar/nav-bar.template.html',\n    },\n  });\n\n\n//# sourceURL=webpack:///./movie-ticketing/app.constant.js?");

/***/ }),

/***/ "./movie-ticketing/app.css":
/*!*********************************!*\
  !*** ./movie-ticketing/app.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./app.css */ \"./node_modules/css-loader/dist/cjs.js!./movie-ticketing/app.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./movie-ticketing/app.css?");

/***/ }),

/***/ "./movie-ticketing/app.js":
/*!********************************!*\
  !*** ./movie-ticketing/app.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var angular_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-cookies */ \"./node_modules/angular-cookies/index.js\");\n/* harmony import */ var angular_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_cookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uirouter_angularjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angularjs */ \"./node_modules/@uirouter/angularjs/lib-esm/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var restangular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! restangular */ \"./node_modules/restangular/dist/restangular.js\");\n/* harmony import */ var restangular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(restangular__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var angular_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-messages */ \"./node_modules/angular-messages/index.js\");\n/* harmony import */ var angular_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_messages__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var angularjs_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularjs-toast */ \"./node_modules/angularjs-toast/angularjs-toast.min.js\");\n/* harmony import */ var angularjs_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularjs_toast__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var angular_sanitize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-sanitize */ \"./node_modules/angular-sanitize/index.js\");\n/* harmony import */ var angular_sanitize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_sanitize__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var angular_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-animate */ \"./node_modules/angular-animate/index.js\");\n/* harmony import */ var angular_animate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_animate__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.module */ \"./movie-ticketing/user/user.module.js\");\n/* harmony import */ var _movie_movie_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movie/movie.module */ \"./movie-ticketing/movie/movie.module.js\");\n/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.service */ \"./movie-ticketing/user/user.service.js\");\n/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_user_user_service__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _movie_movie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movie/movie.service */ \"./movie-ticketing/movie/movie.service.js\");\n/* harmony import */ var _movie_movie_service__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_movie_movie_service__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _movie_theatre_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./movie/theatre.service */ \"./movie-ticketing/movie/theatre.service.js\");\n/* harmony import */ var _movie_theatre_service__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_movie_theatre_service__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _movie_audi_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./movie/audi.service */ \"./movie-ticketing/movie/audi.service.js\");\n/* harmony import */ var _movie_audi_service__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_movie_audi_service__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.css */ \"./movie-ticketing/app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _user_sign_up_sign_up_controller__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/sign-up/sign-up.controller */ \"./movie-ticketing/user/sign-up/sign-up.controller.js\");\n/* harmony import */ var _user_sign_up_sign_up_controller__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_user_sign_up_sign_up_controller__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _user_login_login_controller__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/login/login.controller */ \"./movie-ticketing/user/login/login.controller.js\");\n/* harmony import */ var _user_login_login_controller__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_user_login_login_controller__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _movie_create_theatre_create_theatre_controller__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./movie/create-theatre/create-theatre.controller */ \"./movie-ticketing/movie/create-theatre/create-theatre.controller.js\");\n/* harmony import */ var _movie_create_theatre_create_theatre_controller__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_movie_create_theatre_create_theatre_controller__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _movie_theatre_list_theatre_list_controller__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./movie/theatre-list/theatre-list.controller */ \"./movie-ticketing/movie/theatre-list/theatre-list.controller.js\");\n/* harmony import */ var _movie_theatre_list_theatre_list_controller__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_movie_theatre_list_theatre_list_controller__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _audi_create_audi_create_audi_controller__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./audi/create-audi/create-audi.controller */ \"./movie-ticketing/audi/create-audi/create-audi.controller.js\");\n/* harmony import */ var _audi_create_audi_create_audi_controller__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_audi_create_audi_create_audi_controller__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _movie_create_movie_create_movie_controller__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./movie/create-movie/create-movie.controller */ \"./movie-ticketing/movie/create-movie/create-movie.controller.js\");\n/* harmony import */ var _movie_create_movie_create_movie_controller__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_movie_create_movie_create_movie_controller__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _movie_movie_list_movie_list_controller__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./movie/movie-list/movie-list.controller */ \"./movie-ticketing/movie/movie-list/movie-list.controller.js\");\n/* harmony import */ var _movie_movie_list_movie_list_controller__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_movie_movie_list_movie_list_controller__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _movie_add_movie_add_movie_controller__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./movie/add-movie/add-movie.controller */ \"./movie-ticketing/movie/add-movie/add-movie.controller.js\");\n/* harmony import */ var _movie_add_movie_add_movie_controller__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_movie_add_movie_add_movie_controller__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _movie_book_ticket_book_ticket_controller__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./movie/book-ticket/book-ticket.controller */ \"./movie-ticketing/movie/book-ticket/book-ticket.controller.js\");\n/* harmony import */ var _movie_book_ticket_book_ticket_controller__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_movie_book_ticket_book_ticket_controller__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _user_profile_profile_controller__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/profile/profile.controller */ \"./movie-ticketing/user/profile/profile.controller.js\");\n/* harmony import */ var _user_profile_profile_controller__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_user_profile_profile_controller__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _user_bookings_bookings_controller__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user/bookings/bookings.controller */ \"./movie-ticketing/user/bookings/bookings.controller.js\");\n/* harmony import */ var _user_bookings_bookings_controller__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_user_bookings_bookings_controller__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _commons_messages_html__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./commons/messages.html */ \"./movie-ticketing/commons/messages.html\");\n/* harmony import */ var _commons_messages_html__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_commons_messages_html__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_28__);\n/* harmony import */ var angularjs_toast_angularjs_toast_min_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angularjs-toast/angularjs-toast.min.css */ \"./node_modules/angularjs-toast/angularjs-toast.min.css\");\n/* harmony import */ var angularjs_toast_angularjs_toast_min_css__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(angularjs_toast_angularjs_toast_min_css__WEBPACK_IMPORTED_MODULE_29__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('movieTicketing', [_user_user_module__WEBPACK_IMPORTED_MODULE_9__[\"default\"].name, _movie_movie_module__WEBPACK_IMPORTED_MODULE_10__[\"default\"].name, _uirouter_angularjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]));\n\n\n//# sourceURL=webpack:///./movie-ticketing/app.js?");

/***/ }),

/***/ "./movie-ticketing/audi/create-audi/create-audi.controller.js":
/*!********************************************************************!*\
  !*** ./movie-ticketing/audi/create-audi/create-audi.controller.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-else-return */\n/* eslint-disable no-useless-return */\n/* eslint-disable object-shorthand */\nangular.module('movieTicketing.movie')\n  .controller('CreateAudiController', ['$scope', '$state', 'audiService', '$stateParams', '$rootScope', 'toast', 'theatreService', 'constant',\n    function CreateAudiController($scope, $state, audiService, $stateParams, $rootScope, toast, theatreService, constant) {\n      $scope.reset = {};\n      $scope.audiOject = {\n        name: '',\n        seats: '',\n        opening_time: 9,\n        closing_time: 21,\n      };\n      function createAudi() {\n        if ($scope.audiModal.$invalid) {\n          console.log('novalidate fired');\n        } else {\n          $scope.loading = true;\n          $scope.audiOject.theatre = $stateParams.id;\n          audiService.createAudi($scope.audiOject, $stateParams.id).then(() => {\n            $scope.loading = false;\n            toast({\n              duration: constant.TOAST_DISPLAY_TIME,\n              message: 'Auditorium Added Successfully',\n              className: 'alert-success',\n            });\n            $('.modal').modal('toggle');\n            // $state.reload();\n            theatreService.theatreDetail($stateParams.id).then((response) => {\n              $scope.loading = false;\n              $scope.theatreDetail = response.plain();\n              $scope.theatreOject = $scope.theatreDetail;\n              $scope.audiList = $scope.theatreDetail.auditoriums;\n            });\n            // $state.go('homeNavBar.createTheatre');\n          }, (response) => {\n            if (!response.data.non_field_errors) {\n              // $scope.registrationForm.email.$error = response.data.email;\n            } else {\n              $scope.non_field_errors = '';\n              for (let i = 0; i < response.data.non_field_errors.length; i++) {\n                $scope.non_field_errors += response.data.non_field_errors[i];\n              }\n            }\n          });\n        }\n      }\n      function editAudi() {\n        if (!$scope.audiModal.$invalid) {\n          $scope.loading = true;\n          audiService.editAudi($stateParams.id, $rootScope.audiId, $scope.audiOject).then(() => {\n            $scope.loading = false;\n            toast({\n              duration: constant.TOAST_DISPLAY_TIME,\n              message: 'Details Updated Successfully',\n              className: 'alert-success',\n            });\n            $('.modal').modal('toggle');\n            // $state.reload();\n            theatreService.theatreDetail($stateParams.id).then((response) => {\n              $scope.loading = false;\n              $scope.theatreDetail = response.plain();\n              $scope.theatreOject = $scope.theatreDetail;\n              $scope.audiList = $scope.theatreDetail.auditoriums;\n            });\n          }, (response) => {\n            if (response.data.non_field_errors) {\n              $scope.non_field_errors = '';\n              for (let i = 0; i < response.data.non_field_errors.length; i++) {\n                $scope.non_field_errors += response.data.non_field_errors[i];\n              }\n            }\n          });\n        }\n      }\n      function removeAudi() {\n        $scope.loading = true;\n        audiService.removeAudi($stateParams.id, $rootScope.removeAudiId).then(() => {\n          $scope.loading = false;\n          toast({\n            duration: constant.TOAST_DISPLAY_TIME,\n            message: 'Auditorium Deleted',\n            className: 'alert-success',\n          });\n          $state.reload();\n        });\n      }\n      function closeModal() {\n        $scope.audiOject = angular.copy($scope.reset);\n        $scope.non_field_errors = '';\n        $scope.audiModal.$setPristine();\n        $scope.audiModal.$setUntouched();\n      }\n      angular.extend($scope, {\n        removeAudi: removeAudi,\n        createAudi: createAudi,\n        editAudi: editAudi,\n        closeModal: closeModal,\n      });\n    }])\n  .directive('createAudiDirective', [function createAudiDirective() {\n    return {\n      template: __webpack_require__(/*! ./create-audi.template.html */ \"./movie-ticketing/audi/create-audi/create-audi.template.html\"),\n    };\n  }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/audi/create-audi/create-audi.controller.js?");

/***/ }),

/***/ "./movie-ticketing/audi/create-audi/create-audi.template.html":
/*!********************************************************************!*\
  !*** ./movie-ticketing/audi/create-audi/create-audi.template.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"main-page\\\" ng-show=\\\"loading\\\">\\n  <img class=\\\"loader-gif main-page\\\" src=\\\"/movie-ticketing/Assets/Images/load.gif\\\" />\\n</div>\\n<div ng-hide=\\\"loading\\\">\\n  <div ng-controller=\\\"CreateAudiController\\\" class=\\\"modal dataModal\\\">\\n    <form name=\\\"audiModal\\\" novalidate>\\n      <div class=\\\"modal-dialog\\\">\\n        <div class=\\\"modal-content\\\">\\n\\n          <div class=\\\"modal-header\\\">\\n            <h4 class=\\\"modal-title\\\" ng-if=\\\"addAudiButton\\\">Create Auditorium</h4>\\n            <h4 class=\\\"modal-title\\\" ng-if=\\\"editAudiButton\\\">Edit Auditorium</h4>\\n            <h4 class=\\\"modal-title\\\" ng-if=\\\"removeAudiButton\\\">Do you want to delete Audi ?</h4>\\n            <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\">&times;</button>\\n          </div>\\n\\n          <div ng-if=\\\"!removeAudiButton\\\" class=\\\"modal-body\\\">\\n            <div class=\\\"form-group\\\">\\n              <label class=\\\"required\\\" for=\\\"name\\\">Name:</label>\\n              <input type=\\\"name\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter name\\\" name=\\\"name\\\"\\n                ng-model=\\\"audiOject.name\\\" autocomplete=\\\"off\\\" required>\\n              <div ng-if=\\\"audiModal.$submitted || audiModal.name.$touched\\\" ng-messages=\\\"audiModal.name.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n              </div>\\n            </div>\\n            <div class=\\\"form-group\\\">\\n              <label class=\\\"required\\\" for=\\\"name\\\">Seats:</label>\\n              <input type=\\\"number\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter seats\\\" name=\\\"seats\\\"\\n                ng-model=\\\"audiOject.seats\\\" autocomplete=\\\"off\\\" required>\\n              <div ng-if=\\\"audiModal.$submitted || audiModal.seats.$touched\\\" ng-messages=\\\"audiModal.seats.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n              </div>\\n            </div>\\n            <div class=\\\"form-group\\\">\\n              <label for=\\\"name\\\">Opening Time:</label>\\n              <input type=\\\"number\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter opening time\\\" name=\\\"openingTime\\\"\\n                max=\\\"24\\\" ng-model=\\\"audiOject.opening_time\\\" ng-value=9 autocomplete=\\\"off\\\">\\n              <div ng-if=\\\"audiModal.$submitted || audiModal.openingTime.$touched\\\"\\n                ng-messages=\\\"audiModal.openingTime.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n              </div>\\n            </div>\\n            <div class=\\\"form-group\\\">\\n              <label for=\\\"name\\\">Closing Time:</label>\\n              <input type=\\\"number\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter closing time\\\" name=\\\"closingTime\\\"\\n                max=\\\"24\\\" value=\\\"21\\\" ng-model=\\\"audiOject.closing_time\\\" autocomplete=\\\"off\\\">\\n              <div ng-if=\\\"audiModal.$submitted || audiModal.closingTime.$touched\\\"\\n                ng-messages=\\\"audiModal.closingTime.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n              </div>\\n            </div>\\n            <p class=\\\"container width span-error\\\">{{non_field_errors}}</p>\\n          </div>\\n\\n          <div class=\\\"modal-footer\\\">\\n            <button type=\\\"submit\\\" class=\\\"btn btn-danger\\\" ng-click=closeModal() data-dismiss=\\\"modal\\\">Close</button>\\n            <button type=\\\"submit\\\" ng-if=\\\"addAudiButton\\\" class=\\\"btn btn-success\\\" ng-click=createAudi()>Create</button>\\n            <button type=\\\"submit\\\" ng-if=\\\"editAudiButton\\\" class=\\\"btn btn-primary\\\" ng-click=editAudi()>Edit</button>\\n            <button type=\\\"button\\\" ng-if=\\\"removeAudiButton\\\" class=\\\"btn btn-danger\\\" data-dismiss=\\\"modal\\\"\\n              ng-click=removeAudi()>Delete</button>\\n          </div>\\n\\n        </div>\\n      </div>\\n    </form>\\n  </div>\\n</div>\";\n\n//# sourceURL=webpack:///./movie-ticketing/audi/create-audi/create-audi.template.html?");

/***/ }),

/***/ "./movie-ticketing/commons/messages.html":
/*!***********************************************!*\
  !*** ./movie-ticketing/commons/messages.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<p class=\\\"span-error\\\" role=\\\"alert\\\" ng-message=\\\"required\\\">This field is required</p>\\n<p class=\\\"span-error\\\" role=\\\"alert\\\" ng-message=\\\"pattern\\\">Enter a valid email address</p>\\n<p class=\\\"span-error\\\" role=\\\"alert\\\" ng-message=\\\"minlength\\\">Minimum length required is 8 characters</p>\\n<p class=\\\"span-error\\\" ng-message-default>This field has an input error</p>\\n\";\n\n//# sourceURL=webpack:///./movie-ticketing/commons/messages.html?");

/***/ }),

/***/ "./movie-ticketing/movie/add-movie/add-movie.controller.js":
/*!*****************************************************************!*\
  !*** ./movie-ticketing/movie/add-movie/add-movie.controller.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable object-shorthand */\nangular.module('movieTicketing.movie')\n  .controller('AddMovieController', ['$scope', 'movieService', '$filter', '$stateParams', '$state', 'constant',\n    function AddMovieController($scope, movieService, $filter, $stateParams, $state, constant) {\n      movieService.movieDetails($stateParams.movieId).then((response) => {\n        $scope.languages = response.language;\n        $scope.types = response.movie_type;\n      });\n      $scope.todayDate = new Date();\n      $scope.datesChoosen = false;\n      $scope.audiSlots = {};\n      $scope.theatresList = [];\n      $scope.selectedName = '';\n      $scope.dates = {\n        start_date: new Date(),\n        end_date: new Date(),\n      };\n\n      $scope.language = constant.DEFAULT_LANGUAGE;\n      $scope.type = constant.DEFAULT_TYPE;\n      $scope.selection = [];\n      function selectSlot(audiId, time) {\n        if ($scope.audiSlots[audiId]) {\n          const index = $scope.audiSlots[audiId].indexOf(time);\n          if (index > -1) {\n            $scope.audiSlots[audiId].splice(index, 1);\n          } else {\n            $scope.audiSlots[audiId].push(time);\n          }\n        } else {\n          $scope.audiSlots[audiId] = [time];\n        }\n      }\n      function slotsBooking() {\n        $scope.payLoad = {\n          audiSlots: $scope.audiSlots,\n          movie: $stateParams.movieId,\n          opening_date: $scope.dates.start_date,\n          closing_date: $scope.dates.end_date,\n          movie_language: $scope.language,\n          movie_type: $scope.type,\n        };\n        movieService.slotBooking($scope.payLoad).then(() => {\n          $state.go('homeNavBar.createMovie', { id: $stateParams.movieId });\n        });\n      }\n      function freeSlots() {\n        $scope.datesChoosen = true;\n        $scope.dates.start_date = $filter('date')($scope.dates.start_date, 'yyyy-MM-dd');\n        $scope.dates.end_date = $filter('date')($scope.dates.end_date, 'yyyy-MM-dd');\n        movieService.freeSlots($scope.dates).then((response) => {\n          $scope.submitButton = true;\n          $scope.slots = response.plain();\n        }, (response) => {\n          if (response.data.non_field_errors) {\n            $scope.non_field_errors = '';\n            for (let i = 0; i < response.data.non_field_errors.length; i++) {\n              $scope.non_field_errors += response.data.non_field_errors[i];\n            }\n          }\n        });\n      }\n      function changeDates() {\n        $scope.datesChoosen = false;\n        $scope.submitButton = false;\n        $scope.non_field_errors = '';\n      }\n      angular.extend($scope, {\n        freeSlots: freeSlots,\n        slotsBooking: slotsBooking,\n        selectSlot: selectSlot,\n        changeDates: changeDates,\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/movie/add-movie/add-movie.controller.js?");

/***/ }),

/***/ "./movie-ticketing/movie/add-movie/add-movie.template.html":
/*!*****************************************************************!*\
  !*** ./movie-ticketing/movie/add-movie/add-movie.template.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<h1 class=\\\"main-page\\\">Add movie</h1>\\n<!-- <button class=\\\"main-page btn btn-primary\\\" type=\\\"button\\\" ng-click=freeSlots()>get free audi slots</button> -->\\n<div class=\\\"main-page container form-group\\\">\\n    <label class=\\\"required\\\"><b>Opening Date:</b></label>\\n    <input type=\\\"date\\\" ng-disabled=\\\"datesChoosen\\\" name=\\\"startDate\\\" ng-model=\\\"dates.start_date\\\" min=\\\"{{todayDate | date:'yyyy-MM-dd'}}\\\" placeholder=\\\"yyyy-MM-dd\\\" required />\\n</div>\\n<div class=\\\"main-page container form-group\\\">\\n    <label class=\\\"required\\\"><b>Closing Date:</b></label>\\n    <input type=\\\"date\\\" ng-disabled=\\\"datesChoosen\\\" name=\\\"closeDate\\\" ng-model=\\\"dates.end_date\\\" min=\\\"{{todayDate | date:'yyyy-MM-dd'}}\\\" placeholder=\\\"yyyy-MM-dd\\\" required />\\n</div>\\n<div class=\\\"main-page container form-group\\\">\\n    <label class=\\\"required\\\"><b>Movie Language:</b></label>\\n    <div ng-repeat=\\\"lang in languages\\\">\\n        <input type=\\\"radio\\\" name=\\\"movieLanguage\\\" ng-model=\\\"$parent.language\\\" ng-value=\\\"lang\\\">{{lang}}\\n    </div>\\n</div>\\n<div class=\\\"main-page container form-group\\\">\\n    <label class=\\\"required\\\"><b>Movie Type:</b></label>\\n    <div ng-repeat=\\\"type in types\\\">\\n        <input type=\\\"radio\\\" name=\\\"movieType\\\" ng-model=\\\"$parent.type\\\" ng-value=\\\"type\\\">{{type}}\\n    </div>\\n</div>\\n<button class=\\\"btn btn-primary main-page\\\" type=\\\"button\\\" ng-click=freeSlots()>Choose slots</button>\\n<button class=\\\"btn btn-primary main-page\\\" ng-if=\\\"datesChoosen\\\" type=\\\"button\\\" ng-click=changeDates()>Change Dates</button>\\n<p class=\\\"container width span-error\\\">{{non_field_errors}}</p>\\n<div ng-repeat=\\\"slot in slots\\\">\\n    <div class=\\\"card main-page\\\">\\n        <h5 class=\\\"card-header\\\">{{slot.audi.theatre.name}}</h5>\\n        <div class=\\\"card-body\\\">\\n            <p class=\\\"card-title\\\">Theatre: {{slot.audi.theatre.name}}</p>\\n            <p class=\\\"card-title\\\">Audi: {{slot.audi.name}}</p>\\n            <div ng-repeat=\\\"time in slot.free_slots\\\">\\n                <input type=\\\"checkbox\\\" ng-checked=\\\"selection.indexOf(time) > -1\\\"\\n                    ng-click=\\\"selectSlot(slot.audi.id, time)\\\"> {{time}}:00 hrs\\n            </div>\\n        </div>\\n    </div>\\n</div>\\n<button class=\\\"main-page btn btn-primary\\\" ng-if=\\\"submitButton\\\" type=\\\"button\\\" ng-click=slotsBooking()>Add Movie</button>\";\n\n//# sourceURL=webpack:///./movie-ticketing/movie/add-movie/add-movie.template.html?");

/***/ }),

/***/ "./movie-ticketing/movie/audi.service.js":
/*!***********************************************!*\
  !*** ./movie-ticketing/movie/audi.service.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable object-shorthand */\nangular.module('movieTicketing.movie')\n  .service('audiService', ['Restangular', 'constant',\n    function audiService(Restangular, constant) {\n      function createAudi(audiOject, uid) {\n        return Restangular.all(constant.URL.AUDI.replace(':id', uid)).post(audiOject);\n      }\n      function removeAudi(theatreId, audiId) {\n        return Restangular.one(constant.URL.AUDI_DETAIL.replace(':theatreId', theatreId).replace(':audiId', audiId)).remove();\n      }\n      function editAudi(theatreId, audiId, audiOject) {\n        return Restangular.one(constant.URL.AUDI_DETAIL.replace(':theatreId', theatreId).replace(':audiId', audiId)).patch(audiOject);\n      }\n      angular.extend(this, {\n        createAudi: createAudi,\n        removeAudi: removeAudi,\n        editAudi: editAudi,\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/movie/audi.service.js?");

/***/ }),

/***/ "./movie-ticketing/movie/book-ticket/book-ticket.controller.js":
/*!*********************************************************************!*\
  !*** ./movie-ticketing/movie/book-ticket/book-ticket.controller.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable object-shorthand */\nangular.module('movieTicketing.movie')\n  .controller('BookTicketController', ['$scope', 'movieService', '$stateParams', '$state',\n    function BookTicketController($scope, movieService, $stateParams, $state) {\n      $scope.loading = true;\n      $scope.bookTicketObject = {\n        slot: '',\n        seats_booked: '',\n      };\n      movieService.movieDetails($stateParams.movieId).then((response) => {\n        $scope.loading = false;\n        $scope.movieDetails = response.plain();\n        $scope.slots = $scope.movieDetails.slots;\n      }, () => {\n        $scope.loading = false;\n      });\n      function bookSlot(id) {\n        $scope.loading = true;\n        $scope.bookTicketObject.slot = id;\n        movieService.bookSlot($scope.bookTicketObject, $stateParams.movieId).then(() => {\n          $scope.loading = false;\n          $state.go('homeNavBar.bookings');\n        }, (response) => {\n          if (response.data.non_field_errors) {\n            $scope.non_field_errors = '';\n            for (let i = 0; i < response.data.non_field_errors.length; i++) {\n              $scope.non_field_errors += response.data.non_field_errors[i];\n            }\n          }\n          $scope.loading = false;\n        });\n      }\n      angular.extend($scope, {\n        bookSlot: bookSlot,\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/movie/book-ticket/book-ticket.controller.js?");

/***/ }),

/***/ "./movie-ticketing/movie/book-ticket/book-ticket.template.html":
/*!*********************************************************************!*\
  !*** ./movie-ticketing/movie/book-ticket/book-ticket.template.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"main-page\\\" ng-show=\\\"loading\\\">\\n    <img class=\\\"loader-gif main-page\\\" src=\\\"/movie-ticketing/Assets/Images/load.gif\\\" />\\n</div>\\n<div>\\n    <h1 class=\\\"main-page\\\">Booking Page</h1>\\n    <div class=\\\"card main-page\\\">\\n        <div class=\\\"card-body\\\">\\n            <h5 class=\\\"card-title\\\">Name: {{movieDetails.name}}</h5>\\n            <p class=\\\"card-title\\\">Duration: {{movieDetails.duration}} hr</p>\\n            <h5 class=\\\"card-title\\\">Languages:</h5>\\n            <div ng-repeat=\\\"language in movieDetails.language\\\">\\n                <p class=\\\"card-title\\\">- {{language}}</p>\\n            </div>\\n            <h5 class=\\\"card-title\\\">Movie Types</h5>\\n            <div ng-repeat=\\\"type in movieDetails.movie_type\\\">\\n                <p class=\\\"card-title\\\">- {{type}}\\n            </div>\\n            <div ng-repeat=\\\"slot in slots\\\">\\n                <h5 class=\\\"card-header\\\">Slot Info</h5>\\n                <p class=\\\"card-title\\\">Seats: {{slot.seats_available}}</p>\\n                <p class=\\\"card-title\\\">Date: {{slot.date}}</p>\\n                <p class=\\\"card-title\\\">Time: {{slot.slot}}:00 hrs</p>\\n                <p class=\\\"card-title\\\">Type: {{slot.movie_type}}</p>\\n                <p class=\\\"card-title\\\">Audi: {{slot.audi}}</p>\\n                <p class=\\\"card-title\\\">Language: {{slot.movie_language}}</p>\\n                <button type=\\\"button\\\" class=\\\"btn btn-primary\\\" data-toggle=\\\"modal\\\"\\n                    data-target=\\\".dataModal\\\">Seats</button>\\n                <button type=\\\"button\\\" class=\\\"btn btn-primary\\\" ng-click=\\\"bookSlot(slot.id)\\\">Book Slot</button>\\n            </div>\\n        </div>\\n        <p class=\\\"width span-error\\\">{{non_field_errors}}</p>\\n    </div>\\n    <div class=\\\"modal dataModal\\\">\\n        <div class=\\\"modal-dialog\\\">\\n            <div class=\\\"modal-content\\\">\\n                <div class=\\\"modal-header\\\">\\n                    <h4 class=\\\"modal-title\\\">Enter the seats</h4>\\n                </div>\\n                <div class=\\\"modal-body\\\">\\n                    <input type=\\\"number\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter seats\\\" name=\\\"seats\\\"\\n                        ng-model=\\\"bookTicketObject.seats_booked\\\" autocomplete=\\\"off\\\" required>\\n                </div>\\n                <div class=\\\"modal-footer\\\">\\n                    <button type=\\\"button\\\" class=\\\"btn btn-danger\\\" data-dismiss=\\\"modal\\\">Close</button>\\n                    <button type=\\\"button\\\" class=\\\"btn btn-primary\\\" data-dismiss=\\\"modal\\\">Submit</button>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./movie-ticketing/movie/book-ticket/book-ticket.template.html?");

/***/ }),

/***/ "./movie-ticketing/movie/create-movie/create-movie.controller.js":
/*!***********************************************************************!*\
  !*** ./movie-ticketing/movie/create-movie/create-movie.controller.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable object-shorthand */\nangular.module('movieTicketing.movie')\n  .controller('CreateMovieController', ['$scope', 'movieService', '$state', '$stateParams', 'constant',\n    function CreateMovieController($scope, movieService, $state, $stateParams, constant) {\n      $scope.addMovieButton = false;\n      $scope.createMovieButton = true;\n      $scope.movieObject = {\n        name: '',\n        duration: '',\n        about: '',\n        language: '',\n        movie_type: '',\n      };\n      $scope.languages = constant.MOVIE_LANGUAGES;\n      $scope.movieTypes = constant.MOVIE_TYPES;\n      $scope.selectedLanguage = [];\n      $scope.selectedType = [];\n      $scope.disable = false;\n      $scope.addMovieButton = false;\n      $scope.createMovieButton = true;\n      if ($stateParams.id) {\n        movieService.movieDetails($stateParams.id).then((response) => {\n          $scope.movieDetails = response.plain();\n          $scope.movieObject = $scope.movieDetails;\n          $scope.shows = response.slots;\n          if ((response.slots.length) > 0) {\n            $scope.slotHead = true;\n          }\n          $scope.heading = true;\n          $scope.addMovieButton = true;\n          $scope.createMovieButton = false;\n          $scope.disable = true;\n          $scope.editButton = true;\n        });\n      }\n      function createMovie() {\n        if (!$scope.movieForm.$invalid) {\n          $scope.loading = true;\n          $scope.movieObject.language = $scope.selectedLanguage;\n          $scope.movieObject.movie_type = $scope.selectedType;\n          movieService.createMovie($scope.movieObject).then((response) => {\n            $scope.loading = false;\n            $state.go('homeNavBar.createMovie', { id: response.id });\n          });\n        }\n      }\n      function selectLanguage(language) {\n        const idx = $scope.selectedLanguage.indexOf(language);\n        if (idx > -1) {\n          $scope.selectedLanguage.splice(idx, 1);\n        } else {\n          $scope.selectedLanguage.push(language);\n        }\n      }\n      function selectType(type) {\n        const idx = $scope.selectedType.indexOf(type);\n        if (idx > -1) {\n          $scope.selectedType.splice(idx, 1);\n        } else {\n          $scope.selectedType.push(type);\n        }\n      }\n      function editPage() {\n        $scope.disable = false;\n        $scope.createMovieButton = false;\n        $scope.addMovieButton = false;\n        $scope.updateButton = true;\n      }\n      function updateMovieDetails() {\n        $scope.loading = true;\n        $scope.updateButton = true;\n        movieService.updateMovieDetails($stateParams.id, $scope.movieObject).then((response) => {\n          $scope.loading = false;\n          $scope.movieDetails = response.plain();\n          $state.reload();\n        });\n      }\n      function addMovie() {\n        $state.go('homeNavBar.addMovie', { movieId: $stateParams.id });\n      }\n      function cancelBooking(id) {\n        movieService.cancelBooking(id).then(() => {\n          $state.reload();\n        });\n      }\n      angular.extend($scope, {\n        addMovie: addMovie,\n        selectLanguage: selectLanguage,\n        selectType: selectType,\n        createMovie: createMovie,\n        editPage: editPage,\n        updateMovieDetails: updateMovieDetails,\n        cancelBooking: cancelBooking,\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/movie/create-movie/create-movie.controller.js?");

/***/ }),

/***/ "./movie-ticketing/movie/create-movie/create-movie.template.html":
/*!***********************************************************************!*\
  !*** ./movie-ticketing/movie/create-movie/create-movie.template.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"main-page\\\" ng-show=\\\"loading\\\">\\n    <img class=\\\"loader-gif main-page\\\" src=\\\"/movie-ticketing/Assets/Images/load.gif\\\" />\\n</div>\\n</div ng-hide=\\\"loading\\\">\\n<h1 ng-if=\\\"!heading\\\" class=\\\"main-page\\\">Create Movie</h1>\\n<h1 ng-if=\\\"heading\\\" class=\\\"main-page\\\">Movie Details</h1>\\n<form class=\\\"main-page container\\\" ng-disabled=\\\"disable\\\" name=\\\"movieForm\\\">\\n    <fieldset ng-disabled=\\\"disable\\\">\\n        <div class=\\\"form-group\\\">\\n            <label class=\\\"required\\\"><b>Name:</b></label><br>\\n            <input type=\\\"name\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter name\\\" name=\\\"name\\\"\\n                ng-model=\\\"movieObject.name\\\" autocomplete=\\\"off\\\" ng-value=\\\"movieDetails.name\\\" required>\\n            <div ng-if=\\\"movieForm.$submitted || movieForm.name.$touched\\\" ng-messages=\\\"movieForm.name.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n            </div>\\n        </div>\\n        <div class=\\\"form-group\\\">\\n            <label class=\\\"required\\\"><b>Duration:</b></label><br>\\n            <input type=\\\"number\\\" step=\\\".01\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter duration\\\" name=\\\"duration\\\"\\n                ng-model=\\\"movieObject.duration\\\" ng-value=\\\"movieDetails.duration\\\" autocomplete=\\\"off\\\"\\n                ng-disabled=\\\"disable\\\" required>\\n            <div ng-if=\\\"movieForm.$submitted || movieForm.duration.$touched\\\" ng-messages=\\\"movieForm.duration.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n            </div>\\n        </div>\\n        <div>\\n            <label class=\\\"required\\\"><b>About:</b></label><br>\\n            <textarea class=\\\"form-control form-group\\\" placeholder=\\\"Enter about\\\" name=\\\"about\\\"\\n                ng-model=\\\"movieObject.about\\\" ng-value=\\\"movieDetails.about\\\" autocomplete=\\\"off\\\" ng-disabled=\\\"disable\\\"\\n                required></textarea>\\n            <div ng-if=\\\"movieForm.$submitted || movieForm.about.$touched\\\" ng-messages=\\\"movieForm.about.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n            </div>\\n        </div>\\n        <div>\\n            <label class=\\\"required\\\"><b>Language:</b></label>\\n            <br>\\n            <div ng-repeat=\\\"language in languages\\\">\\n                <input type=\\\"checkbox\\\" ng-click=\\\"selectLanguage(language)\\\" name=\\\"language\\\" required>{{language}}\\n            </div>\\n            <br>\\n            <div ng-messages=\\\"movieForm.language.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n            </div>\\n            </div>\\n            <div class=\\\"form-group\\\">\\n                <label class=\\\"required\\\"><b>Movie Type:</b></label>\\n                <div ng-repeat=\\\"movieType in movieTypes\\\">\\n                    <input type=\\\"checkbox\\\" ng-click=\\\"selectType(movieType)\\\" name=\\\"movieType\\\">{{movieType}}\\n                </div>\\n                <br>\\n                <div ng-messages=\\\"movieForm.movieType.$error\\\">\\n                    <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n                </div>\\n            </div>\\n    </fieldset>\\n</form>\\n<button type=\\\"button\\\" ng-if=\\\"createMovieButton\\\" class=\\\"btn btn-primary main-page\\\" ng-click=createMovie()>\\n    Create\\n</button>\\n<button type=\\\"button\\\" ng-if=\\\"editButton\\\" class=\\\"btn btn-primary main-page\\\" ng-click=editPage()>\\n    Edit Details\\n</button>\\n<button type=\\\"button\\\" ng-if=\\\"addMovieButton\\\" class=\\\"btn btn-success main-page\\\" ng-click=addMovie()>\\n    Add Movie to theatre\\n</button>\\n<button type=\\\"button\\\" ng-if=\\\"updateButton\\\" class=\\\"btn btn-primary main-page\\\" ng-click=updateMovieDetails()>\\n    Update Details\\n</button>\\n<br><br>\\n<h3 ng-if=\\\"slotHead\\\" class=\\\"main-page container\\\">Shows</h3>\\n<div ng-repeat=\\\"show in shows\\\">\\n    <div class=\\\"card main-page\\\">\\n        <h5 class=\\\"card-header\\\">Date: {{show.date}}</h5>\\n        <div class=\\\"card-body\\\">\\n            <p class=\\\"card-title\\\">Time: {{show.slot}}:00 hrs</p>\\n            <p class=\\\"card-title\\\">Audi Id: {{show.audi}}</p>\\n            <button type=\\\"button\\\" class=\\\"btn btn-danger\\\" data-toggle=\\\"modal\\\" data-target=\\\".dataModal\\\"\\n                ng-click=\\\"cancelBooking(show.id)\\\">Cancel</button>\\n        </div>\\n    </div>\\n</div>\\n<div>\";\n\n//# sourceURL=webpack:///./movie-ticketing/movie/create-movie/create-movie.template.html?");

/***/ }),

/***/ "./movie-ticketing/movie/create-theatre/create-theatre.controller.js":
/*!***************************************************************************!*\
  !*** ./movie-ticketing/movie/create-theatre/create-theatre.controller.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable no-param-reassign */\n/* eslint-disable object-shorthand */\nangular.module('movieTicketing.movie')\n  .controller('CreateTheatreController', ['$scope', '$state', 'theatreService', '$stateParams', '$rootScope', 'toast',\n    function CreateTheatreController($scope, $state, theatreService, $stateParams, $rootScope, toast) {\n      $scope.theatreOject = {\n        name: '',\n        city: '',\n        state: '',\n        zipcode: '',\n      };\n      $scope.addAudi = false;\n      $scope.createButton = true;\n      if ($stateParams.id) {\n        theatreService.theatreDetail($stateParams.id).then((response) => {\n          $scope.loading = false;\n          $scope.theatreDetail = response.plain();\n          $scope.theatreOject = $scope.theatreDetail;\n          $scope.audiList = $scope.theatreDetail.auditoriums;\n        });\n        $scope.heading = true;\n        $scope.disable = true;\n        $scope.addAudi = true;\n        $scope.createButton = false;\n        $scope.editButton = true;\n      }\n      function removeAudi(id) {\n        $rootScope.removeAudiId = id;\n        $rootScope.editAudiButton = false;\n        $rootScope.addAudiButton = false;\n        $rootScope.removeAudiButton = true;\n      }\n      function editAudi(id) {\n        $rootScope.editAudiButton = true;\n        $rootScope.addAudiButton = false;\n        $rootScope.removeAudiButton = false;\n        $rootScope.audiId = id;\n      }\n      function addAuditorium() {\n        $rootScope.addAudiButton = true;\n        $rootScope.editAudiButton = false;\n        $rootScope.removeAudiButton = false;\n      }\n      function updateTheatre() {\n        $scope.loading = true;\n        $scope.edit = true;\n        theatreService.updateTheatre($scope.theatreOject, $stateParams.id).then((response) => {\n          toast({\n            duration: 1000,\n            message: 'Details Updated Successfully',\n            className: 'alert-success',\n          });\n          $scope.theatreDetail = response.plain();\n          $state.reload();\n          $scope.loading = false;\n        });\n      }\n      function editPage() {\n        $scope.addAudi = false;\n        $scope.disable = false;\n        $scope.updateButton = true;\n      }\n      function createTheatre() {\n        if (!$scope.theatreForm.$invalid) {\n          $scope.loading = true;\n          $rootScope.addAudiButton = true;\n          $rootScope.editAudiButton = false;\n          $rootScope.removeAudiButton = false;\n          theatreService.createTheatre($scope.theatreOject).then((response) => {\n            $scope.loading = false;\n            $state.go('homeNavBar.createTheatre', { id: response.plain().id });\n          }, () => {\n            $scope.loading = false;\n            $scope.createButton = true;\n            $scope.addAudi = false;\n          });\n        }\n      }\n      angular.extend($scope, {\n        updateTheatre: updateTheatre,\n        editPage: editPage,\n        createTheatre: createTheatre,\n        removeAudi: removeAudi,\n        editAudi: editAudi,\n        addAuditorium: addAuditorium,\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/movie/create-theatre/create-theatre.controller.js?");

/***/ }),

/***/ "./movie-ticketing/movie/create-theatre/create-theatre.template.html":
/*!***************************************************************************!*\
  !*** ./movie-ticketing/movie/create-theatre/create-theatre.template.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"main-page\\\" ng-show=\\\"loading\\\">\\n    <img class=\\\"loader-gif main-page\\\" src=\\\"/movie-ticketing/Assets/Images/load.gif\\\" />\\n</div>\\n<div ng-hide=\\\"loading\\\">\\n    <h1 ng-if=\\\"!heading\\\" class=\\\"main-page\\\">Create Theatre</h1>\\n    <h1 ng-if=\\\"heading\\\" class=\\\"main-page\\\">Theatre Details</h1>\\n    <form class=\\\"main-page container\\\" name=\\\"theatreForm\\\">\\n      <fieldset ng-disabled=\\\"disable\\\">\\n        <div class=\\\"form-group\\\">\\n          <label class=\\\"required\\\" for=\\\"name\\\"><b>Name</b></label>\\n          <input type=\\\"name\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter name\\\" name=\\\"name\\\"\\n            ng-model=\\\"theatreOject.name\\\" autocomplete=\\\"off\\\" ng-value=\\\"theatreDetail.name\\\" required>\\n          <!-- <div ng-if=\\\"theatreForm.$submitted || theatreForm.name.$touched\\\" ng-messages=\\\"theatreForm.name.$error\\\">\\n            <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n          </div> -->\\n          {{theatreForm.$submitted}}\\n          <div ng-if=\\\"theatreForm.$submitted || theatreForm.name.$touched\\\" ng-messages=\\\"theatreForm.name.$error\\\">\\n            <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n          </div>\\n        </div>\\n        <div class=\\\"form-group\\\">\\n            <label class=\\\"required\\\" for=\\\"name\\\"><b>City:</b></label>\\n          <input type=\\\"name\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter city\\\" name=\\\"city\\\"\\n            ng-model=\\\"theatreOject.city\\\" autocomplete=\\\"off\\\" ng-value=\\\"theatreDetail.city\\\" required>\\n          <div ng-if=\\\"theatreForm.$submitted || theatreForm.city.$touched\\\" ng-messages=\\\"theatreForm.city.$error\\\">\\n            <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n          </div>\\n        </div>\\n        <div>\\n            <label class=\\\"required\\\" for=\\\"name\\\"><b>State:</b></label>\\n          <input type=\\\"name\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter state\\\" name=\\\"state\\\"\\n            ng-model=\\\"theatreOject.state\\\" autocomplete=\\\"off\\\" ng-value=\\\"theatreDetail.state\\\" required>\\n          <div ng-if=\\\"theatreForm.$submitted || theatreForm.state.$touched\\\" ng-messages=\\\"theatreForm.state.$error\\\">\\n            <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n          </div>\\n        </div>\\n        <div>\\n            <label class=\\\"required\\\" for=\\\"name\\\"><b>Zipcode:</b></label>\\n          <input type=\\\"number\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter zipcode\\\" name=\\\"zipcode\\\"\\n            ng-model=\\\"theatreOject.zipcode\\\" autocomplete=\\\"off\\\" ng-value=\\\"theatreDetail.zipcode\\\" required>\\n          <div ng-if=\\\"theatreForm.$submitted || theatreForm.zipcode.$touched\\\" ng-messages=\\\"theatreForm.zipcode.$error\\\">\\n            <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n          </div>\\n        </div>\\n      </fieldset>\\n    </form>\\n    <button type=\\\"button\\\" ng-if=\\\"editButton\\\" class=\\\"btn btn-primary main-page\\\" ng-click=editPage()>\\n      Edit Details\\n    </button>\\n    <button type=\\\"button\\\" ng-if=\\\"updateButton\\\" class=\\\"btn btn-primary main-page\\\" ng-click=updateTheatre()>\\n      Update Details\\n    </button>\\n    <button ng-if=\\\"addAudi\\\" type=\\\"button \\\" class=\\\"btn btn-success main-page\\\" ng-click=\\\"addAuditorium()\\\" data-toggle=\\\"modal\\\"\\n      data-target=\\\".dataModal\\\">\\n      Add Auditorium\\n    </button>\\n    <button ng-if=\\\"createButton\\\" type=\\\"button \\\" class=\\\"btn btn-success main-page\\\" ng-click=createTheatre()>\\n      Create\\n    </button>\\n    <br><br>\\n    <div ng-repeat=\\\"audi in audiList\\\">\\n      <div class=\\\"card main-page\\\">\\n        <h5 class=\\\"card-header\\\">{{audi.name}}</h5>\\n        <div class=\\\"card-body\\\">\\n          <p class=\\\"card-title\\\">Seats: {{audi.seats}}</p>\\n          <p class=\\\"card-title\\\">Opening Time: {{audi.opening_time}}</p>\\n          <p class=\\\"card-title\\\">Closing Time: {{audi.closing_time}}</p>\\n          <button type=\\\"button\\\" class=\\\"btn btn-danger\\\" data-toggle=\\\"modal\\\" data-target=\\\".dataModal\\\"\\n            ng-click=\\\"removeAudi(audi.id)\\\">Delete</button>\\n          <button type=\\\"button\\\" class=\\\"btn btn-primary\\\" data-toggle=\\\"modal\\\" data-target=\\\".dataModal\\\"\\n            ng-click=\\\"editAudi(audi.id)\\\">Edit Audi </button>\\n        </div>\\n      </div>\\n    </div>\\n    <div>\\n      <create-audi-directive></create-audi-directive>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./movie-ticketing/movie/create-theatre/create-theatre.template.html?");

/***/ }),

/***/ "./movie-ticketing/movie/movie-list/movie-list.controller.js":
/*!*******************************************************************!*\
  !*** ./movie-ticketing/movie/movie-list/movie-list.controller.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable object-shorthand */\nangular.module('movieTicketing.movie')\n  .controller('MovieListController', ['$scope', 'movieService', '$state',\n    function MovieListController($scope, movieService, $state) {\n      $scope.loading = true;\n      movieService.movieList().then((response) => {\n        $scope.movies = response.plain();\n        $scope.loading = false;\n      });\n      function movieDetails(id) {\n        $state.go('homeNavBar.createMovie', { id: id });\n      }\n      function bookTicket(id) {\n        $state.go('homeNavBar.bookTicket', { movieId: id });\n      }\n      function createMovie() {\n        $state.go('homeNavBar.createMovie');\n      }\n      angular.extend($scope, {\n        createMovie: createMovie,\n        movieDetails: movieDetails,\n        bookTicket: bookTicket,\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/movie/movie-list/movie-list.controller.js?");

/***/ }),

/***/ "./movie-ticketing/movie/movie-list/movie-list.template.html":
/*!*******************************************************************!*\
  !*** ./movie-ticketing/movie/movie-list/movie-list.template.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"main-page\\\" ng-show=\\\"loading || inProcess\\\">\\n    <img class=\\\"loader-gif main-page\\\" src=\\\"/movie-ticketing/Assets/Images/load.gif\\\" />\\n</div>\\n<div ng-hide=\\\"loading\\\">\\n    <div class=\\\"row\\\">\\n        <h1 class=\\\"main-page col-6\\\">Movie List</h1>\\n        <button ng-if=\\\"admin\\\" type=\\\"button\\\" class=\\\"main-page btn btn-success col-1\\\" ng-click=\\\"createMovie()\\\">Create Movie</button>\\n    </div>\\n    <div ng-repeat=\\\"movie in movies\\\">\\n        <div class=\\\"card main-page\\\">\\n            <h4 class=\\\"card-header\\\">Name: {{movie.name}}</h4>\\n            <div class=\\\"card-body\\\">\\n                <h5 class=\\\"card-title\\\">Duration: {{movie.duration}} hr</h5>\\n                <h5 class=\\\"card-title\\\">Languages:</h5>\\n                <div ng-repeat=\\\"language in movie.language\\\">\\n                    <p class=\\\"card-title\\\">- {{language}}</p>\\n                </div>\\n                <h5 class=\\\"card-title\\\">Movie Types</h5>\\n                <div ng-repeat=\\\"type in movie.movie_type\\\">\\n                    <p class=\\\"card-title\\\">- {{type}}\\n                </div>\\n                <button ng-if=\\\"admin\\\" type=\\\"button\\\" class=\\\"btn btn-primary\\\" ng-click=\\\"movieDetails(movie.id)\\\">Movie\\n                    Details</button>\\n                <button ng-if=\\\"!admin\\\" type=\\\"button\\\" class=\\\"btn btn-primary\\\" ng-click=\\\"bookTicket(movie.id)\\\">Book\\n                    Ticket</button>\\n            </div>\\n        </div>\\n    </div>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./movie-ticketing/movie/movie-list/movie-list.template.html?");

/***/ }),

/***/ "./movie-ticketing/movie/movie.module.js":
/*!***********************************************!*\
  !*** ./movie-ticketing/movie/movie.module.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (angular.module('movieTicketing.movie', ['ngMessages', 'angularjsToast']));\n\n\n//# sourceURL=webpack:///./movie-ticketing/movie/movie.module.js?");

/***/ }),

/***/ "./movie-ticketing/movie/movie.service.js":
/*!************************************************!*\
  !*** ./movie-ticketing/movie/movie.service.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable object-shorthand */\nangular.module('movieTicketing.movie')\n  .service('movieService', ['Restangular', 'constant',\n    function movieService(Restangular, constant) {\n      function movieList() {\n        return Restangular.one(constant.URL.MOVIE_LIST).get();\n      }\n      function createMovie(movieObject) {\n        return Restangular.all(constant.URL.MOVIE_LIST).post(movieObject);\n      }\n      function movieDetails(uid) {\n        return Restangular.one(constant.URL.MOVIE_DETAIL.replace(':id', uid)).get();\n      }\n      function freeSlots(dates) {\n        return Restangular.one(constant.URL.FREE_SLOTS).get(dates);\n      }\n      function slotBooking(createSlot) {\n        return Restangular.all(constant.URL.SLOT_BOOKING).post(createSlot);\n      }\n      function bookSlot(bookRequestObject, movieId) {\n        return Restangular.all(constant.URL.BOOK_SLOT.replace(':id', movieId)).post(bookRequestObject);\n      }\n      function updateMovieDetails(movieId, movieObject) {\n        return Restangular.one(constant.URL.UPDATE_MOVIE.replace(':id', movieId)).patch(movieObject);\n      }\n      function cancelBooking(slotId) {\n        return Restangular.one(constant.URL.DELETE_SLOT.replace(':id', slotId)).remove();\n      }\n      angular.extend(this, {\n        movieList: movieList,\n        createMovie: createMovie,\n        movieDetails: movieDetails,\n        freeSlots: freeSlots,\n        slotBooking: slotBooking,\n        bookSlot: bookSlot,\n        updateMovieDetails: updateMovieDetails,\n        cancelBooking: cancelBooking,\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/movie/movie.service.js?");

/***/ }),

/***/ "./movie-ticketing/movie/theatre-list/theatre-list.controller.js":
/*!***********************************************************************!*\
  !*** ./movie-ticketing/movie/theatre-list/theatre-list.controller.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable object-shorthand */\nangular.module('movieTicketing.movie')\n  .controller('TheatreListController', ['theatreService', '$scope', '$state',\n    function TheatreListController(theatreService, $scope, $state) {\n      theatreService.theatreList().then((response) => {\n        $scope.theatres = response.plain();\n      });\n      function editTheatre(id) {\n        $state.go('homeNavBar.createTheatre', { id: id });\n      }\n      function createTheatre() {\n        $state.go('homeNavBar.createTheatre');\n      }\n      angular.extend($scope, {\n        createTheatre: createTheatre,\n        editTheatre: editTheatre,\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/movie/theatre-list/theatre-list.controller.js?");

/***/ }),

/***/ "./movie-ticketing/movie/theatre-list/theatre-list.template.html":
/*!***********************************************************************!*\
  !*** ./movie-ticketing/movie/theatre-list/theatre-list.template.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row\\\">\\n    <h1 class=\\\"main-page col-6\\\">Theatre List</h1>&nbsp;\\n    <button type=\\\"button\\\" class=\\\"main-page btn btn-success col-1\\\" ng-click=\\\"createTheatre()\\\">Create Theatre</button>\\n</div>\\n<div ng-repeat=\\\"theatre in theatres\\\">\\n    <div class=\\\"card main-page\\\">\\n        <h5 class=\\\"card-header\\\">{{theatre.name}}</h5>\\n        <div class=\\\"card-body\\\">\\n            <h5 class=\\\"card-title\\\">Address-</h5>\\n            <p class=\\\"card-text\\\">City: {{theatre.city}}</p>\\n            <p class=\\\"card-text\\\">State: {{theatre.state}}</p>\\n            <p class=\\\"card-text\\\">Zipcode: {{theatre.zipcode}}</p>\\n            <button type=\\\"button\\\" class=\\\"btn btn-primary\\\" ng-click=\\\"editTheatre(theatre.id)\\\">Details</button>\\n        </div>\\n    </div>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./movie-ticketing/movie/theatre-list/theatre-list.template.html?");

/***/ }),

/***/ "./movie-ticketing/movie/theatre.service.js":
/*!**************************************************!*\
  !*** ./movie-ticketing/movie/theatre.service.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable object-shorthand */\nangular.module('movieTicketing.movie')\n  .service('theatreService', ['Restangular', 'constant',\n    function theatreService(Restangular, constant) {\n      function createTheatre(theatreOject) {\n        return Restangular.all(constant.URL.THEATRE).post(theatreOject);\n      }\n      function theatreList() {\n        return Restangular.one(constant.URL.THEATRE).get();\n      }\n      function theatreDetail(uid) {\n        return Restangular.one(constant.URL.THEATRE_DETAIL.replace(':id', uid)).get();\n      }\n      function updateTheatre(theatreOject, uid) {\n        return Restangular.one(constant.URL.THEATRE_DETAIL.replace(':id', uid)).patch(theatreOject);\n      }\n      angular.extend(this, {\n        createTheatre: createTheatre,\n        theatreList: theatreList,\n        theatreDetail: theatreDetail,\n        updateTheatre: updateTheatre,\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/movie/theatre.service.js?");

/***/ }),

/***/ "./movie-ticketing/nav-bar/home-nav-bar.template.html":
/*!************************************************************!*\
  !*** ./movie-ticketing/nav-bar/home-nav-bar.template.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div ng-if=\\\"!inProcess\\\">\\n    <div ng-if=\\\"admin\\\" class=\\\"side-nav\\\" ng-controller=\\\"NavBarController\\\">\\n        <a ui-sref=\\\"homeNavBar.movieList\\\" class=\\\"border-style\\\">Movie Ticketing</a>\\n        <a ui-sref=\\\"homeNavBar.movieList\\\">Movies</a>\\n        <a ui-sref=\\\"homeNavBar.theatreList\\\">Theatres</a>\\n        <a ui-sref=\\\"navBar.login\\\" ng-click=\\\"logout()\\\">Logout</a>\\n    </div>\\n    <div ng-if=\\\"!admin\\\" class=\\\"side-nav\\\" ng-controller=\\\"NavBarController\\\">\\n        <a ui-sref=\\\"homeNavBar.movieList\\\" class=\\\"border-style\\\">Movie Ticketing</a>\\n        <a ui-sref=\\\"homeNavBar.movieList\\\">Movies</a>\\n        <a ui-sref=\\\"homeNavBar.profile\\\">Profile</a>\\n        <a ui-sref=\\\"homeNavBar.bookings\\\">Bookings</a>        \\n        <a ui-sref=\\\"navBar.login\\\" ng-click=\\\"logout()\\\">Logout</a>\\n    </div>\\n    <ui-view></ui-view>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./movie-ticketing/nav-bar/home-nav-bar.template.html?");

/***/ }),

/***/ "./movie-ticketing/nav-bar/nav-bar.template.html":
/*!*******************************************************!*\
  !*** ./movie-ticketing/nav-bar/nav-bar.template.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<body>\\n    <div class=\\\"side-nav\\\">\\n        <a ui-sref=\\\"navBar.login\\\" class=\\\"border-style\\\">Movie Ticketing</a>\\n        <a ui-sref=\\\"navBar.login\\\">Login</a>\\n        <a ui-sref=\\\"navBar.signUp\\\">SignUp</a>\\n    </div>\\n    <ui-view></ui-view>\\n</body>\";\n\n//# sourceURL=webpack:///./movie-ticketing/nav-bar/nav-bar.template.html?");

/***/ }),

/***/ "./movie-ticketing/user/bookings/bookings.controller.js":
/*!**************************************************************!*\
  !*** ./movie-ticketing/user/bookings/bookings.controller.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('movieTicketing.movie')\n  .controller('BookingsController', ['$scope', 'userService',\n    function BookingsController($scope, userService) {\n      $scope.loading = true;\n      userService.bookings().then((response) => {\n        $scope.loading = false;\n        $scope.bookings = response.plain();\n      }, () => {\n        $scope.loading = false;\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/user/bookings/bookings.controller.js?");

/***/ }),

/***/ "./movie-ticketing/user/bookings/bookings.template.html":
/*!**************************************************************!*\
  !*** ./movie-ticketing/user/bookings/bookings.template.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"main-page\\\" ng-show=\\\"loading\\\">\\n    <img class=\\\"loader-gif main-page\\\" src=\\\"/movie-ticketing/Assets/Images/load.gif\\\" />\\n</div>\\n<div ng-hide=\\\"loading\\\">\\n    <h1 class=\\\"main-page\\\">MY BOOKINGS</h1>\\n    <div ng-repeat=\\\"booking in bookings\\\">\\n        <div class=\\\"card main-page\\\">\\n            <h5 class=\\\"card-body width\\\">\\n                <h5 class=\\\"card-header\\\">Ticket Details</h5>\\n                <p class=\\\"card-title\\\">Movie Name: {{booking.slot.movie.name}}</p>\\n                <p class=\\\"card-title\\\">Movie Genre: {{booking.slot.movie.about}}</p>\\n                <p class=\\\"card-title\\\">time: {{booking.slot.slot}}:00 hr</p>\\n                <p class=\\\"card-title\\\">Date: {{booking.slot.date}}</p>\\n                <p class=\\\"card-title\\\">Auditorium: {{booking.slot.audi.name}}</p>\\n                <p class=\\\"card-title\\\">Seats Booked: {{booking.seats_booked}}</p>\\n                <p class=\\\"card-title\\\">Booking Status: {{booking.booking_status}}</p>\\n        </div>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./movie-ticketing/user/bookings/bookings.template.html?");

/***/ }),

/***/ "./movie-ticketing/user/login/login.controller.js":
/*!********************************************************!*\
  !*** ./movie-ticketing/user/login/login.controller.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable object-shorthand */\nangular.module('movieTicketing.user')\n  .controller('LoginController', ['$scope', 'userService', '$cookies', '$state', 'toast',\n    function LoginController($scope, userService, $cookies, $state, toast) {\n      $scope.userLoginOject = {\n        username: '',\n        password: '',\n      };\n\n      $scope.processing = false;\n      $scope.loginButton = 'Login';\n      function login() {\n        if ($scope.loginForm.$invalid) {\n          $scope.requiredErrorMessage = true;\n        } else {\n          $scope.processing = true;\n          $scope.loginButton = 'Logging in...';\n          userService.login($scope.userLoginOject).then((response) => {\n            toast({\n              duration: 1000,\n              message: 'Successfully logged in',\n              className: 'alert-success',\n            });\n            $scope.processing = false;\n            $scope.loginButton = 'Login';\n            $cookies.put('token', response.token);\n            $state.go('homeNavBar.movieList');\n          }, (response) => {\n            $scope.non_field_errors = '';\n            for (let i = 0; i < response.data.non_field_errors.length; i++) {\n              $scope.non_field_errors += response.data.non_field_errors[i];\n            }\n            $scope.invalidCredentiails = true;\n            $scope.processing = false;\n            $scope.loginButton = 'Login';\n          });\n        }\n      }\n      angular.extend($scope, {\n        login: login,\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/user/login/login.controller.js?");

/***/ }),

/***/ "./movie-ticketing/user/login/login.template.html":
/*!********************************************************!*\
  !*** ./movie-ticketing/user/login/login.template.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<html>\\n<div class=\\\"main-page\\\">\\n    <h2 class=\\\"container width\\\">Login</h2>\\n    <p class=\\\"container width span-error\\\">{{non_field_errors}}</p>\\n    <form class=\\\"container width\\\" name=\\\"loginForm\\\">\\n        <div class=\\\"form-group\\\">\\n            <label class=\\\"required\\\" for=\\\"email\\\">Email:</label>\\n            <input type=\\\"email\\\" class=\\\"form-control\\\" placeholder=\\\"Enter email\\\" name=\\\"email\\\" autocomplete=\\\"off\\\"\\n                ng-model=\\\"userLoginOject.username\\\" pattern=\\\"^[\\\\w\\\\.]+@([\\\\w-]+\\\\.)+[\\\\w]{2,4}$\\\" required>\\n            <div ng-if=\\\"requiredErrorMessage || loginForm.email.$touched\\\" ng-messages=\\\"loginForm.email.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n            </div>\\n        </div>\\n\\n        <div class=\\\"form-group\\\">\\n            <label class=\\\"required\\\" for=\\\"pwd\\\">Password:</label>\\n            <input type=\\\"password\\\" class=\\\"form-control\\\" placeholder=\\\"Enter password\\\" name=\\\"password\\\"\\n                ng-model=\\\"userLoginOject.password\\\" required>\\n            <div ng-if=\\\"requiredErrorMessage || loginForm.password.$touched\\\" ng-messages=\\\"loginForm.password.$error\\\"\\n                class=\\\"span-error\\\" role=\\\"alert\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n            </div>\\n        </div>\\n\\n        <button type=\\\"submit\\\" class=\\\"btn btn-primary\\\" ng-click=login() ng-disabled=\\\"Processing\\\">{{loginButton}}</button>\\n\\n    </form>\\n</div>\\n\\n</html>\";\n\n//# sourceURL=webpack:///./movie-ticketing/user/login/login.template.html?");

/***/ }),

/***/ "./movie-ticketing/user/profile/profile.controller.js":
/*!************************************************************!*\
  !*** ./movie-ticketing/user/profile/profile.controller.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable object-shorthand */\nangular.module('movieTicketing.user')\n  .controller('ProfileController', ['userService', '$scope', 'movieService', 'toast', '$state',\n    function ProfileController(userService, $scope, movieService, toast, $state) {\n      $scope.loading = true;\n      $scope.disable = true;\n      $scope.updateButton = false;\n      $scope.userUpdateObject = {\n        name: '',\n        gender: '',\n      };\n      $scope.passwordObject = {\n        password: '',\n        new_password: '',\n      };\n      userService.getUser().then((response) => {\n        $scope.loading = false;\n        $scope.userDetails = response.plain();\n        $scope.userUpdateObject = $scope.userDetails;\n      }, () => {\n        $scope.loading = false;\n      });\n      function changePassword() {\n        if ($scope.passwordChangeForm.$invalid) {\n          $scope.requiredErrorMessage = true;\n        } else {\n          userService.changePassword($scope.passwordObject).then(() => {\n            $('.modal').modal('toggle');\n            toast({\n              duration: 2000,\n              message: 'Password Changed',\n              className: 'alert-success',\n            });\n          }, () => {\n          });\n        }\n      }\n      function editForm() {\n        $scope.disable = false;\n        $scope.updateButton = true;\n      }\n      function updateForm() {\n        $scope.loading = true;\n        userService.updateUserDetails($scope.userUpdateObject).then((response) => {\n          $scope.loading = false;\n          $scope.userDetails = response.plain();\n          toast({\n            duration: 2000,\n            message: 'Profile Updated',\n            className: 'alert-success',\n          });\n          $state.reload();\n        });\n      }\n      angular.extend($scope, {\n        changePassword: changePassword,\n        editForm: editForm,\n        updateForm: updateForm,\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/user/profile/profile.controller.js?");

/***/ }),

/***/ "./movie-ticketing/user/profile/profile.template.html":
/*!************************************************************!*\
  !*** ./movie-ticketing/user/profile/profile.template.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"main-page\\\" ng-show=\\\"loading\\\">\\n    <img class=\\\"loader-gif main-page\\\" src=\\\"/movie-ticketing/Assets/Images/load.gif\\\" />\\n</div>\\n<div>\\n    <h1 class=\\\"main-page\\\">Profile</h1>\\n    <form class=\\\"main-page container\\\" name=\\\"profileForm\\\">\\n        <fieldset ng-disabled=\\\"disable\\\">\\n            <div class=\\\"form-group\\\">\\n                <label for=\\\"name\\\"><b>Name</b></label>\\n                <input type=\\\"name\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter name\\\" name=\\\"name\\\"\\n                    ng-model=\\\"userUpdateObject.name\\\" autocomplete=\\\"off\\\" ng-value=\\\"userDetails.name\\\" required>\\n                <div ng-if=\\\"requiredErrorMessage || theatreForm.name.$touched\\\" ng-messages=\\\"theatreForm.name.$error\\\">\\n                    <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n                </div>\\n            </div>\\n            <div class=\\\"form-group\\\">\\n                <label for=\\\"name\\\"><b>Email</b></label>\\n                <input type=\\\"name\\\" class=\\\"form-control form-group\\\" name=\\\"name\\\" ng-model=\\\"userUpdateObject.email\\\"\\n                    autocomplete=\\\"off\\\" ng-value=\\\"userDetails.email\\\" ng-disabled=\\\"true\\\" required>\\n                <div ng-if=\\\"requiredErrorMessage || theatreForm.name.$touched\\\" ng-messages=\\\"theatreForm.name.$error\\\">\\n                    <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n                </div>\\n            </div>\\n            <div class=\\\"form-group\\\">\\n                <label><b>Gender:</b></label>\\n                <br>\\n                <input type=\\\"radio\\\" name=\\\"userGender\\\" ng-value=\\\"'M'\\\" ng-model=\\\"userUpdateObject.gender\\\" required>\\n                Male\\n                <input type=\\\"radio\\\" name=\\\"userGender\\\" ng-value=\\\"'F'\\\" ng-model=\\\"userUpdateObject.gender\\\" required>\\n                Female\\n                <div ng-if=\\\"registrationForm.$submitted\\\" ng-messages=\\\"registrationForm.userGender.$error\\\">\\n                    <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n                </div>\\n            </div>\\n\\n        </fieldset>\\n    </form>\\n    <button type=\\\"button\\\" class=\\\"btn btn-primary main-page\\\" ng-click=\\\"editForm()\\\">Edit</button>\\n    <button type=\\\"button\\\" ng-show=\\\"updateButton\\\" class=\\\"btn btn-primary main-page\\\"\\n        ng-click=\\\"updateForm()\\\">Update</button>\\n    <button type=\\\"button\\\" class=\\\"btn btn-primary main-page\\\" data-toggle=\\\"modal\\\" data-target=\\\".dataModal\\\">Change Password\\n    </button>\\n\\n    <div class=\\\"modal dataModal\\\">\\n        <form name=\\\"passwordChangeForm\\\">\\n            <div class=\\\"modal-dialog\\\">\\n                <div class=\\\"modal-content\\\">\\n                    <div class=\\\"modal-header\\\">\\n                        <h4 class=\\\"modal-title\\\">Change Password</h4>\\n                    </div>\\n                    <div class=\\\"modal-body\\\">\\n                        <div class=\\\"form-group\\\">\\n                            <label class=\\\"required\\\" for=\\\"password\\\"><b>Old Password</b></label>\\n                            <input type=\\\"password\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter old Password\\\"\\n                                name=\\\"oldPassword\\\" ng-model=\\\"passwordObject.password\\\" autocomplete=\\\"off\\\" required>\\n                            <div ng-if=\\\"requiredErrorMessage || passwordChangeForm.oldPassword.$touched\\\"\\n                                ng-messages=\\\"passwordChangeForm.oldPassword.$error\\\">\\n                                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n                            </div>\\n                        </div>\\n                        <div class=\\\"form-group\\\">\\n                            <label class=\\\"required\\\" for=\\\"newPassword\\\"><b>New Password</b></label>\\n                            <input type=\\\"password\\\" class=\\\"form-control form-group\\\" placeholder=\\\"Enter new Password\\\"\\n                                name=\\\"newPassword\\\" ng-model=\\\"passwordObject.new_password\\\" autocomplete=\\\"off\\\" required>\\n                            <div ng-if=\\\"requiredErrorMessage || passwordChangeForm.newPassword.$touched\\\"\\n                                ng-messages=\\\"passwordChangeForm.newPassword.$error\\\">\\n                                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n                            </div>\\n                        </div>\\n                        <div class=\\\"form-group\\\">\\n                            <label class=\\\"required\\\" for=\\\"confirmPassword\\\"><b>Confirm New Password</b></label>\\n                            <input type=\\\"password\\\" class=\\\"form-control form-group\\\"\\n                                placeholder=\\\"Enter new Password again\\\" name=\\\"confirmPassword\\\"\\n                                ng-model=\\\"confirm_password\\\" autocomplete=\\\"off\\\" required>\\n                            <span class=\\\"span-error\\\"\\n                                ng-show=\\\"passwordChangeForm.password != confirmPassword && passwordChangeForm.confirmPassword.$touched\\\">Passwords\\n                                do not match.</span>\\n                            <div ng-if=\\\"requiredErrorMessage || passwordChangeForm.confirmPassword.$touched\\\"\\n                                ng-messages=\\\"passwordChangeForm.confirmPassword.$error\\\">\\n                                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n                            </div>\\n                        </div>\\n                    </div>\\n                    <div class=\\\"modal-footer\\\">\\n                        <button type=\\\"button\\\" class=\\\"btn btn-danger\\\" data-dismiss=\\\"modal\\\">Close</button>\\n                        <button type=\\\"button\\\" class=\\\"btn btn-primary\\\" ng-click=\\\"changePassword()\\\"\\n                            ng-disabled=\\\"passwordObject.new_password != confirm_password && passwordChangeForm.newPassword.$dirty && passwordChangeForm.confirmPassword.$dirty\\\">\\n                            Change Password</button>\\n                    </div>\\n                </div>\\n            </div>\\n        </form>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./movie-ticketing/user/profile/profile.template.html?");

/***/ }),

/***/ "./movie-ticketing/user/sign-up/sign-up.controller.js":
/*!************************************************************!*\
  !*** ./movie-ticketing/user/sign-up/sign-up.controller.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable object-shorthand */\nangular.module('movieTicketing.user')\n  .controller('SignUpController', ['$scope', 'userService', '$cookies', '$state',\n    function SignUpController($scope, userService, $cookies, $state) {\n      $scope.userSignUpOject = {\n        name: '',\n        email: '',\n        gender: '',\n        password: '',\n      };\n      $scope.processing = false;\n      $scope.registerButton = 'Register';\n      function register() {\n        if (!$scope.registrationForm.$invalid) {\n          $scope.processing = true;\n          $scope.registerButton = 'Signing Up...';\n          userService.register($scope.userSignUpOject).then((response) => {\n            $scope.processing = false;\n            $scope.registerButton = 'Register';\n            // $cookies.put('token', response.token);\n            // $state.go('homeNavBar.movieList');\n            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');\n            console.log(response);\n            console.log(response.token);\n            $cookies.put('token', response.token);\n            $state.go('homeNavBar.movieList');\n          }, (response) => {\n            if (!response.data.non_field_errors) {\n              $scope.registrationForm.email.$error = response.data.email;\n            } else {\n              $scope.non_field_errors = '';\n              for (let i = 0; i < response.data.non_field_errors.length; i++) {\n                $scope.non_field_errors += response.data.non_field_errors[i];\n              }\n            }\n            $scope.processing = false;\n            $scope.registerButton = 'Register';\n          });\n        }\n      }\n      module.exports = { SignUpController };\n      angular.extend($scope, {\n        register: register,\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/user/sign-up/sign-up.controller.js?");

/***/ }),

/***/ "./movie-ticketing/user/sign-up/sign-up.template.html":
/*!************************************************************!*\
  !*** ./movie-ticketing/user/sign-up/sign-up.template.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<html>\\n<div class=\\\"main-page\\\">\\n    <h2 class=\\\"container width\\\">Register</h2>\\n    <form class=\\\"container\\\" name=\\\"registrationForm\\\" novalidate>\\n        <div class=\\\"form-group\\\">\\n            <label class=\\\"required\\\" for=\\\"name\\\">Name:</label>\\n            <input type=\\\"name\\\" class=\\\"form-control\\\" placeholder=\\\"Enter name\\\" name=\\\"name\\\" autocomplete=\\\"off\\\"\\n                ng-model=\\\"userSignUpOject.name\\\" required>\\n            <div ng-if=\\\"registrationForm.$submitted || registrationForm.name.$touched\\\"\\n                ng-messages=\\\"registrationForm.name.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n            </div>\\n        </div>\\n        <div class=\\\"form-group\\\">\\n            <label class=\\\"required\\\" for=\\\"email\\\">Email:</label>\\n            <input type=\\\"email\\\" class=\\\"form-control\\\" placeholder=\\\"Enter email\\\" name=\\\"email\\\" autocomplete=\\\"off\\\"\\n                ng-model=\\\"userSignUpOject.email\\\" pattern=\\\"^[\\\\w\\\\.]+@([\\\\w-]+\\\\.)+[\\\\w]{2,4}$\\\" required>\\n            <div ng-if=\\\"registrationForm.$submitted || registrationForm.email.$touched\\\"\\n                ng-messages=\\\"registrationForm.email.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n            </div>\\n        </div>\\n        <div class=\\\"form-group\\\">\\n            <label class=\\\"required\\\"><b>Gender:</b></label>\\n            <br>\\n            <input type=\\\"radio\\\" name=\\\"userGender\\\" ng-value=\\\"'M'\\\" ng-model=\\\"userSignUpOject.gender\\\" required>\\n            Male\\n            <input type=\\\"radio\\\" name=\\\"userGender\\\" ng-value=\\\"'F'\\\" ng-model=\\\"userSignUpOject.gender\\\" required>\\n            Female\\n            <div ng-if=\\\"registrationForm.$submitted\\\" ng-messages=\\\"registrationForm.userGender.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n            </div>\\n        </div>\\n        <div class=\\\"form-group\\\">\\n            <label class=\\\"required\\\" for=\\\"password\\\">Password:</label>\\n            <input type=\\\"password\\\" class=\\\"form-control\\\" placeholder=\\\"Enter password\\\" ng-minlength=\\\"8\\\" name=\\\"password\\\"\\n                ng-model=\\\"userSignUpOject.password\\\" required>\\n            <div ng-if=\\\"registrationForm.$submitted || registrationForm.password.$touched\\\"\\n                ng-messages=\\\"registrationForm.password.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n            </div>\\n        </div>\\n        <div class=\\\"form-group\\\">\\n            <label class=\\\"required\\\" for=\\\"confirm_password\\\">Confirm Password:</label>\\n            <input type=\\\"password\\\" class=\\\"form-control\\\" placeholder=\\\"Enter password again\\\" name=\\\"confirm_password\\\"\\n                ng-model=\\\"confirm_password\\\" required>\\n            <span class=\\\"span-error\\\"\\n                ng-show=\\\"userSignUpOject.password != confirm_password && registrationForm.confirm_password.$touched\\\">Passwords\\n                do not match.</span>\\n            <div ng-if=\\\"registrationForm.$submitted || registrationForm.confirm_password.$touched\\\"\\n                ng-messages=\\\"registrationForm.confirm_password.$error\\\">\\n                <div ng-messages-include=\\\"movie-ticketing/commons/messages.html\\\"></div>\\n            </div>\\n        </div>\\n        <button type=\\\"submit\\\" class=\\\"btn btn-primary\\\" ng-click=register()\\n            ng-disabled=\\\"(userSignUpOject.password != confirm_password && registrationForm.password.$dirty && registrationForm.confirm_password.$dirty) || processing\\\">\\n            {{registerButton}}</button>\\n    </form>\\n    <p class=\\\"container width span-error\\\">{{non_field_errors}}</p>\\n</div>\\n\\n</html>\";\n\n//# sourceURL=webpack:///./movie-ticketing/user/sign-up/sign-up.template.html?");

/***/ }),

/***/ "./movie-ticketing/user/user.module.js":
/*!*********************************************!*\
  !*** ./movie-ticketing/user/user.module.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (angular.module('movieTicketing.user', ['restangular', 'ngCookies', 'ngMessages', 'angularjsToast']));\n\n\n//# sourceURL=webpack:///./movie-ticketing/user/user.module.js?");

/***/ }),

/***/ "./movie-ticketing/user/user.service.js":
/*!**********************************************!*\
  !*** ./movie-ticketing/user/user.service.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable object-shorthand */\nangular.module('movieTicketing.user')\n  .service('userService', ['Restangular', 'constant',\n    function userService(Restangular, constant) {\n      function login(userLoginOject) {\n        return Restangular.all(constant.URL.USER_LOGIN).post(userLoginOject);\n      }\n      function register(userSignUpOject) {\n        return Restangular.all(constant.URL.USERS).post(userSignUpOject);\n      }\n      function getUser() {\n        return Restangular.one(constant.URL.USERS).get();\n      }\n      function changePassword(passwordObject) {\n        return Restangular.one(constant.URL.CHANGE_PASSWORD).patch(passwordObject);\n      }\n      function updateUserDetails(userUpdateObject) {\n        return Restangular.one(constant.URL.UPDATE_DETAIL).patch(userUpdateObject);\n      }\n      function bookings() {\n        return Restangular.one(constant.URL.MY_BOOKINGS).get();\n      }\n      angular.extend(this, {\n        login: login,\n        register: register,\n        getUser: getUser,\n        changePassword: changePassword,\n        updateUserDetails: updateUserDetails,\n        bookings: bookings,\n      });\n    }]);\n\n\n//# sourceURL=webpack:///./movie-ticketing/user/user.service.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./movie-ticketing/app.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./movie-ticketing/app.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".side-nav {\\n    height: 100%;\\n    width: 15%;\\n    position: fixed;\\n    z-index: 1;\\n    top: 0;\\n    left: 0;\\n    background-color: #111;\\n    overflow-x: hidden;\\n    padding-top: 20px;\\n  }\\n  \\n.side-nav a {\\n  padding: 6px 6px 6px 32px;\\n  text-decoration: none;\\n  font-size: 25px;\\n  color: #818181;\\n  display: block;\\n}\\n\\n.main-page {\\n  margin-left: 15%;\\n}\\n\\n.side-nav a:hover {\\n  color: #f1f1f1;\\n}\\n\\nbody {\\n  font-family: \\\"Lato\\\", sans-serif;\\n}\\n\\n.span-error {\\n  color : red\\n}\\n\\n.container {\\nmargin: 20px auto;\\n}\\n\\n.loader-gif {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  width: 200px;\\n  height: 200px;\\n  margin-top: -100px;\\n  margin-left: -100px;\\n}\\n\\n.border-style {\\n  border-bottom-style: solid;\\n  border-width: thin\\n}\\n\\n.required:before { \\n  content:\\\"*\\\";\\n  color: red;\\n  padding-right: 5px\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./movie-ticketing/app.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ 0:
/*!********************************************************************************************************!*\
  !*** multi ./movie-ticketing/app.js ./movie-ticketing/app.config.js ./movie-ticketing/app.constant.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./movie-ticketing/app.js */\"./movie-ticketing/app.js\");\n__webpack_require__(/*! ./movie-ticketing/app.config.js */\"./movie-ticketing/app.config.js\");\nmodule.exports = __webpack_require__(/*! ./movie-ticketing/app.constant.js */\"./movie-ticketing/app.constant.js\");\n\n\n//# sourceURL=webpack:///multi_./movie-ticketing/app.js_./movie-ticketing/app.config.js_./movie-ticketing/app.constant.js?");

/***/ })

/******/ });