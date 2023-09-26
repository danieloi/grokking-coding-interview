function minWindow(str1, str2) {
  let sizeStr1 = str1.length;
  let sizeStr2 = str2.length;
  let minSubLen = Infinity;
  let indexS1 = 0;
  let indexS2 = 0;
  let minSubsequence = "";
  while (indexS1 < sizeStr1) {
    if (str1[indexS1] === str2[indexS2]) {
      indexS2++;
      if (indexS2 === sizeStr2) {
        let start = indexS1;
        let end = indexS1;
        indexS2--;
        while (indexS2 >= 0) {
          if (str1[start] === str2[indexS2]) {
            indexS2--;
          }
          start--;
        }
        start++;
        if (end - start + 1 < minSubLen) {
          minSubLen = end - start + 1;
          minSubsequence = str1.slice(start, end + 1);
        }
        indexS1 = start;
        indexS2 = 0;
      }
    }
    indexS1++;
  }
  return minSubsequence;
}

// driver code
function main() {
  const str1 = [
    "abcdedeaqdweq",
    "abcdebdde",
    "fgrqsqsnodwmxzkzxwqegkndaa",
    "zxcvnhss",
    "alpha",
  ];
  const str2 = ["aqeq", "bde", "kzed", "css", "la"];

  for (let i = 0; i < str1.length; i++) {
    console.log(`${i + 1}. \tInput string: (${str1[i]}, ${str2[i]})`);
    console.log(`\tSubsequence string: ${minWindow(str1[i], str2[i])}`);
    console.log("-".repeat(100));
  }
}

main();
