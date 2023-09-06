type Quadruplet = [number, number, number, number];

const search_quadruplets = function (arr: number[], target: number) {
  // TODO: Write your code here
  const quadruplets: Quadruplet[] = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      // skip same element to avoid duplicate quadruplets
      continue;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[j - 1]) {
        // skip same element to avoid duplicate quadruplets
        continue;
      }
      search_pair(arr, target, quadruplets, i, j);
    }
  }
  return quadruplets;
};

function search_pair(
  arr: number[],
  target: number,
  quadruplets: Quadruplet[],
  i: number,
  j: number
) {
  const target_sum = target - arr[i] - arr[j];
  let left = j + 1;
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) {
      // found the triplet
      quadruplets.push([arr[i], arr[j], arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1; // skip same element to avoid duplicate quadruplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element to avoid duplicate quadruplets
      }
    } else if (target_sum > current_sum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}

console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
/**
 * expected output
 * [-3,-1,1,4]
 * [-3,1,1,2]
 */

console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));
/**
 * expected output
 * [-2,0,2,2]
 * [-1,0,1,2]
 */

export {};
