/**
 * Given a list of appointments, find all the conflicting
 * appointments.
 */
class Interval {
  start: number;
  end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

function get_all_conflicts(intervals: Interval[]) {
  intervals.sort((a, b) => a.start - b.start);
  const conflicts: Interval[] = [];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) {
      // please note the comparison above, it is "<" and not
      // "<=" while merging we needed "<=" comparison, as we
      // will be merging the two intervals having condition
      // "intervals[i][start] === intervals[i - 1][end]" but
      // such intervals don't represent conflicting
      // appointments as one starts right after the other
      conflicts.push(intervals[i - 1], intervals[i]);
    }
  }
  return conflicts;
}

console.log(
  `Can attend all appointments: ${get_all_conflicts([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
  ])}`
);

console.log(
  `Can attend all appointments: ${get_all_conflicts([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
  ])}`
);

console.log(
  `Can attend all appointments: ${get_all_conflicts([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
  ])}`
);

export {};
