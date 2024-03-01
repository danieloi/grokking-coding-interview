function floodFill(grid, sr, sc, target) {
  // If the source cell already has the same value as
  // `target`, return the original grid. We don't need
  // to iterate through the whole grid in this case.
  if (grid[sr][sc] === target) {
    return grid;
  } else {
    // Storing the original value of the starting cell
    // in `oldTarget`, this will help in matching the
    // values of the neighboring cells
    var oldTarget = grid[sr][sc];
    // Replacing the value of the starting cell with the
    // specified target
    grid[sr][sc] = target;
    // Calling the dfs() function on the starting cell
    // to replace the values of all connected cells
    dfs(grid, sr, sc, oldTarget, target);

    // Return the modified grid
    return grid;
  }
}























function dfs(grid, row, col, oldTarget, newTarget) {
  // Defining a list of lists that represents the four
  // cells adjacent to the starting cell 
  // i).[0, 1] -> move right 
  // ii).[1, 0] -> move down 
  // iii).[-1, 0] -> move up 
  // iv).[0, -1] -> move left
  var adjacentCells = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  // Get the length of the grid and the length of each
  // row (number of cells)
  var gridLength = grid.length;
  var totalCells = grid[0].length;

  // For each cell in the list of adjacent cells
  for (var i = 0; i < adjacentCells.length; i++) {
    var cellValue = adjacentCells[i];
    // Calculate the row and column indices of the
    // adjacent cells
    var r = row + cellValue[0];
    var c = col + cellValue[1];

    // If the adjacent cell is within the bounds of the
    // grid and has the same value as the starting cell
    if (
      r < gridLength &&
      r >= 0 &&
      c < totalCells &&
      c >= 0 &&
      grid[r][c] === oldTarget
    ) {
      // Replace the value of the adjacent cell with the
      // specified target
      grid[r][c] = newTarget;
      // Recursively call the dfs() function on the
      // adjacent cell to repeat the process
      dfs(grid, r, c, oldTarget, newTarget);
    }
  }
}















// Driver code
function main() {
  // Input grid of grids
  let grids = [
    [
      [1, 1, 0, 1],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [1, 0, 1, 1],
    ],
    [
      [1, 1, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 1],
      [1, 1, 1, 1],
    ],
    [
      [9, 9, 6, 9],
      [6, 9, 9, 6],
      [6, 9, 9, 9],
      [9, 9, 9, 9],
    ],
    [
      [1, 1, 0, 1, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 1],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
    ],
    [
      [1, 2, 0, 0],
      [3, 1, 3, 6],
      [7, 2, 1, 5],
      [1, 9, 2, 1],
    ],
  ];

  let startingRow = [2, 2, 2, 4, 1];
  let startingCol = [3, 3, 1, 3, 1];
  let newTarget = [0, 2, 1, 3, 4];

  for (let i = 0; i < grids.length; i++) {
    console.log(
      i + 1 + ".\t Grid before flood fill: ",
      grids[i]
    );
    console.log(
      "\t Starting row and column are: (",
      startingRow[i],
      ", ",
      startingCol[i],
      ")"
    );
    console.log("\t Target value: ", newTarget[i]);
    console.log(
      "\t After perform flood fill: ",
      floodFill(
        grids[i],
        startingRow[i],
        startingCol[i],
        newTarget[i]
      )
    );
    console.log("-".repeat(100));
  }
}

main();
