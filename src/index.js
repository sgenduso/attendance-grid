import angular from 'angular';

import 'angular/angular-csp.css';
import './index.scss';

import attendanceGridModule from './attendanceGrid/attendanceGridModule';

angular.module('main', [
  attendanceGridModule,
]);

angular.bootstrap(document.documentElement, ['main']);

