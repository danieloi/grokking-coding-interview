

// Function to check if a string can be broken down into
// words from the dictionary
function wordBreak(s, wordDict) {
  const n = s.length;

  // Create a Set of words from the array so that the
  // lookup cost in the Set becomes O(1)
  const wordSet = new Set(wordDict);

  // Initialize the lookup table
  const dp = new Array(n + 1).fill(false);

  // Set the first element to true as it represents the
  // empty string
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      // Checking if the substring from j to i is
      // present in the wordSet and dp[j] is true
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        // If a substring is found, no need to check
        // further smaller substrings
        break;
      }
    }
  }

  // Return the last element of dp array
  return dp[n];
}













// Driver code @ts-ignore
function main() {
  const s = [
    "vegancookbook",
    "catsanddog",
    "highwaycrash",
    "pineapplepenapple",
    "screamicecream",
    "educativecourse",
  ];
  const wordDict = [
    "ncoo",
    "kboo",
    "inea",
    "icec",
    "ghway",
    "and",
    "anco",
    "hi",
    "way",
    "wa",
    "amic",
    "ed",
    "cecre",
    "ena",
    "tsa",
    "ami",
    "lepen",
    "highway",
    "ples",
    "ookb",
    "epe",
    "nea",
    "cra",
    "lepe",
    "ycras",
    "dog",
    "nddo",
    "hway",
    "ecrea",
    "apple",
    "shp",
    "kbo",
    "yc",
    "cat",
    "tsan",
    "ganco",
    "lescr",
    "ep",
    "penapple",
    "pine",
    "book",
    "cats",
    "andd",
    "vegan",
    "cookbook",
  ];

  console.log(
    "The list of words we can use to break down the strings are:\n"
  );
  console.log("[" + wordDict.join(", ") + "]\n");

  console.log("-".repeat(100));

  for (let i = 0; i < s.length; ++i) {
    console.log(`Test Case #${i + 1}\n\nInput: '${s[i]}'`);
    printPossibleCombinations(s[i], wordDict);
    console.log("Output: " + wordBreak(s[i], wordDict));
    console.log("-".repeat(100));
  }
}

function printPossibleCombinations(s, wordDict) {
  console.log(
    `Possible combinations of words from the string '${s}' are:\n`
  );
  console.log(wordDict.join(", "));
  console.log("\n");
}

main();
