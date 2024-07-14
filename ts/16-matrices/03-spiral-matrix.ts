import { arrayToString, printMatrix } from "./utils";

function spiralOrder(matrix) {
  // Calculate the total number of rows and columns
  let rows = matrix.length;
  let cols = matrix[0].length;

  // Set up pointers to traverse the matrix
  let row = 0;
  let col = -1;

  // Set the initial direction to 1 for moving left to
  // right
  let direction = 1;

  // Create an array to store the elements in spiral
  // order
  const result: number[] = [];

  // Traverse the matrix in a spiral order
  while (rows > 0 && cols > 0) {
    // Move horizontally in one of two directions:
    //   1. Left to right (if direction == 1)
    //   2. Right to left (if direction == -1) Increment
    //      the col pointer to move horizontally
    for (let i = 0; i < cols; i++) {
      col += direction;
      result.push(matrix[row][col]);
    }
    rows--;

    // Move vertically in one of two directions:
    //   1. Top to bottom (if direction == 1)
    //   2. Bottom to top (if direction == -1) Increment
    //      the row pointer to move vertically
    for (let i = 0; i < rows; i++) {
      row += direction;
      result.push(matrix[row][col]);
    }
    cols--;

    // Flip the direction for the next traversal
    direction *= -1;
  }

  return result;
}









// Driver code
function main() {
  const inputs = [
    [[1]],
    [[6], [2]],
    [
      [2, 14, 8],
      [12, 7, 14],
    ],
    [
      [3, 1, 1],
      [15, 12, 13],
      [4, 14, 12],
      [10, 5, 11],
    ],
    [
      [10, 1, 14, 11, 14],
      [13, 4, 8, 2, 13],
      [10, 19, 1, 6, 8],
      [20, 10, 8, 2, 12],
      [15, 6, 8, 8, 18],
    ],
  ];

  for (let i = 0; i < inputs.length; i++) {
    console.log(`${i + 1}.\tMatrix:`);
    printMatrix(inputs[i]);

    console.log(
      "\n\tSpiral order:",
      arrayToString(spiralOrder(inputs[i]))
    );

    console.log("-".repeat(100));
  }
}

main();
