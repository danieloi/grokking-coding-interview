import binarySearch from "./utils";

function findClosestElements(nums: number[], k, target) {
  // If the length of 'nums' is the same as k, return
  // 'nums'
  if (nums.length === k) {
    return nums;
  }

  // if target is less than or equal to first element in
  // 'nums', return the first k elements from 'nums'
  if (target <= nums[0]) {
    return nums.slice(0, k);
  }

  // if target is greater than or equal to last element
  // in 'nums', return the last k elements from 'nums'
  if (target >= nums[nums.length - 1]) {
    return nums.slice(nums.length - k);
  }

  // find the first closest element to target using
  // binary search
  const firstClosest = binarySearch(nums, target);

  // initialize the sliding window pointers
  let windowLeft = firstClosest - 1;
  let windowRight = windowLeft + 1;

  // expand the sliding window until its size becomes
  // equal to k
  while (windowRight - windowLeft - 1 < k) {
    // if window's left pointer is going out of bounds
    // move the window rightward
    if (windowLeft === -1) {
      windowRight++;
      continue;
    }

    // if window's right pointer is going out of bounds
    // OR if the element pointed to by window's left
    // pointer is closer to target than the element
    // pointed to by window's right pointer, move the
    // window leftward
    if (
      windowRight === nums.length ||
      Math.abs(nums[windowLeft] - target) <=
        Math.abs(nums[windowRight] - target)
    ) {
      windowLeft--;
    }
    // if the element pointed to by window's right
    // pointer is closer to target than the element
    // pointed to by window's left pointer, move the
    // window rightward
    else {
      windowRight++;
    }
  }

  // return k closest elements present inside the window
  return nums.slice(windowLeft + 1, windowRight);
}















// Driver code
function main() {
  let nums = [
      [1, 2, 3, 4, 5, 6, 7],
      [1, 2, 3, 4, 5],
      [1, 2, 4, 5, 6],
      [1, 2, 3, 4, 5, 10],
    ],
    k = [4, 4, 2, 3],
    num = [4, 3, 10, -5];

  for (let i = 0; i < nums.length; i++) {
    console.log(
      i + 1 + ".\tThe",
      k[i],
      "Closest Elements for the number",
      num[i],
      "in the array",
      nums[i],
      "are:"
    );
    console.log(
      "\t",
      findClosestElements(nums[i], k[i], num[i])
    );
    console.log("-".repeat(100));
  }
}

main();
