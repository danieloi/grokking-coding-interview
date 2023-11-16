class RandomPickWithWeight {
  runningSums: number[];
  totalSum: number;
  constructor(weights) {
    // List to store running sums of weights
    this.runningSums = [];
    // Variable to calculate running sum
    let runningSum = 0;

    // Iterate through the given weights
    for (let w of weights) {
      // Add the current weight to the running sum
      runningSum += w;
      // Append the running sum to the runningSums list
      this.runningSums.push(runningSum);
    }
    // Store the total sum of weights
    this.totalSum = runningSum;
  }

  // Method to pick an index based on the weights
  pickIndex() {
    // Generate a random number between 1 and the total
    // sum of the array
    let target =
      Math.floor(Math.random() * this.totalSum) + 1;
    // Initialize low and high variables for binary
    // search
    let low = 0;
    let high = this.runningSums.length;

    // Perform binary search to find the first value
    // higher than the target
    while (low < high) {
      let mid = Math.floor(low + (high - low) / 2);
      if (target > this.runningSums[mid]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    // Return the index (low) found
    return low;
  }
}

// Driver code
function main() {
  let counter = 900,
    weights1 = [1, 2, 3, 4, 5],
    weights2 = [1, 12, 23, 34, 45, 56, 67, 78, 89, 90],
    weights3 = [10, 20, 30, 40, 50],
    weights4 = [1, 10, 23, 32, 41, 56, 62, 75, 87, 90],
    weights5 = [12, 20, 35, 42, 55],
    weights6 = [10, 10, 10, 10, 10],
    weights7 = [10, 10, 20, 20, 20, 30],
    weights8 = [1, 2, 3],
    weights9 = [10, 20, 30, 40],
    weights10 = [5, 10, 15, 20, 25, 30],
    weights = [
      weights1,
      weights2,
      weights3,
      weights4,
      weights5,
      weights6,
      weights7,
      weights8,
      weights9,
      weights10,
    ],
    dict = {};

  for (let i = 0; i < weights.length; i++) {
    console.log(
      i + 1 + ".\tInput:",
      weights[i],
      ", pickIndex() called",
      counter,
      "times\n"
    );
    for (let l = 0; l < weights[i].length; l++) {
      dict[`${l}`] || (dict[`${l}`] = 0);
    }
    for (let j = 0; j < counter; j++) {
      let sol = new RandomPickWithWeight(weights[i]);
      let index = sol.pickIndex();
      dict[index] += 1;
    }
    console.log("-".repeat(100));
    console.log(
      "Indexes".padEnd(10, " "),
      "|".padEnd(5, " "),
      "Weights".padEnd(10, " "),
      "|".padEnd(5, " "),
      "Occurences".padEnd(15, " "),
      "|".padEnd(5, " "),
      "Frequency".padEnd(15, " "),
      "|".padEnd(5, " "),
      "Expected Frequency".padEnd(15, " ")
    );
    console.log("-".repeat(100));
    Object.keys(dict).forEach((key) => {
      let value = dict[key];
      console.log(
        `${key}`.padEnd(10, " "),
        "|".padEnd(5, " "),
        `${weights[i][key]}`.padEnd(10, " "),
        "|".padEnd(5, " "),
        `${value}`.padEnd(15, " "),
        "|".padEnd(5, " "),
        String(
          ((value / counter) * 100).toFixed(2) + "%"
        ).padEnd(15, " "),
        "|".padEnd(5, " "),
        String(
          (
            (weights[i][key] /
              weights[i].reduce((a, b) => {
                return a + b;
              }, 0)) *
            100
          ).toFixed(2) + "%"
        ).padEnd(15, " ")
      );
    });

    dict = {};
    console.log("\n", "-".repeat(100), "\n");
  }
}

main();
