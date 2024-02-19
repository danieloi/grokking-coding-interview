// This solution uses stack to store the solution. Stack
// will hold only the column values and one solution
// will be stored in the stack at a time.
let isValidMove = function (
  proposedRow,
  proposedCol,
  solution
) {
  // We need to check with all the queens in the current
  // solution
  for (let i = 0; i < proposedRow; i++) {
    let oldRow = i;
    let oldCol = solution[i];

    let diagonalOffset = proposedRow - oldRow;

    // oldCol == proposedCol  --> Checks if there are
    // any queens in the proposed column oldCol ==
    // proposedCol - diagonalOffset --> Checks if there
    // are any queens on the bottom left diagonal to the
    // proposed place oldCol == proposedCol +
    // diagonalOffset --> Checks if there are any queens
    // on the bottom right diagonal to the proposed
    // place
    if (
      oldCol === proposedCol ||
      oldCol === proposedCol - diagonalOffset ||
      oldCol === proposedCol + diagonalOffset
    ) {
      return false;
    }
  }
  return true;
};

let solveNQueens = function (n: number) {
  let results: number[][] = [];
  let solution = new Array<number>(n);
  let solStack: number[] = [];

  let row = 0;
  let col = 0;

  while (row < n) {
    // For the current state of the solution, check if a
    // queen can be placed in any column of this row
    while (col < n) {
      if (isValidMove(row, col, solution)) {
        // If this is a safe position for a queen (a
        // valid move), save it to the current solution
        // on the stack...
        solStack.push(col);
        solution[row] = col;
        row = row + 1;
        col = 0;
        // ... and move on to checking the next row
        // (breaking out of the inner loop)
        break;
      }
      col = col + 1;
    }
    // If we have checked all the columns
    if (col === n) {
      // If we are working on a solution
      if (solStack.length != 0) {
        // Backtracking, as current row does not offer a
        // safe spot given the previous move So, get set
        // up to check the previous row with the next
        // column
        col = solStack.pop()! + 1;
        row = row - 1;
      } else {
        // If we have backtracked all the way and found
        // this to be a dead-end, break out of the inner
        // loop
        break; // no more solutions exist
      }
    }
    // If we have found a safe spot for a queen in each
    // of the rows
    if (row === n) {
      // add the solution into results
      results.push(solution.slice());

      // backtrack to find the next solution
      row = row - 1;
      col = solStack.pop()! + 1;
    }
  }
  return results.length;
};

function main() {
  var n = [4, 5, 6, 7, 8];
  for (let i = 0; i < n.length; i++) {
    let res = solveNQueens(n[i]);
    console.log(
      String(i + 1) +
        ".  Total solutions count for " +
        String(n[i]) +
        " queens on the chessboard (" +
        String(n[i]) +
        "x" +
        String(n[i]) +
        "): ",
      res
    );
    console.log("-".repeat(100), "\n");
  }
}

main();
