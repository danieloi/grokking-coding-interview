function binarySearch(nums: number[], target: number) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    // Finding the mid using Math.floor division
    let mid = low + Math.floor((high - low) / 2);

    // Target value is present at the middle of the
    // array
    if (nums[mid] === target) {
      return mid;
    }
    // Target value is present in the low subarray
    else if (target < nums[mid]) {
      high = mid - 1;
    }
    // Target value is present in the high subarray
    else if (target > nums[mid]) {
      low = mid + 1;
    }
  }

  // Target value is not present in the array
  return -1;
}















function main() {
  const numsLists = [
    [],
    [0, 1],
    [1, 2, 3],
    [-1, 0, 3, 5, 9, 12],
    [-100, -67, -55, -50, -49, -40, -33, -22, -10, -5],
  ];

  const targetList = [12, 1, 3, 9, -22];

  for (let i = 0; i < numsLists.length; i++) {
    const nums = numsLists[i];
    const target = targetList[i];
    const index = binarySearch(nums, target);
    console.log(`${i + 1}.\tArray to search: `, nums);
    console.log(`\tTarget: ${target}`);

    if (index !== -1) {
      console.log(
        `\t${target} exists in the array at index ${index}`
      );
    } else {
      console.log(
        `\t${target} does not exist in the array, so the return value is ${index}`
      );
    }
    console.log("-".repeat(100));
  }
}

main();
