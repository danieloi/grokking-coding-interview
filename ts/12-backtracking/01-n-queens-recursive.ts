// this method determines if a queen can be placed at
// proposedRow, proposedCol with current solution i.e.
// this move is valid only if no queen in current
// solution may attack the square at proposedRow and
// proposedCol
function isValidMove(proposedRow, proposedCol, solution) {
  for (let i = 0; i < proposedRow; i++) {
    let oldRow = i,
      oldCol = solution[i],
      diagonalOffset = proposedRow - oldRow;

    if (
      oldCol == proposedCol ||
      oldCol == proposedCol - diagonalOffset ||
      oldCol == proposedCol + diagonalOffset
    ) {
      return false;
    }
  }
  return true;
}

// Recursive worker function
function solveNQueensRec(n, solution, row, results) {
  if (row == n) {
    results.push(solution);
    return;
  }

  for (let i = 0; i < n; i++) {
    let valid = isValidMove(row, i, solution);
    if (valid) {
      solution[row] = i;
      solveNQueensRec(n, solution, row + 1, results);
    }
  }
}

// Function to solve N-Queens problem
function solveNQueens(n) {
  let results = [];
  let solution = Array(n).fill(-1);
  solveNQueensRec(n, solution, 0, results);
  return results.length;
}

function main() {
  let n = [4, 5, 6, 7, 8];
  for (let i = 0; i < n.length; i++) {
    console.log(
      i + 1 + ".\tQueens:",
      `${n[i]}, Chessboard: (${n[i]}x${n[i]})`
    );
    let res = solveNQueens(n[i]);
    console.log(
      `\n\tTotal solutions count for ${n[i]} queens on a (${n[i]}x${n[i]}) chessboard: ${res}`
    );
    console.log("-".repeat(100), "\n");
  }
}

main();
