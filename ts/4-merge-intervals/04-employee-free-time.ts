import { Interval, display, MinHeap } from "./utils";

function employeeFreeTime(schedule: Interval[][]) {
  const heap = new MinHeap();

  // Iterate for all employees' schedules
  // and add start of each schedule's first interval along with
  // its index value and a value 0.
  for (let i = 0; i < schedule.length; i++) {
    const interval = schedule[i][0];
    heap.offer([interval.start, i, 0]);
  }

  // Take an empty array to store results.
  const result: Interval[] = [];

  // Set 'previous' to the start time of the first interval in the heap.
  const [
    firstIntervalStart,
    firstIntervalEmployeeIdx,
    firstIntervalIdx,
  ] = heap.peek()!;
  let previous =
    schedule[firstIntervalEmployeeIdx][firstIntervalIdx].start;

  // Iterate until the heap is empty.
  while (heap.size() > 0) {
    // Pop an element from the heap and set the values of i and j.
    const [_, i, j] = heap.poll()!;

    // Select an interval.
    const interval = schedule[i][j];

    // If the selected interval's start value is greater than the
    // previous value, it means that this interval is free.
    // So, add this interval (previous, interval's end value) to the result.
    if (interval.start > previous) {
      const freeInterval = new Interval(previous, interval.start);
      result.push(freeInterval);
    }

    // Update the previous as the maximum of previous and interval's end value.
    previous = Math.max(previous, interval.end);

    // If there is another interval in the current employee's schedule,
    // push that into the heap.
    if (j + 1 < schedule[i].length) {
      const nextInterval = schedule[i][j + 1];
      heap.offer([nextInterval.start, i, j + 1]);
    }
  }

  // When the heap is empty, return the result.
  return result;
}

// Driver code
function main() {
  const inputs: Interval[][][] = [
    [
      [new Interval(1, 2), new Interval(5, 6)],
      [new Interval(1, 3)],
      [new Interval(4, 10)],
    ],
    [
      [new Interval(1, 3), new Interval(6, 7)],
      [new Interval(2, 4)],
      [new Interval(2, 5), new Interval(9, 12)],
    ],
    [
      [new Interval(2, 3), new Interval(7, 9)],
      [new Interval(1, 4), new Interval(6, 7)],
    ],
    [
      [new Interval(3, 5), new Interval(8, 10)],
      [new Interval(4, 6), new Interval(9, 12)],
      [new Interval(5, 6), new Interval(8, 10)],
    ],
    [
      [new Interval(1, 3), new Interval(6, 9), new Interval(10, 11)],
      [new Interval(3, 4), new Interval(7, 12)],
      [new Interval(1, 3), new Interval(7, 10)],
      [new Interval(1, 4)],
      [new Interval(7, 10), new Interval(11, 12)],
    ],
    [
      [
        new Interval(1, 2),
        new Interval(3, 4),
        new Interval(5, 6),
        new Interval(7, 8),
      ],
      [new Interval(2, 3), new Interval(4, 5), new Interval(6, 8)],
    ],
    [
      [
        new Interval(1, 2),
        new Interval(3, 4),
        new Interval(5, 6),
        new Interval(7, 8),
        new Interval(9, 10),
        new Interval(11, 12),
      ],
      [
        new Interval(1, 2),
        new Interval(3, 4),
        new Interval(5, 6),
        new Interval(7, 8),
        new Interval(9, 10),
        new Interval(11, 12),
      ],
      [
        new Interval(1, 2),
        new Interval(3, 4),
        new Interval(5, 6),
        new Interval(7, 8),
        new Interval(9, 10),
        new Interval(11, 12),
      ],
      [
        new Interval(1, 2),
        new Interval(3, 4),
        new Interval(5, 6),
        new Interval(7, 8),
        new Interval(9, 10),
        new Interval(11, 12),
      ],
    ],
  ];
  let i = 1;
  inputs.forEach((schedule) => {
    console.log(i + ".\tEmployee Schedules:");
    schedule.forEach((s) => console.log("\t\t", display(s)));
    console.log(
      "\tEmployees' free time:",
      display(employeeFreeTime(schedule))
    );
    console.log("-".repeat(100));
    i += 1;
  });
}

main();
