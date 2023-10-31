import { MinHeap } from "./utils";

function kthSmallestNumber(matrix: number[][], k: number) {
  // the number of rows in the matrix
  let rowCount = matrix.length;
  // minHeap to keep track of smallest elements
  const minNumbers = new MinHeap();

  for (let index = 0; index < rowCount; index++) {
    // push the first element of each row in the minHeap
    // push() puts an element in an existing heap in a
    // way that the heap property is maintained.
    minNumbers.push([matrix[index][0], index, 0]);
  }

  // when numbersChecked equals k,
  // we'll return smallestElement
  let numbersChecked = 0,
    smallestElement = 0,
    rowIndex,
    colIndex;
  // iterate over the elements in our minHeap
  while (minNumbers.size() > 0) {
    // get the smallest number from top of heap
    // and its corresponding list
    let result = minNumbers.pop();
    [smallestElement, rowIndex, colIndex] = result;

    numbersChecked += 1;
    // when numbersChecked equals k, return smallestElement
    if (numbersChecked == k) break;

    // if the current element has a next element in its row,
    // add the next element of that row to the minHeap
    if (colIndex + 1 < matrix[rowIndex].length) {
      minNumbers.push([
        matrix[rowIndex][colIndex + 1],
        rowIndex,
        colIndex + 1,
      ]);
    }
  }

  // return the kth number found in input matrix
  return smallestElement;
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

function main() {
  // multiple inputs for efficient results
  let matirx = [
      [
        [2, 6, 8],
        [3, 7, 10],
        [5, 8, 11],
      ],

      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],

      [[5]],

      [
        [2, 5, 7, 9, 10],
        [4, 6, 8, 12, 14],
        [11, 13, 16, 18, 20],
        [15, 17, 21, 24, 26],
        [19, 22, 23, 25, 28],
      ],

      [
        [3, 5, 7, 9, 11, 13],
        [6, 8, 10, 12, 14, 16],
        [15, 17, 19, 21, 23, 25],
        [18, 20, 22, 24, 26, 28],
        [27, 29, 31, 33, 35, 37],
        [30, 32, 34, 36, 38, 40],
      ],
    ],
    k = [3, 4, 1, 10, 15];

  // loop to execute till the length of list k
  for (let i = 0; i < k.length; i++) {
    console.log(
      i + 1 + ".\t Input matrix: ",
      print2DArray(matirx[i]),
      `\n\t K = ${k[i]}`,
      `\n\t ${k[i]}th smallest number in the matrix is:`,
      kthSmallestNumber(matirx[i], k[i])
    );
    console.log("-".repeat(100));
  }
}

main();
