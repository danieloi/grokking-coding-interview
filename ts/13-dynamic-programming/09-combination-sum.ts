function combinationSum(nums, target) {
  // Initialize dp
  const dp: number[][][] = [[]];
  for (let i = 1; i <= target; i++) {
    dp[i] = [];
  }
  dp[0].push([]);

  // For each value from 1 to target
  for (let i = 1; i <= target; i++) {
    // Iterate over nums
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] <= i) {
        // Check previous results from dp
        for (const prev of dp[i - nums[j]]) {
          const temp = prev.concat(nums[j]);

          temp.sort((a, b) => a - b);
          // If the new combination is not already in dp
          if (
            !dp[i].some(
              (combination) =>
                combination.join(",") === temp.join(",")
            )
          ) {
            dp[i].push(temp);
          }
        }
      }
    }
  }
  // Return the combinations
  return dp[target];
}











// Driver code
function main() {
  const nums = [
    [2, 3, 4],
    [2, 3, 5],
    [3, 6, 7, 8],
    [4, 5, 6, 9],
    [20, 25, 30, 35, 40],
    [3, 5, 7],
  ];

  const targets = [6, 5, 15, 11, 40, 15];

  for (let i = 0; i < nums.length; i++) {
    console.log(
      i + 1 + ". \tnums: " + JSON.stringify(nums[i])
    );
    console.log("\tTarget: " + targets[i]);
    const combinations = combinationSum(
      nums[i],
      targets[i]
    );
    console.log(
      "\tCombinations: " + JSON.stringify(combinations)
    );
    console.log("-".repeat(100));
    console.log();
  }
}

main();
