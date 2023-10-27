import { MinHeap } from "./utils";

function kSmallestNumber(lists: number[][], k: number) {
  // for a loop later
  let listLength = lists.length,
    // declaring a min-heap to keep track of
    //smallest elements
    minHeapforKSmallest = new MinHeap();

  for (let index = 0; index < listLength; index++) {
    // if there are no elements in the input lists,
    // return []
    if (lists[index].length == 0) {
      continue;
    }

    // place the first element of each list in
    // the minHeap
    else minHeapforKSmallest.push([lists[index][0], index, 0]);
  }

  // if our kth element equals to numbersChecked,
  // return that number
  let numbersChecked = 0,
    smallestNumber = 0,
    listIndex = 0,
    numIndex = 0;

  while (minHeapforKSmallest.size() > 0) {
    // iterate over the elements pushed in our min-heap
    // get the smallest number from top of heap and
    // its corresponding list
    let result = minHeapforKSmallest.pop();
    [smallestNumber, listIndex, numIndex] = result;

    numbersChecked += 1;

    if (numbersChecked == k) break;

    // if there are more elements in list of the top element,
    // add the next element of that list to the min-heap
    if (numIndex + 1 < lists[listIndex].length) {
      minHeapforKSmallest.push([
        lists[listIndex][numIndex + 1],
        listIndex,
        numIndex + 1,
      ]);
    }
  }

  // return the kth number found in input lists
  return smallestNumber;
}

// helper function
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
  let lists = [
    [
      [2, 6, 8],
      [3, 6, 10],
      [5, 8, 11],
    ],
    [
      [1, 2, 3],
      [4, 5],
      [6, 7, 8, 15],
      [10, 11, 12, 13],
      [5, 10],
    ],
    [[], [], []],
    [
      [1, 1, 3, 8],
      [5, 5, 7, 9],
      [3, 5, 8, 12],
    ],
    [[5, 8, 9, 17], [], [8, 17, 23, 24]],
  ];

  let k = [5, 50, 7, 4, 8];

  // loop to execute till the length of list k
  for (let i = 0; i < k.length; i++) {
    console.log(
      i + 1 + ".\t Input lists: ",
      print2DArray(lists[i]),
      `\n\t K = ${k[i]}`,
      `\n\t ${k[i]}th smallest number from the given lists is:`,
      kSmallestNumber(lists[i], k[i])
    );
    console.log("-".repeat(100));
  }
}

main();
