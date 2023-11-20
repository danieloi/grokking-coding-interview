function binarySearch(array, target) {
  // initialize the left and the right pointer
  let left = 0;
  let right = array.length - 1;

  // find the first closest element to target while
  // left is less than or equal to right
  while (left <= right) {
    // compute the middle index
    let mid = Math.floor((left + right) / 2);

    // if the value at mid is equal to target,
    // return mid
    if (array[mid] === target) {
      return mid;
    }

    // if the value at mid is less than target, move
    // left forward
    if (array[mid] < target) {
      left = mid + 1;
      // if the value at mid is greater than target,
      // move right backward
    } else {
      right = mid - 1;
    }
  }
  return left;
}

export default binarySearch;
