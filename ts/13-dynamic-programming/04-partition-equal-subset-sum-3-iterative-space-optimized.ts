// @ts-ignore
function canPartitionArray(nums) {
  // find sum of array elements
  let total_sum = nums.reduce((a, b) => a + b, 0);

  // if total_sum is odd, it cannot be partitioned into
  // equal sum subsets
  if (total_sum % 2 !== 0) {
    return false;
  }

  let subset_sum = Math.floor(total_sum / 2);
  let n = nums.length;
  const dp = new Array(n).fill(false);
  // a subset with a sum of 0 can always be formed by
  // selecting no elements from the input array
  dp[0] = true;

  for (let i = 1; i < n; i++) {
    for (let j = subset_sum; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }
  return dp[subset_sum];
}

// Driver code 
// @ts-ignore
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
