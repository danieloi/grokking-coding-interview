import { Interval } from "./utils";

function mergeIntervals(intervals: Interval[]) {
    if (!intervals.length) return;

    let result: Interval[] = [];

    result.push(new Interval(intervals[0].start, intervals[0].end));

    let lastAddedInterval, curStart, curEnd, prevEnd;
    for (let i = 1; i < intervals.length; i++) {
        lastAddedInterval = result[result.length - 1];

        curStart = intervals[i].start;
        curEnd = intervals[i].end;
        prevEnd = lastAddedInterval.end;
    
        if (prevEnd >= curStart) {// we have an overlap
            result[result.length - 1].end = Math.max(curEnd, prevEnd);
        } else { // no overlap
            result.push(new Interval(curStart, curEnd));
        }
    }
    return result;
}

// Driver code
// Helper function to display intervals
function intervalListToStr(list) {
    let s = "[";
    for (let i = 0; i < list.length; i++) {
        s += list[i].formatInterval();
        if (i != list.length - 1) s += ", ";
    }
    s += "]";
    return s;
}

function main() {
    let v1 = [new Interval(1, 5), new Interval(3, 7), new Interval(4, 6)],
        v2 = [
            new Interval(1, 5),
            new Interval(4, 6),
            new Interval(6, 8),
            new Interval(11, 15),
        ],
        v3 = [
            new Interval(3, 7),
            new Interval(6, 8),
            new Interval(10, 12),
            new Interval(11, 15),
        ],
        v4 = [new Interval(1, 5)],
        v6 = [new Interval(1, 9), new Interval(3, 8), new Interval(4, 4)],
        v7 = [new Interval(1, 2), new Interval(3, 4), new Interval(8, 8)],
        v8 = [new Interval(1, 5), new Interval(1, 3)],
        v9 = [new Interval(1, 5), new Interval(6, 9)],
        v10 = [new Interval(0, 0), new Interval(1, 18), new Interval(1, 3)];

    let allIntervals = [v1, v2, v3, v4, v6, v7, v8, v9, v10];

    for (let i = 0; i < allIntervals.length; i++) {
        console.log(
            i + 1 + ". Intervals to merge:",
            intervalListToStr(allIntervals[i])
        );
        let result = mergeIntervals(allIntervals[i]);
        console.log("   Merged intervals:", intervalListToStr(result));
        console.log("-".repeat(100));
    }
}

main();