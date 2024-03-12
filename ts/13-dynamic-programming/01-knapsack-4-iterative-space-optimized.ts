// @ts-ignore
function findMaxKnapsackProfit(capacity, weights, values) {
  const n = weights.length;
  const dp = new Array(capacity + 1).fill(0);

  // previous (i-1)th row which will be used to fill up
  // the current ith row
  const temp = new Array(capacity + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (weights[i - 1] <= j) {
        temp[j] = Math.max(
          values[i - 1] + dp[j - weights[i - 1]],
          dp[j]
        );
      } else {
        temp[j] = dp[j];
      }
    }

    // Setting the (i-1)th row equal to the ith row
    dp.splice(0, dp.length, ...temp);
  }

  return dp[capacity];
}























// @ts-ignore
// Driver code
function main() {
  let weights = [
    [1, 2, 3, 5],
    [4],
    [2],
    [3, 6, 10, 7, 2],
    [3, 6, 10, 7, 2, 12, 15, 10, 13, 20],
  ];
  let values = [
    [1, 5, 4, 8],
    [2],
    [3],
    [12, 10, 15, 17, 13],
    [12, 10, 15, 17, 13, 12, 30, 15, 18, 20],
  ];
  let capacity = [6, 3, 3, 10, 20];

  // Let's uncomment this to see the benefit of using
  // dynamic programming with tabulation

  // weights.push([ 63,  55,  47,  83,  61,  82,   6,
  //     34,   9,  38,   6,  69,  17, 50,   7, 100, 101,
  //     4,  41,  28, 119,  78,  98,  38,  75,  35, 8,
  //     10,  16,  93,  34,  23,  51,  79, 118,  86,
  //     85, 109,  88, 72,  99,  36,  21,  80,  42,  44,
  //     62,   7,  54,   7,   6,   0, 65,  25,  44,  86,
  //     76,  18,  11,  10, 104,  17,  36,  91,  78, 88,
  //     79, 103,   1,   4,  34,  94,  73,  21,   8,
  //     9,  79,  25, 106,  76,  39,  78,   1,  92, 104,
  //     84,  40, 100, 116,  84,  23, 79, 109,  79,  71,
  //     72, 116,  90,  79,  26]) values.push([ 35,  47,
  //     8, 103,  83,  71,  11, 107,   9,  34,  41,  54,
  //     73, 72, 108, 100,  46,  27,  79,  98,  49,  63,
  //     41, 116,  57,  86, 51,  47,  88, 118,  65,   0,
  //     64,  11,  45,  47,  36,  50, 114, 90, 105,  55,
  //     93,  12,  73,  96,  50,  27,  36,  97,  12,
  //     21, 107,  34, 106,  37,  84,  38, 110,  60,
  //     34, 104,  92,  56,  94, 109,  81,  17,  24,
  //     106,  50,  68,  90,  73,  46,  99,   5,   5,
  //     22,  27,  58,  24,  20,  80,  37,   1,  16,
  //     39,  26,  32,  12, 47,  22,  28,  50,  95,   6,
  //     105, 101,  20]) capacity.push(1000)

  for (var i = 0; i < values.length; ++i) {
    console.log(
      i +
        1 +
        ". We have a knapsack of capacity " +
        capacity[i] +
        " and we are given the following list of item values and weights:"
    );
    console.log("-".repeat(30));
    console.log("Weights   |     Values");
    console.log("-".repeat(30));
    for (var j = 0; j < values[i].length; ++j)
      console.log(
        weights[i][j].toString().padEnd(9),
        "|    ",
        values[i][j].toString()
      );
    let result = findMaxKnapsackProfit(
      capacity[i],
      weights[i],
      values[i]
    );
    console.log("\nThe maximum we can earn is: " + result);
    console.log("-".repeat(100));
    console.log();
  }
}

main();
