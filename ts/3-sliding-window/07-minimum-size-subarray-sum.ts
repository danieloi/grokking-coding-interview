var minSubArrayLen = function (target: number, nums: number[]) {
  // Initializing window size to a max number possible
  let windowSize = Infinity;

  // Initializing start pointer and total sum to 0
  let start = 0,
    sum = 0;

  // Iterating over the input array
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    // checking if we can remove elements from the start of the subarray
    // while still satisfying the target condition
    while (sum >= target) {
      // Finding size of current sub-array
      let currSubArrSize = end + 1 - start;
      windowSize = Math.min(windowSize, currSubArrSize);
      sum -= nums[start];
      start += 1;
    }
  }

  if (windowSize != Infinity) {
    return windowSize;
  }
  return 0;
};

// Driver code
function main() {
  let target = [7, 4, 11, 10, 5, 15];
  let inputArr = [
    [2, 3, 1, 2, 4, 3],
    [1, 4, 4],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 3, 4],
    [1, 2, 1, 3],
    [5, 4, 9, 8, 11, 3, 7, 12, 15, 44],
  ];
  for (let i = 0; i < inputArr.length; i++) {
    const windowSize = minSubArrayLen(target[i], inputArr[i]);
    console.log(`${i + 1}.\tInput array: [${inputArr[i]}]`);
    console.log(`\tTarget: ${target[i]}`);
    console.log(`\tMinimum Length of Subarray: ${windowSize}`);
    console.log("-".repeat(100));
  }
}

main();
