import { MinHeap } from "./utils";

function kSmallestPairs(
  list1: number[],
  list2: number[],
  k: number
) {
  // keeps track of the smallest sums
  let minHeapForPairs = new MinHeap();
  // the value we return
  let pairs: number[][] = [];

  // iterate over the length of list 1
  // or k, whichever is smaller
  for (let i = 0; i < Math.min(k, list1.length); i++) {
    // place sum of each number in list1 and
    // the first number in list2 into the min-heap
    minHeapForPairs.push([list1[i] + list2[0], i, 0]);
  }

  let counter = 1;

  // loop over elements of min-heap and only go upto k
  while (minHeapForPairs.size() > 0 && counter <= k) {
    // place sum of the top element of min-heap
    // and its corresponding pairs in i and j
    let [sumOfPairs, i, j] = minHeapForPairs.pop();

    // add pairs with the smallest sum in the new list
    pairs.push([list1[i], list2[j]]);

    // increment the index for the 2nd list, as we've
    // compared all possible pairs with the
    // 1st index of list2
    let nextElement = j + 1;

    // if next element is available for list2
    // then add it to the heap
    if (list2.length > nextElement) {
      minHeapForPairs.push([
        list1[i] + list2[nextElement],
        i,
        nextElement,
      ]);
    }
    counter++;
  }
  // return the pairs with the smallest sums
  return pairs;
}

// Helper function
function print2DArray(arr) {
  let result = "[";
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "object") {
      result += print2DArray(arr[i]);
    } else {
      result += arr[i];
    }
    if (i != arr.length - 1) result += ", ";
  }
  return (result += "]");
}

// Driver code
function main() {
  // multiple inputs for efficient results
  let list1 = [
      [2, 8, 9],
      [1, 2, 300],
      [1, 1, 2],
      [4, 6],
      [4, 7, 9],
      [1, 1, 2],
    ],
    // multiple inputs for efficient results
    list2 = [
      [1, 3, 6],
      [1, 11, 20, 35, 300],
      [1, 2, 3],
      [2, 3],
      [4, 7, 9],
      [1],
    ],
    k = [9, 30, 1, 2, 5, 4];

  // loop to execute till the length of list k
  for (let i = 0; i < k.length; i++) {
    console.log(
      i +
        1 +
        `.\t Input pairs: ${print2DArray(
          list1[i]
        )}, ${print2DArray(list2[i])} \n\t k = ${k[i]}`
    );
    console.log(
      "\t Pairs with the smallest sum are:",
      print2DArray(kSmallestPairs(list1[i], list2[i], k[i]))
    );
    console.log("-".repeat(100));
  }
}

main();
