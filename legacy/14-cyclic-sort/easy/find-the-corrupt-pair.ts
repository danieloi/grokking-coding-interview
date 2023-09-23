const find_corrupt_numbers = function (nums: number[]) {
  let i = 0;

  while (i < nums.length) {
    let j = nums[i] - 1; //j is the correct index of the value at i
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }

  //find the duplicate and the missing number
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return [nums[i], i + 1];
    }
  }
  return [-1, -1];
};

// console.log(find_corrupt_numbers([3, 1, 2, 5, 2]));
// console.log(find_corrupt_numbers([3, 1, 2, 3, 6, 4]));

export {};
