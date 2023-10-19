import { MaxHeap, MinHeap } from "./utils";

function maximumCapital(
  c: number,
  k: number,
  capitals: number[],
  profits: number[]
) {
  let currentCapital = c;
  let capitalsMinHeap = new MinHeap();
  let profitsMaxHeap = new MaxHeap();

  // Insert all capitals values to a min-heap
  for (var x = 0; x < capitals.length; x++) {
    capitalsMinHeap.push([capitals[x], x]);
  }

  // Calculate capital of all the required number of projects
  // containing maximum profit
  for (var counter = 0; counter < k; counter++) {
    // Select projects (in the range of current capital)
    // then push them in max-heap
    while (
      capitalsMinHeap.size() > 0 &&
      capitalsMinHeap.peek()[0] <= currentCapital
    ) {
      let element = capitalsMinHeap.pop();
      c = element[0];
      let i = element[1];
      profitsMaxHeap.push([profits[i], i]);
    }

    // check if the max-heap is empty
    if (profitsMaxHeap.size() == 0) {
      break;
    }

    // Select those projects from max-heap that
    // contain maximum profit
    let element = profitsMaxHeap.pop();
    let j = element[0];
    console.log("\t\tUpdated capital =", currentCapital, "+", j);
    currentCapital = currentCapital + j;
  }

  return currentCapital;
}

function main() {
  const input: [number, number, number[], number[]][] = [
    [0, 1, [1, 1, 2], [1, 2, 3]],
    [1, 2, [1, 2, 2, 3], [2, 4, 6, 8]],
    [2, 3, [1, 3, 4, 5, 6], [1, 2, 3, 4, 5]],
    [1, 3, [1, 2, 3, 4], [1, 3, 5, 7]],
    [7, 2, [6, 7, 8, 10], [4, 8, 12, 14]],
    [2, 4, [2, 3, 5, 6, 8, 12], [1, 2, 5, 6, 8, 9]],
  ];
  let num = 1;
  for (var i = 0; i < input.length; i++) {
    console.log(
      i + 1 + ".\tProject capital requirements:\t",
      input[i][2]
    );
    console.log("\tProject expected profits:\t", input[i][3]);
    console.log("\tNumber of projects:\t\t", input[i][1]);
    console.log("\tStart-up capital:\t\t", input[i][0]);
    console.log("\n\t\tProcessing:");
    console.log(
      "\n\tMaximum capital earned:",
      maximumCapital(
        input[i][0],
        input[i][1],
        input[i][2],
        input[i][3]
      )
    );
    console.log("-".repeat(100));
    num += 1;
  }
}

main();
