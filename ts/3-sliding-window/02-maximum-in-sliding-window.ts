import { Deque } from "./utils";
// copied from solution
// was misdirected by how they added a heap to coding area

function cleanUp(i, currentWindow, nums) {
  // remove all the indexes from currentWindow whose corresponding values are smaller than or equal to the current element
  while (
    currentWindow.length !== 0 &&
    nums[i] >= nums[currentWindow.peekBack()]
  ) {
    currentWindow.pop();
  }
}

function findMaxSlidingWindow(nums, w) {
  // if the input array is empty, return an empty array
  if (nums.length === 0) {
    return [];
  }

  // if window size is greater than the array size, set the window size to the array size
  if (w > nums.length) {
    w = nums.length;
  }

  // initializing variables
  const output = new Array(nums.length - w + 1);
  const currentWindow = new Deque();

  // iterate over the first w elements
  for (let i = 0; i < w; i++) {
    // for every element, remove the previous smaller elements from currentWindow
    cleanUp(i, currentWindow, nums);

    // append the index of the current element to currentWindow
    currentWindow.push(i);
  }

  // appending the maximum element of the current window to the output list
  output[0] = nums[currentWindow.peekFront()!];

  // iterate over the remaining input list
  for (let i = w; i < nums.length; i++) {
    // for every element, remove the previous smaller elements from currentWindow
    cleanUp(i, currentWindow, nums);

    // remove first index from the currentWindow if it has fallen out of the current window
    if (currentWindow.length !== 0 && currentWindow.peekFront()! <= i - w) {
      currentWindow.shift();
    }

    // append the index of the current element to currentWindow
    currentWindow.push(i);

    // adding the maximum element of the current window to the output list
    output[i - w + 1] = nums[currentWindow.peekFront()!];
  }

  // return the array containing output
  return output;
}

// driver code
function main() {
  const windowSizes = [3, 3, 3, 3, 2, 4, 3, 2, 3, 18];
  const numLists = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [
      1, 5, 8, 10, 10, 10, 12, 14, 15, 19, 19, 19, 17, 14, 13, 12, 12, 12, 14,
      18, 22, 26, 26, 26, 28, 29, 30,
    ],
    [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],
    [4, 5, 6, 1, 2, 3],
    [9, 5, 3, 1, 6, 3],
    [2, 4, 6, 8, 10, 12, 14, 16],
    [-1, -1, -2, -4, -6, -7],
    [4, 4, 4, 4, 4, 4],
  ];

  for (let i = 0; i < numLists.length; i++) {
    console.log(`${i + 1}.\tInput array:\t[${numLists[i]}]`);
    console.log(`\tWindow size:\t${windowSizes[i]}`);
    console.log(
      `\n\tMaximum in each sliding window:\t[${findMaxSlidingWindow(
        numLists[i],
        windowSizes[i]
      )}]`
    );
    Array(100)
      .fill("-")
      .forEach((char) => process.stdout.write(char));
    console.log();
  }
}

main();
