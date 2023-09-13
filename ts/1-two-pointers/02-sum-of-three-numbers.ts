export function findSumOfThree(nums: number[], target: number) {
  // Replace this placeholder return statement with your code
  const sortedNums = nums.sort(function (a, b) {
    return a - b;
  });
  let sum = 0;

  for (let i = 0; i < sortedNums.length; i++) {
    let leftIndex = i + 1;
    let rightIndex = sortedNums.length - 1;

    while (leftIndex < rightIndex) {
      sum = sortedNums[i] + sortedNums[leftIndex] + sortedNums[rightIndex];
      if (sum < target) {
        leftIndex += 1;
      } else if (sum > target) {
        rightIndex -= 1;
      } else {
        return true;
      }
    }
  }
  return false; // if it makes it here, it'll be false
}

const num = [3, 7, 1, 2, 8, 4, 5];
const target = 10;
// expected output: true

// failing case [3, 7, 1, 2, 8, 4, 5] , 10
console.log(findSumOfThree(num, target));
