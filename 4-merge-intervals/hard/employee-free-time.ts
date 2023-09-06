const Heap = require("collections/heap"); //http://www.collectionsjs.com

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

class EmployeeInterval {
  interval: Interval;
  employeeIndex: number;
  intervalIndex: number;
  constructor(
    interval: Interval,
    employeeIndex: number,
    intervalIndex: number
  ) {
    this.interval = interval; // interval representing employee's working hours
    // index of the list containing working hours of this
    // employee
    this.employeeIndex = employeeIndex;
    this.intervalIndex = intervalIndex; // index of the interval in the employee list
  }
}

function find_employee_free_time(schedule: Interval[][]) {
  let n = schedule.length,
    result: Interval[] = [];
  if (schedule === null || n === 0) {
    return result;
  }
  const minHeap = new Heap(
    [],
    null,
    (a: EmployeeInterval, b: EmployeeInterval) =>
      b.interval.start - a.interval.start
  );
  // insert the first interval of each employee to the queue
  for (let i = 0; i < n; i++) {
    minHeap.push(new EmployeeInterval(schedule[i][0], i, 0));
  }
  let previousInterval = minHeap.peek().interval;
  while (minHeap.length > 0) {
    const queueTop = minHeap.pop();
    // if previousInterval is not overlapping with the next
    // interval, insert a free interval
    if (previousInterval.end < queueTop.interval.start) {
      result.push(new Interval(previousInterval.end, queueTop.interval.start));
      previousInterval = queueTop.interval;
    } else {
      // overlapping intervals, update the previousInterval if needed
      if (previousInterval.end < queueTop.interval.end) {
        previousInterval = queueTop.interval;
      }
    }
    // if there are more intervals available for(the same
    // employee, add their next interval
    const employeeSchedule = schedule[queueTop.employeeIndex];
    if (employeeSchedule.length > queueTop.intervalIndex + 1) {
      minHeap.push(
        new EmployeeInterval(
          employeeSchedule[queueTop.intervalIndex + 1],
          queueTop.employeeIndex,
          queueTop.intervalIndex + 1
        )
      );
    }
  }
  return result;
}

let input = [
  [new Interval(1, 3), new Interval(5, 6)],
  [new Interval(2, 3), new Interval(6, 8)],
];
process.stdout.write("Free intervals: ");
let result = find_employee_free_time(input);
for (let i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

input = [
  [new Interval(1, 3), new Interval(9, 12)],
  [new Interval(2, 4)],
  [new Interval(6, 8)],
];
process.stdout.write("Free intervals: ");
result = find_employee_free_time(input);
for (let i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

input = [
  [new Interval(1, 3)],
  [new Interval(2, 4)],
  [new Interval(3, 5), new Interval(7, 9)],
];
process.stdout.write("Free intervals: ");
result = find_employee_free_time(input);
for (let i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
