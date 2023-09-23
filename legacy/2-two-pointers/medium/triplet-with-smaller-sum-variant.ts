type Triplet = [number, number, number];
function triplet_with_smaller_sum(arr: number[], target: number) {
  arr.sort((a, b) => a - b);
  const triplets: Triplet[] = [];
  for (let i = 0; i < arr.length - 2; i++) {
    search_pair(arr, target - arr[i], i, triplets);
  }
  return triplets;
}

function search_pair(
  arr: number[],
  target_sum: number,
  first: number,
  triplets: Triplet[]
) {
  let left = first + 1,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] < target_sum) {
      // found the triplet
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      // left and right to get a sum less than the target sum
      for (let i = right; i > left; i--) {
        triplets.push([arr[first], arr[left], arr[i]]);
      }
      left += 1;
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}

/**
 * so I don't get duplicate-function-name errors
 */
export {};
