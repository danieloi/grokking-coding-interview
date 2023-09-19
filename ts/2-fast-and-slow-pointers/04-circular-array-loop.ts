/**
 * Statement
 * An input array, nums containing non-zero integers is given, where the value at each index
 * represents the number of places to skip forward (if the value is positive) or backward (if the value is negative).
 * When skipping forward or backward, wrap around if you reach either end of the array.
 * For this reason, we are calling it a circular array.
 * Determine if this circular array has a cycle.
 *
 * A cycle is a sequence of indices in the circular array characterized by the following:
 * - The same set of indices is repeated when the sequence is traversed in accordance with
 *   the aforementioned rules.
 * - The length of the sequence is at least two.
 * - The loop must be in a single direction, forward or backward.
 *
 * It should be noted that a cycle in the array does not have to originate at the beginning.
 * A cycle can begin from any point in the array.
 */

type Direction = 1 | -1; // 1 for forward, -1 for backward

function circularArrayLoop(nums: number[]) {
  let slow = 0;
  let fast = 0;
  let direction: Direction = nums[slow] >= 0 ? 1 : -1;

  for (let i = 0; i < nums.length; i++) {
    slow = i;
    fast = i;
    direction = nums[slow] >= 0 ? 1 : -1;
    if (hasCycle(nums, direction, slow, fast)) {
      return true;
    }
  }
  return false;
}

function hasCycle(
  nums: number[],
  direction: Direction,
  slow: number,
  fast: number
) {
  while (true) {
    slow = getNextIndex(nums, direction, slow);
    fast = getNextIndex(nums, direction, fast);
    if (fast !== -1) {
      fast = getNextIndex(nums, direction, fast); // move fast one more time
    }
    if (slow === -1 || fast === -1 || slow === fast) {
      break;
    }
  }
  if (slow !== -1 && slow === fast) {
    return true;
  }
  return false;
}

function getNextIndex(nums: number[], direction: Direction, index: number) {
  const directionOfIndex = nums[index] >= 0 ? 1 : -1;
  if (directionOfIndex !== direction) {
    return -1; // so I can break out of the loop since I've changed directions
  }
  let nextIndex = (index + nums[index]) % nums.length; // wrap around
  if (nextIndex < 0) {
    nextIndex += nums.length;
  }
  if (nextIndex === index) {
    nextIndex = -1; // so I can break out of the loop since I've reached the same index
  }
  return nextIndex;
}

// Test
// console.log(circularArrayLoop([1, 3, -2, -4, 1])); // true

// console.log(circularArrayLoop([3, 3, 1, -1, 2])); // true
