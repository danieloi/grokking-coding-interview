function updateMatrix(mat) {
  // Calculate the number of rows and columns in matrix
  const m = mat.length;
  const n = mat[0].length;

  // First pass: Top-left to bottom-right
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // Check if the element is greater than zero
      if (mat[i][j] > 0) {
        // Check the element above, if there is no
        // element above, set to infinity
        const up = i > 0 ? mat[i - 1][j] : Infinity;

        // Check the left element, if there is no left
        // element, set to infinity
        const left = j > 0 ? mat[i][j - 1] : Infinity;

        // Update the current element with the minimum
        // of element above and to its left, + 1
        mat[i][j] = Math.min(up, left) + 1;
      }
    }
  }

  // Second pass: Bottom-right to top-left
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // Check if the element is greater than zero
      if (mat[i][j] > 0) {
        // Check the element below, if there is no
        // element below, set to infinity
        const down = i < m - 1 ? mat[i + 1][j] : Infinity;

        // Check the right element, if there is no right
        // element, set to infinity
        const right = j < n - 1 ? mat[i][j + 1] : Infinity;

        // Update the current element with the minimum
        // of its value, element below and to its right,
        // + 1
        mat[i][j] = Math.min(
          mat[i][j],
          Math.min(down + 1, right + 1)
        );
      }
    }
  }

  return mat;
}


















// Driver code
const inputBits = [
  [
    [0, 1],
    [1, 1],
  ],
  [
    [0, 0, 1],
    [0, 1, 1],
    [1, 0, 1],
  ],
  [
    [0, 0, 0],
    [0, 1, 0],
    [1, 0, 1],
  ],
  [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  [
    [0, 1, 0, 1],
    [1, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
  ],
];

for (let i = 0; i < inputBits.length; i++) {
  console.log(i + 1 + ".\t Input matrix:");
  printMatrix(inputBits[i]);

  const updatedMatrix = updateMatrix(inputBits[i]);

  console.log("\n\t Distance matrix:");
  printMatrix(updatedMatrix);

  console.log("-".repeat(100));
}

function printMatrix(mat: number[][]) {
  mat.forEach((row) => {
    console.log(row.join(" "));
  });
}

