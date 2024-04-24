

function longestCommonSubsequence(str1, str2) {
  // Length of the two input strings
  const n = str1.length;
  const m = str2.length;

  // Create a 2D array for dynamic programming
  const dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(-1);
  }

  // Call the helper function
  return LCSHelper(str1, str2, 0, 0, dp);
}

function LCSHelper(str1, str2, i, j, dp) {
  // If either cursor has reached the end, return 0
  if (i === str1.length || j === str2.length) {
    return 0;
  }

  // If the current state has already been computed, return it
  if (dp[i][j] !== -1) {
    return dp[i][j];
  }

  // If current characters match, move both cursors
  if (str1[i] === str2[j]) {
    dp[i][j] = 1 + LCSHelper(str1, str2, i + 1, j + 1, dp);
  } else {
    // Else, choose the maximum length of two possibilities
    dp[i][j] = Math.max(
      // If we don't include the current character in str1
      LCSHelper(str1, str2, i + 1, j, dp),
      // If we don't include the current character in str2
      LCSHelper(str1, str2, i, j + 1, dp)
    );
  }

  // Return the length of the longest common subsequence
  return dp[i][j];
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
