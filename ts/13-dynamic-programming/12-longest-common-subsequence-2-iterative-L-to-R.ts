

function longestCommonSubsequence(str1, str2) {
  // Length of the two input strings
  const n = str1.length;
  const m = str2.length;

  // Create a 2D array for dynamic programming
  // Initialize a lookup table
  // of dimensions len(text1) * len(text2)
  let dpGrid = Array(n + 1)
    .fill(0)
    .map(() => Array(m + 1).fill(0));

  for (let row = n - 1; row >= 0; row--) {
    for (let col = m - 1; col >= 0; col--) {
      // If the corresponding characters for this cell
      // are the same...
      if (str1[row] === str2[col]) {
        dpGrid[row][col] = 1 + dpGrid[row + 1][col + 1];
        // Otherwise they must be different...
      } else {
        dpGrid[row][col] = Math.max(
          // If we don't include the current character
          // in str1
          dpGrid[row + 1][col],
          // If we don't include the current character
          // in str2
          dpGrid[row][col + 1]
        );
      }
    }
  }

  // The original problem's answer is in
  // dp_grid[0][0]. Return it.
  return dpGrid[0][0];
}







// Driver code
function main() {
  // Arrays of input strings
  let firstStrings = [
    "qstw",
    "setter",
    "abcde",
    "partner",
    "freedom",
  ];
  let secondStrings = [
    "gofvn",
    "bat",
    "apple",
    "park",
    "redeem",
  ];

  // Iterate over the strings and print the results
  for (let i = 0; i < firstStrings.length; i++) {
    console.log(i + 1 + ".\t str1:", firstStrings[i]);
    console.log("\t str2:", secondStrings[i]);
    console.log(
      "\n\t The length of the longest common subsequence is:",
      longestCommonSubsequence(
        firstStrings[i],
        secondStrings[i]
      )
    );
    console.log("-".repeat(100));
  }
}

main();
