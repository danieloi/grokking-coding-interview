function dutch_flag_sort(arr: number[]) {
  // all elements < low are 0, and all elements > high are 2
  // all elements from >= low < i are 1
  let low = 0,
    high = arr.length - 1,
    i = 0;
  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]]; // swap
      // increment 'i' and 'low'
      i += 1;
      low += 1;
    } else if (arr[i] === 1) {
      i += 1;
    } else {
      // the case for arr[i] === 2
      [arr[i], arr[high]] = [arr[high], arr[i]]; // swap
      // decrement 'high' only, after the swap the number at index 'i' could be 0, 1, or 2
      high -= 1;
    }
  }
}

let arr = [1, 0, 2, 1, 0];
dutch_flag_sort(arr);
console.log(arr);

arr = [2, 2, 0, 1, 2, 0];
dutch_flag_sort(arr);
console.log(arr);
