export function findDuplicate(nums: number[]) {
  // Replace this placeholder return statement with your code

  let slowPointer = 0;
  let fastPointer = 0;

  // loop to find the duplicate
  // move slow and fast pointers until they meet
  while (true) {
    slowPointer++;
    fastPointer += 2;
    if (fastPointer > nums.length - 1) {
      fastPointer = fastPointer % nums.length;
    }
    if (slowPointer > nums.length - 1) {
      slowPointer = slowPointer % nums.length;
    }
    if (nums[slowPointer] === nums[fastPointer]) {
      break;
    }
  }

  slowPointer = 0;
  while (true) {
    slowPointer++;
    fastPointer += 2;
    if (fastPointer > nums.length - 1) {
      fastPointer = fastPointer % nums.length;
    }
    if (slowPointer > nums.length - 1) {
      slowPointer = slowPointer % nums.length;
    }
    if (nums[slowPointer] === nums[fastPointer]) {
      return nums[slowPointer];
    }
  }
}

// Test
// console.log(findDuplicate([3, 4, 4, 4, 2])); // expected: 4 output: 3
console.log(findDuplicate([1, 2, 2])); // expected: 2 output: 1
