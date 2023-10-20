import { MinHeap, printList, printListWithFloats } from "./utils";

function medianSlidingWindow(nums: number[], k: number) {
  // To store the medians
  let medians: number[] = [];

  // To keep track of the numbers that need to be removed from the heaps
  let outgoingNum = {};

  // Max heap
  let smallList = new MinHeap<number>();

  // Min heap
  let largeList = new MinHeap<number>();

  // Initialize the max heap by multiplying each element by -1
  for (let i = 0; i < k; i++) smallList.push(-1 * nums[i]);

  // Transfer the top 50% of the numbers from max heap to min heap
  // while restoring the sign of each number
  for (let i = 0; i < Math.floor(k / 2); i++)
    largeList.push(-1 * smallList.pop()!);

  // Variable to keep the heaps balanced
  let balance = 0;

  let i = k;
  while (true) {
    // If the window size is odd
    if ((k & 1) === 1) medians.push(smallList.peek()! * -1);
    else
      medians.push(
        (smallList.peek()! * -1 + largeList.peek()!) * 0.5
      );

    // Break the loop if all elements have been processed
    if (i >= nums.length) break;

    // Outgoing number
    const outNum = nums[i - k];

    // Incoming number
    const inNum = nums[i];
    i += 1;

    // If the outgoing number is from max heap
    if (outNum <= smallList.peek()! * -1) balance -= 1;
    else balance += 1;

    // Add/Update the outgoing number in the hash map
    if (outNum in outgoingNum)
      outgoingNum[outNum] = outgoingNum[outNum] + 1;
    else outgoingNum[outNum] = 1;

    // If the incoming number is less than the top of the max heap, add it in that heap
    // Otherwise, add it in the min heap
    if (smallList.size() > 0 && inNum <= smallList.peek()! * -1) {
      balance += 1;
      smallList.push(inNum * -1);
    } else {
      balance -= 1;
      largeList.push(inNum);
    }

    // Re-balance the heaps
    if (balance < 0) smallList.push(-1 * largeList.pop()!);
    else if (balance > 0) largeList.push(-1 * smallList.pop()!);

    // Since the heaps have been balanced, we reset the balance variable to 0.
    // This ensures that the two heaps contain the correct elements for the calculations to be performed on the elements in the next window.
    balance = 0;

    // Remove invalid numbers present in the hash map from top of max heap
    while (
      smallList.peek()! * -1 in outgoingNum &&
      outgoingNum[smallList.peek()! * -1] > 0
    )
      outgoingNum[smallList.peek()! * -1] =
        outgoingNum[smallList.pop()! * -1] - 1;

    // Remove invalid numbers present in the hash map from top of min heap
    while (
      largeList.size() > 0 &&
      largeList.peek()! in outgoingNum &&
      outgoingNum[largeList.peek()!] > 0
    )
      outgoingNum[largeList.peek()!] =
        outgoingNum[largeList.pop()!] - 1;
  }
  return medians;
}

function main() {
  let input: [number[], number][] = [
    [[3, 1, 2, -1, 0, 5, 8], 4],
    [[1, 3, -1, -3, 5, 3, 6, 7], 3],
    [[1, 2], 1],
    [[4, 7, 2, 21], 2],
    [[22, 23, 24, 56, 76, 43, 121, 1, 2, 0, 0, 2, 3, 5], 5],
    [[1, 1, 1, 1, 1], 2],
  ];

  for (let i = 0; i < input.length; i++) {
    console.log(
      i + 1 + ".\tInput array:",
      printList(input[i][0]) + ", k =",
      input[i][1],
      "\n\tMedians:",
      printListWithFloats(
        medianSlidingWindow(input[i][0], input[i][1])
      )
    );
    console.log("-".repeat(100), "\n");
  }
}

main();
