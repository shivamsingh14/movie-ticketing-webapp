import angular from 'angular';

import 'angular-cookies';
import uirouter from '@uirouter/angularjs';
import 'lodash';
import 'restangular';
import 'angular-messages';
import 'angularjs-toast';
import 'angular-sanitize';
import 'angular-animate';

import user from './user/user.module';
import movie from './movie/movie.module';

import './user/user.service';
import './movie/movie.service';
import './movie/theatre.service';
import './movie/audi.service';
import './app.css';
import './user/sign-up/sign-up.controller';
import './user/login/login.controller';
import './movie/create-theatre/create-theatre.controller';
import './movie/theatre-list/theatre-list.controller';
import './audi/create-audi/create-audi.controller';
import './movie/create-movie/create-movie.controller';
import './movie/movie-list/movie-list.controller';
import './movie/add-movie/add-movie.controller';
import './movie/book-ticket/book-ticket.controller';
import './user/profile/profile.controller';
import './user/bookings/bookings.controller';
import './commons/messages.html';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'angularjs-toast/angularjs-toast.min.css';

export default angular.module('movieTicketing', [user.name, movie.name, uirouter]);
