function maxProduct(nums) {
  // Check if the input array is empty, return 0 if it
  // is
  if (nums.length === 0) {
    return 0;
  }

  // Initialize maxSoFar and minSoFar with the first
  // element in the array, and result with maxSoFar
  let maxSoFar = nums[0];
  let minSoFar = nums[0];
  let result = maxSoFar;

  // Loop through the rest of the elements in the array
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];

    // Update maxSoFar and minSoFar with the maximum and
    // minimum of curr, maxSoFar * curr, and minSoFar *
    // curr tempMaxSoFar is used to store the value of
    // maxSoFar so that it does not get updated while
    // calculating minSoFar
    const tempMaxSoFar = Math.max(
      curr,
      maxSoFar * curr,
      minSoFar * curr
    );

    minSoFar = Math.min(
      curr,
      maxSoFar * curr,
      minSoFar * curr
    );

    maxSoFar = tempMaxSoFar;

    // Update result with the maximum of maxSoFar and
    // result
    result = Math.max(maxSoFar, result);
  }

  // Return the final result
  return result;
}












// Driver code
function main() {
  const inputBits = [
    [-2, 0, -1],
    [2, 3, -2, 4],
    [2, -5, 3, 1, -4, 0, -10, 2],
    [1, 2, 3, 0, 4],
    [5, 4, 3, 10, 4, 1],
  ];

  for (let i = 0; i < inputBits.length; i++) {
    console.log(
      i + 1 + "\t Input array: ",
      JSON.stringify(inputBits[i])
    );
    console.log(
      "\n\t Maximum product: ",
      maxProduct(inputBits[i])
    );
    console.log("-".repeat(100));
  }
}

main();
