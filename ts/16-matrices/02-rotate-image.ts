import { printMatrix } from "./utils";

function rotateImage(matrix) {
  const n = matrix.length;

  for (let row = 0; row < n / 2; row++) {
    for (let col = row; col < n - row - 1; col++) {
      // Swap the top-left and top-right cells in the
      // current group
      [matrix[row][col], matrix[col][n - 1 - row]] = [
        matrix[col][n - 1 - row],
        matrix[row][col],
      ];

      // Swap the top-left and bottom-right cells in the
      // current group
      [matrix[row][col], matrix[n - 1 - row][n - 1 - col]] =
        [
          matrix[n - 1 - row][n - 1 - col],
          matrix[row][col],
        ];

      // Swap the top-left and bottom-left cells in the
      // current group
      [matrix[row][col], matrix[n - 1 - col][row]] = [
        matrix[n - 1 - col][row],
        matrix[row][col],
      ];
    }
  }
  return matrix;
}















// Driver code
function main() {
  const inputs = [
    [[1]],
    [
      [6, 9],
      [2, 7],
    ],
    [
      [2, 14, 8],
      [12, 7, 14],
      [3, 3, 7],
    ],
    [
      [3, 1, 1, 7],
      [15, 12, 13, 13],
      [4, 14, 12, 4],
      [10, 5, 11, 12],
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
    console.log(i + 1 + ".\tMatrix:");
    printMatrix(inputs[i]);

    console.log("\n\tRotated matrix:");
    printMatrix(rotateImage(inputs[i]));

    console.log("-".repeat(100));
  }
}

main();