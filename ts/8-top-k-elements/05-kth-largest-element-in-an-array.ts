import { MinHeap } from "./utils";

function findKthLargest(nums: number[], k: number) {
  // Initialize an empty heap
  let kNumbersMinHeap = new MinHeap();

  // Add first k elements to the heap
  for (var i = 0; i < k; i++) {
    kNumbersMinHeap.push(nums[i]);
  }

  // Loop through the remaining elements in nums
  for (var i = k; i < nums.length; i++) {
    // Compare the current element with the minimum
    // element (root) of the min-heap
    if (nums[i] > kNumbersMinHeap.peek()) {
      // Remove the smallest element
      kNumbersMinHeap.pop();
      // Add the current element
      kNumbersMinHeap.push(nums[i]);
    }
  }
  // The root of the heap has the Kth largest element
  return kNumbersMinHeap.peek();
}















// Driver code
function main() {
  const inputArray = [
    [1, 5, 12, 2, 11, 9, 7, 30, 20],
    [5, 2, 9, -3, 7],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 4, 6, 0, 2],
    [3, 5, 2, 3, 8, 5, 3],
  ];

  const k = [3, 1, 9, 1, 4];
  for (var i = 0; i < inputArray.length; i++) {
    console.log(i + 1 + ".\tInput array:", inputArray[i]);
    console.log("\tValue of k:", k[i]);
    console.log(
      "\tkth largest number:",
      findKthLargest(inputArray[i], k[i])
    );
    console.log("-".repeat(100));
  }
}

main();
