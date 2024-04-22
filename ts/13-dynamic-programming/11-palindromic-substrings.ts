

function countPalindromicSubstrings(s) {
  let count = 0;

  // Initialize a lookup table of dimensions len(s) *
  // len(s)
  let dp = Array(s.length)
    .fill(false)
    .map(() => Array(s.length).fill(false));

  // Base case: A string with one letter is always a
  // palindrome
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    count++;
  }

  // Base case: Substrings of two letters
  for (let i = 0; i < s.length - 1; i++) {
    dp[i][i + 1] = s[i] === s[i + 1];
    // A boolean value is added to the count where true
    // means 1 and false means 0
    count += dp[i][i + 1];
  }

  // Substrings of lengths greater than 2
  for (let length = 3; length <= s.length; length++) {
    for (
      let i = 0, j = length - 1;
      j < s.length;
      i++, j++
    ) {
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      count += dp[i][j];
    }
  }

  return count;
}








// Driver code
function main() {
  let strings = [
    "cat",
    "lever",
    "xyxxyz",
    "wwwwwwwwww",
    "tattarrattat",
  ];

  for (let i = 0; i < strings.length; i++) {
    console.log(
      i + 1 + ".\t Input string: '" + strings[i] + "'"
    );
    let result = countPalindromicSubstrings(strings[i]);
    console.log(
      "\t Number of palindromic substrings: " + result
    );
    console.log("-".repeat(100));
  }
}

main();
