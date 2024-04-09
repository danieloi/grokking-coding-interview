// @ts-ignore
function canPartitionArray(nums) {
  // Calculate sum of array.
  let arraySum = nums.reduce((acc, num) => acc + num, 0);

  // If total sum is odd, it cannot be partitioned into
  // equal sum subsets.
  if (arraySum % 2 !== 0) {
    return false;
  }

  // Calculate subset sum
  let subsetSum = Math.floor(arraySum / 2);

  // Create a lookup table and fill all entries with
  // FALSE.
  let dp = new Array(subsetSum + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(nums.length + 1).fill(false);
  }

  // Initialize the first row as TRUE as each array has
  // a subset whose sum is zero
  dp[0].fill(true);

  // Fill the lookup table in a bottom-up manner.
  for (let i = 1; i <= subsetSum; i++) {
    for (let j = 1; j <= nums.length; j++) {
      if (nums[j - 1] > i) {
        dp[i][j] = dp[i][j - 1];
      } else {
        dp[i][j] =
          dp[i - nums[j - 1]][j - 1] || dp[i][j - 1];
      }
    }
  }

  // Return the last index of the matrix, which is our
  // answer.
  return dp[subsetSum][nums.length];
}


















// Driver code @ts-ignore
function main() {
  let input = [
    [3, 1, 1, 2, 2, 1],
    [1, 3, 7, 3],
    [1, 2, 3],
    [1, 2, 5],
    [1, 3, 4, 8],
    [1, 2, 3, 2, 3, 5],
    [1, 5, 3, 2, 3, 19, 3],
    [1, 2, 3, 5, 3, 2, 1],
  ];

  for (let i = 0; i < input.length; i++) {
    console.log(i + 1 + ". Input array:", input[i]);
    let result = canPartitionArray(input[i]);

    console.log(
      "\nCan we partition the array into equal sum arrays?:",
      result
    );
    console.log("-".repeat(100));
  }
}

main();
