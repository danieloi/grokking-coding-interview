// @ts-ignore
function findMaxKnapsackProfit(capacity, weights, values) {
  const n = weights.length;
  const dp = new Array(capacity + 1).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = capacity; j >= weights[i]; j--) {
      dp[j] = Math.max(
        values[i] + dp[j - weights[i]],
        dp[j]
      );
    }
  }

  return dp[capacity];
}
































//@ts-ignore
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
