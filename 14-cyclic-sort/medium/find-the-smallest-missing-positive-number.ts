function find_first_smallest_missing_positive(nums: number[]) {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    let j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  for (i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
}

console.log(find_first_smallest_missing_positive([-3, 1, 5, 4, 2]));
console.log(find_first_smallest_missing_positive([3, -2, 0, 1, 2]));
console.log(find_first_smallest_missing_positive([3, 2, 5, 1]));

export {};
