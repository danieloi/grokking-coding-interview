/**
 * uncomment the relevant solution to walk through it
 *
 */

/**
 * Instructions
 *
 * Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
 *
 * Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
 *
 * Example 1:
 *
 * Input: [1, 2, 3, 4, 6], target=6
 * Output: [1, 3]
 * Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
 *
 * Example 2:
 *
 * Input: [2, 5, 9, 11], target=11
 * Output: [0, 2]
 * Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
 */

/**
 * solution one
 */

// const pair_with_target_sum = function (
//   arr: number[],
//   target_sum: number
// ): number[] {
//   // TODO: Write your code here
//   let leftIndex = 0,
//     rightIndex = arr.length - 1;

//   while (leftIndex < rightIndex) {
//     const currentSum = arr[leftIndex] + arr[rightIndex];

//     if (currentSum === target_sum) {
//       return [leftIndex, rightIndex];
//     }
//     if (currentSum < target_sum) {
//       leftIndex++;
//     }
//     if (currentSum > target_sum) {
//       rightIndex--;
//     }
//   }
//   return [-1, -1];
// };

/**
 * solution 2
 */

function pair_with_target_sum(arr: number[], targetSum: number): number[] {
  const nums: Record<number, number> = {}; // to store numbers and their indices
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (targetSum - num in nums) {
      return [nums[targetSum - num], i];
    }
    nums[arr[i]] = i;
  }
  return [-1, -1];
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));
