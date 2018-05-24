import './attendanceHeader.less';

class AttendanceHeaderController {
    $onInit() {
        this.attendanceHeaderList = [{
            attendanceDate: '2017-08-10'
        }, {
            attendanceDate: '2017-08-11'
        }];
    }
}

export const AttendanceHeaderComponent = {
    template: require('./attendanceHeader.html'),
    controller: AttendanceHeaderController
}