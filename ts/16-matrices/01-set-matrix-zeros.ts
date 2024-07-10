import { printMatrix } from "./utils";

function setMatrixZeros(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  let fcol = false;
  let frow = false;

  // Check if there is a zero in the first column, set
  // fcol to true.
  for (let i = 0; i < rows; i++) {
    if (mat[i][0] === 0) {
      fcol = true;
      break;
    }
  }

  // Check if there is a zero in the first row, set frow
  // to true.
  for (let i = 0; i < cols; i++) {
    if (mat[0][i] === 0) {
      frow = true;
      break;
    }
  }

  // Check row elements (by ignoring the first row and
  // first column). If zero is found, set the
  // corresponding row's and column's first element to
  // zero.
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (mat[i][j] === 0) {
        mat[0][j] = mat[i][0] = 0;
      }
    }
  }

  // Check every row's first element starting from the
  // second row. Set the complete row to zero if zero is
  // found.
  for (let i = 1; i < rows; i++) {
    if (mat[i][0] === 0) {
      mat[i].fill(0);
    }
  }

  // Check every column's first element starting from
  // the second column. Set the complete column to zero
  // if zero is found.
  for (let j = 1; j < cols; j++) {
    if (mat[0][j] === 0) {
      for (let i = 1; i < rows; i++) {
        mat[i][j] = 0;
      }
    }
  }

  // If fcol is true, set the first column to zero.
  if (fcol) {
    for (let i = 0; i < rows; i++) {
      mat[i][0] = 0;
    }
  }

  // If frow is true, set the first row to zero.
  if (frow) {
    mat[0].fill(0);
  }

  return mat;
}
















// Driver code
function main() {
  const mat = [
    [
      [1, 1, 0],
      [1, 0, 1],
      [1, 1, 1],
    ],
    [
      [1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
    ],
    [
      [3, 5, 2, 0],
      [1, 0, 4, 6],
      [7, 3, 2, 4],
    ],
    [
      [1, 2, 3, 4],
      [4, 5, 6, 7],
      [8, 9, 4, 6],
    ],
    [
      [2, 6, 5, 4, 9, 1],
      [7, 2, 0, 0, 5, 4],
      [1, 1, 1, 1, 0, 1],
      [9, 8, 2, 0, 1, 3],
      [7, 8, 6, 5, 4, 3],
      [9, 8, 1, 2, 5, 6],
    ],
  ];

  for (let i = 0; i < mat.length; i++) {
    console.log(i + 1 + ". \tOriginal Matrix:");
    printMatrix(mat[i]);
    const result = setMatrixZeros(mat[i]);
    console.log("\n\tMatrix with Zeros:");
    printMatrix(result);
    console.log("-".repeat(100));
  }
}

main();
