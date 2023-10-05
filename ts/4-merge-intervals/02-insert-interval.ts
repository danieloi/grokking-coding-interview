import { Interval, display } from "./utils";

function insertInterval(existingIntervals: Interval[], newInterval: Interval) {
  // just so I can use the display function in watch expressions
  const show = display;
  // Read the starting and ending time of the new interval,
  // into separate variables
  let newStart = newInterval.start,
    newEnd = newInterval.end;

  // Initialize variables to help in iterating over the existing intervals list
  let i = 0,
    n = existingIntervals.length;

  // Initialize an empty list to store the output
  let output: Interval[] = [];

  // Append all intervals that start before the new interval to the output list
  while (i < n && newStart > existingIntervals[i].start) {
    output.push(existingIntervals[i]);
    i = i + 1;
  }

  // If the new interval starts after the end of
  // the last interval appended to the output list,
  // just append the new interval to the output list.
  if (!output.length || output[output.length - 1].end < newStart) {
    output.push(newInterval);
  } else {
    // Otherwise merge the two intervals
    output[output.length - 1].end = Math.max(
      output[output.length - 1].end,
      newEnd
    );
  }

  // Copy any remaining intervals to the output list
  // Similarly merging any overlapping intervals as we go
  while (i < n) {
    let ei = existingIntervals[i];
    let start = ei.start,
      end = ei.end;

    if (output[output.length - 1].end < start) {
      // no overlap
      output.push(ei);
    } else {
      // overlap
      output[output.length - 1].end = Math.max(
        output[output.length - 1].end,
        end
      );
    }
    i++;
  }
  return output;
}

// Driver code
function main() {
  const newIntervals = [
    new Interval(5, 7),
    new Interval(8, 9),
    new Interval(10, 12),
    new Interval(1, 3),
    new Interval(1, 10),
  ];

  const existingIntervals = [
    [new Interval(1, 2), new Interval(3, 5), new Interval(6, 8)],
    [new Interval(1, 3), new Interval(5, 7), new Interval(10, 12)],
    [new Interval(8, 10), new Interval(12, 15)],
    [new Interval(5, 7), new Interval(8, 9)],
    [new Interval(3, 5)],
  ];

  for (let i = 0; i < newIntervals.length; i++) {
    console.log(
      i + 1 + ".\tExisting intervals: " + display(existingIntervals[i])
    );
    console.log("\tNew interval: ", newIntervals[i].formatInterval());
    const output = insertInterval(existingIntervals[i], newIntervals[i]);
    console.log("\tUpdated intervals: " + display(output));
    console.log("-".repeat(100));
  }
}

main();
