function singleNonDuplicate(nums: number[]) {
  // initilaize the left and right pointer
  let l = 0,
    r = nums.length - 1;

  while (l != r) {
    // set the value of mid
    let mid = l + Math.floor((r - l) / 2);

    // if mid is odd, decrement it to make it even
    if (mid % 2 == 1) {
      mid--;
    }
    // if the elements at mid and mid + 1 are the same,
    // then the single element must appear after the
    // midpoint
    if (nums[mid] == nums[mid + 1]) {
      l = mid + 2;
    } else {
      // otherwise, we must search for the single
      // element before the midpoint
      r = mid;
    }
  }
  return nums[l];
}

// Driver code
function main() {
  let nums = [
    [1, 2, 2, 3, 3, 4, 4],
    [1, 1, 2, 2, 3, 4, 4, 5, 5],
    [1, 1, 2, 3, 3],
    [1, 1, 2],
    [0, 2, 2, 3, 3, 4, 4, 5, 5],
  ];

  for (let i = 0; i < nums.length; i++) {
    console.log(i + 1 + ".\tThe Array =", nums[i]);
    console.log(
      "\tSingle Element Found:",
      singleNonDuplicate(nums[i])
    );
    console.log("-".repeat(100));
  }
}

main();
