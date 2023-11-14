function binarySearchRotated(nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    // Finding the mid using floor division
    let mid = low + Math.floor((high - low) / 2);

    // Target value is present at the middle of the
    // array
    if (nums[mid] == target) {
      return mid;
    }

    // low to mid is sorted
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // mid to high is sorted
    else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}













// Driver code
function main() {
  let numsList = [
    [5, 6, 7, 1, 2, 3, 4],
    [40, 50, 60, 10, 20, 30],
    [47, 58, 69, 72, 83, 94, 12, 24, 35],
    [77, 82, 99, 105, 5, 13, 28, 41, 56, 63],
    [
      48, 52, 57, 62, 68, 72, 5, 7, 12, 17, 21, 28, 33, 37,
      41,
    ],
  ];

  let targetList = [1, 50, 12, 56, 5];

  for (let i = 0; i < targetList.length; i++) {
    console.log(
      i + 1 + ".\tSorted array: ",
      numsList[i],
      "\n\ttarget",
      targetList[i],
      "found at index ",
      binarySearchRotated(numsList[i], targetList[i])
    );
    console.log("-".repeat(100));
  }
}

main();
