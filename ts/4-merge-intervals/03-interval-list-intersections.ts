type Interval = [number, number];
// Function to find the intersecting points between two intervals
function intervalsIntersection(
  intervalListA: Interval[],
  intervalListB: Interval[]
) {
  let intersections: Interval[] = []; // to store all intersecting intervals

  // index 'i' for iterating over the list 'a'
  // index 'j' for iterating over the list 'b'
  let i = 0,
    j = 0;

  while (i < intervalListA.length && j < intervalListB.length) {
    // Check if the intervalListA[i] intersects intervalListB[j]

    // 1. start: The potential start point of the intersection
    let start = Math.max(intervalListA[i][0], intervalListB[j][0]);
    // 2. end: The potential endpoint of the intersection
    let end = Math.min(intervalListA[i][1], intervalListB[j][1]);

    // The actual intersection
    if (start <= end) intersections.push([start, end]);

    // Move forward in the list whose interval ends earlier
    if (intervalListA[i][1] < intervalListB[j][1]) i++;
    else j++;
  }
  return intersections;
}

// Driver code
function main() {
  let inputIntervalListA: Interval[][] = [
    [[1, 2]],
    [
      [1, 4],
      [5, 6],
      [9, 15],
    ],
    [
      [3, 6],
      [8, 16],
      [17, 25],
    ],
    [
      [4, 7],
      [9, 16],
      [17, 28],
      [39, 50],
      [55, 66],
      [70, 89],
    ],
    [
      [1, 3],
      [5, 6],
      [7, 8],
      [12, 15],
    ],
  ];

  let inputIntervalListB: Interval[][] = [
    [[1, 2]],
    [
      [2, 4],
      [5, 7],
      [9, 15],
    ],
    [
      [2, 3],
      [10, 15],
      [18, 23],
    ],
    [
      [3, 6],
      [7, 8],
      [9, 10],
      [14, 19],
      [23, 33],
      [35, 40],
      [45, 59],
      [60, 64],
      [68, 76],
    ],
    [
      [2, 4],
      [7, 10],
    ],
  ];

  inputIntervalListA.map((inInt, i) => {
    console.log(
      i + 1 + ".\t Interval List A:",
      inputIntervalListA[i]
    );
    console.log("\t Interval List B:", inputIntervalListB[i]);
    console.log(
      "\t Intersecting intervals in 'A' and 'B' are:",
      intervalsIntersection(
        inputIntervalListA[i],
        inputIntervalListB[i]
      )
    );
    console.log("-".repeat(100));
  });
}

main();
