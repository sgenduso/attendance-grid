

import angular from 'angular';
import { AttendanceHeaderComponent } from './AttendanceComponent';

export default angular
  .module('attendanceGrid', [])
  .component('attendanceHeader', AttendanceHeaderComponent)
  .name;

