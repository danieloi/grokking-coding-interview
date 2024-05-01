
function numOfDecodings(decodeStr) {
  const strLen = decodeStr.length;

  const dp = new Array(strLen + 1).fill(0);
  // there is only one way to decode an empty string
  dp[0] = 1;

  // the first element of the dp array is 1 if the first
  // character of the string is not '0', 
  if (decodeStr[0] !== "0") {
    dp[1] = 1;
  } else {
    // there's no way to decode a string that starts
    // with '0'
    return 0;
  }

  // iterate through the input string starting from the
  // 2nd character
  for (let i = 2; i <= strLen; ++i) {
    // if the current character is not '0', add the
    // number of ways to decode the substring without
    // the current character
    if (decodeStr[i - 1] !== "0") {
      dp[i] += dp[i - 1];
    }

    // if the substring of the current and previous
    // characters is a valid two-digit number, add the
    // number of ways to decode the substring without
    // the current and previous characters
    if (
      decodeStr[i - 2] === "1" ||
      (decodeStr[i - 2] === "2" && decodeStr[i - 1] <= "6")
    ) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[strLen];
}





















// Driver code
const decodeStr = [
  "124",
  "123456",
  "11223344",
  "0",
  "0911241",
  "10203",
  "999901",
];

for (let i = 0; i < decodeStr.length; ++i) {
  console.log(
    `${i + 1}.\t There are ${numOfDecodings(
      decodeStr[i]
    )} ways in which we can decode the string: '${
      decodeStr[i]
    }'`
  );
  console.log("-".repeat(100));
}
