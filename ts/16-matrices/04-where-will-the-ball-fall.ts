



function findExitColumn(grid) {
  // Initialize a result array with -1 to store the
  // results
  const result = Array(grid[0].length).fill(-1);

  // Loop through each column in the grid
  for (let col = 0; col < grid[0].length; col++) {
    let currentColumn = col;

    // Loop through each row in the grid
    for (let row = 0; row < grid.length; row++) {
      let nextColumn =
        currentColumn + grid[row][currentColumn];

      // Check if the ball is out of the grid or
      // hit a "V" shaped pattern
      if (
        nextColumn < 0 ||
        nextColumn > grid[0].length - 1 ||
        grid[row][currentColumn] !== grid[row][nextColumn]
      ) {
        break;
      }

      // Check if the ball has reached the bottom
      if (row === grid.length - 1) {
        result[col] = nextColumn;
      }
      currentColumn = nextColumn;
    }
  }
  return result;
}














// Helper function to print a matrix
function printMatrix(matrix) {
  for (let row of matrix) {
    console.log(row.join("\t"));
  }
}














// Driver code
function main() {
  // Test cases
  const grids = [
    [
      [1, 1, 1, -1, -1],
      [1, 1, 1, -1, -1],
      [-1, -1, -1, 1, 1],
      [1, 1, 1, 1, -1],
      [-1, -1, -1, -1, -1],
    ],
    [
      [1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1],
      [-1, -1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1],
      [1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1],
      [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1, 1, -1],
    ],
    [
      [-1, -1, -1, -1],
      [1, 1, 1, 1],
      [-1, -1, -1, -1],
      [1, 1, 1, 1],
    ],
    [[1]],
    [
      [-1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1],
    ],
  ];

  for (let i = 0; i < grids.length; i++) {
    console.log(`Test Case #${i + 1}\n`);
    console.log("Input grid:");
    printMatrix(grids[i]);
    console.log("\nOutput:", findExitColumn(grids[i]));
    console.log("-".repeat(100));
  }
}

main();
