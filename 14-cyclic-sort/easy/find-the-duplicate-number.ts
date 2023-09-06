function find_duplicate(nums: number[]) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      let j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else {
        // we have found the duplicate
        return nums[i];
      }
    } else {
      i += 1;
    }
  }
  return -1;
}

console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));
