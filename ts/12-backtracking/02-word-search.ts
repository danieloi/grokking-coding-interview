// Function to search a specific word in the grid
function wordSearch(grid, word) {
  let n = grid.length;
  let m = grid[0].length;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (depthFirstSearch(row, col, word, grid))
        return true;
    }
  }
  return false;
}

// Apply backtracking on every element to search the
// required word
function depthFirstSearch(row, col, word, grid) {
  if (word.length == 0) return true;
  // Check if the cell is not out of bound or particular
  // grid element is not among required characters
  if (
    row < 0 ||
    row == grid.length ||
    col < 0 ||
    col == grid[0].length ||
    grid[row][col].toLowerCase() != word[0].toLowerCase()
  ) {
    return false;
  }

  let result = false;
  grid[row][col] = "*";

  // Explore the four neighboring directions that is
  // bottom, right, top, left, by adding (0, 1), (1, 0),
  // (0, -1), (-1, 0) indices respectively
  let offsets = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  for (let offset of offsets) {
    let rowOffset = offset[0],
      colOffset = offset[1];
    result = depthFirstSearch(
      row + rowOffset,
      col + colOffset,
      word.substring(1),
      grid
    );
    // Break instead of implementing all steps and
    // wasting our time
    if (result) break;
  }
  // This will revert the cell to it's original value
  grid[row][col] = word[0];
  return result;
}










// Driver code
function main() {
  let input = [
    [
      [
        ["E", "D", "X", "I", "W"],
        ["P", "U", "F", "M", "Q"],
        ["I", "C", "Q", "R", "F"],
        ["M", "A", "L", "C", "A"],
        ["J", "T", "I", "V", "E"],
      ],
      "educative",
    ],

    [
      [
        ["O", "Y", "O", "I"],
        ["B", "I", "E", "M"],
        ["K", "D", "Y", "R"],
        ["M", "T", "W", "I"],
        ["Z", "I", "T", "O"],
      ],
      "DYNAMIC",
    ],

    [
      [
        ["h", "e", "c", "m", "l"],
        ["w", "l", "i", "e", "u"],
        ["a", "r", "r", "s", "n"],
        ["s", "i", "i", "o", "r"],
      ],
      "WARRIOR",
    ],

    [
      [
        ["C", "Q", "N", "A"],
        ["P", "S", "E", "I"],
        ["Z", "A", "P", "E"],
        ["J", "V", "T", "K"],
      ],
      "SAVE",
    ],

    [[["A"]], "ABC"],

    [
      [
        ["P", "S", "S", "I", "W", "P"],
        ["P", "Y", "C", "A", "Q", "T"],
        ["I", "S", "H", "P", "F", "Y"],
        ["M", "T", "O", "L", "O", "I"],
        ["J", "I", "N", "O", "G", "K"],
        ["I", "M", "D", "T", "Y", "T"],
      ],
      "PSYCHOLOGY",
    ],
  ];
  let num = 1;

  input.forEach((i) => {
    console.log(num + ".\tGrid = ");
    for (let j = 0; j < i[0].length; j++)
      console.log("\t\t", i[0][j]);
    if (i[1] == "") console.log(`\n\tWord = ""`);
    else console.log("\n\tWord = ", i[1]);
    let search_result = wordSearch(i[0], i[1]);
    if (search_result)
      console.log("\n\tSearch result = Word found");
    else
      console.log(
        "\n\tSearch result = Word couldn't be found"
      );
    num++;
    console.log("-".repeat(100));
  });
}

main();
