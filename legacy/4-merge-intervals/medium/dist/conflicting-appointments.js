"use strict";
exports.__esModule = true;
var Interval = /** @class */ (function () {
    function Interval(start, end) {
        this.start = start;
        this.end = end;
    }
    Interval.prototype.print_interval = function () {
        process.stdout.write("[" + this.start + ", " + this.end + "]");
    };
    return Interval;
}());
var can_attend_all_appointments = function (intervals) {
    // TODO: Write your code here
    intervals.sort(function (a, b) { return a.start - b.start; });
    var start = intervals[0].start, end = intervals[0].end;
    for (var i = 1; i < intervals.length; i++) {
        var interval = intervals[i];
        if (interval.start <= end) {
            // overlapping intervals, adjust the 'end'
            return false;
        }
        else {
            // non-overlapping interval, add the previous interval and reset
            start = interval.start;
            end = interval.end;
        }
    }
    return true;
};
console.log("Can attend all appointments: " + can_attend_all_appointments([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
]));
console.log("Can attend all appointments: " + can_attend_all_appointments([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
]));
console.log("Can attend all appointments: " + can_attend_all_appointments([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
]));
