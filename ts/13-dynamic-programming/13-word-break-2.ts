

export function wordBreak(s, wordDict) {
  const n = s.length;

  // Create a Set of words from the array so that the
  // lookup cost in the Set becomes O(1)
  const wordSet = new Set(wordDict);

  // Initialize the lookup table
  const dp: string[][] = new Array(n + 1).fill([]);

  // Set the first element to an empty string
  dp[0] = [""];

  for (let i = 1; i <= n; i++) {
    const temp: string[] = [];
    for (let j = 0; j < i; j++) {
      const suffix = s.substring(j, i);
      // Checking if the substring from j to i is
      // present in the wordSet
      if (wordSet.has(suffix)) {
        // Retrieve the valid sentences from the
        // previously computed subproblem
        for (const substring of dp[j]) {
          // Merge the suffix with the already
          // calculated results, excluding the leading
          // space

          temp.push(
            `${substring}${substring ? " " : ""}${suffix}`
          );
        }
      }
    }

    dp[i] = temp;
  }

  // Return the last element of dp array It contains all
  // the sentences formed from the complete string s.
  return dp[n];
}
























// Driver code
function main() {

     const s = ["vegancookbook", "catsanddog", "highwaycrash",
         "pineapplepenapple", "screamicecream", "educativecourse"];

    const wordDict = ["oghi", "ncoo", "kboo", "inea",
        "icec", "ghway", "tsand", "anco", "eame", "ghigh", "hi", "way", "wa",
        "amic", "mi", "ed", "cecre", "pple", "reamicecreamed", "ena", "tsa", "ami", "hwaycrashpineapplepenapplescreamicecreamed", "lepen", "okca", "highway", "ples", "atsa", "oghig", "ookb", "epe", "ookca", "nea", "cra", "lepe", "vegancookbookcatsandd",
        "kc", "ra", "le", "ay", "crashpineapple", "ycras", "vegancookbookcatsanddoghighwaycrashpineapplepenapplescre", "doghi", "nddo", "hway", "vegancookbookcatsanddoghi", "vegancookbookcatsanddoghighwaycr", "at", "mice", "nc", "d", "enapplescreamicecreamed", "h",
        "ecrea", "nappl", "shp", "kbo", "yc", "vegancookbookcatsanddoghighwaycrashpineapplepenapplescream", "cat", "waycrashpineapplepenapplescreamicecreamed", "tsan", "vegancookbookcatsanddoghighwaycrashpineap", "ganco", "lescr", "sand", "applescreamicecreamed", "vegancookbookcatsanddoghig", "pi", "vegancookbookcatsanddoghighwaycrashpineapp", "cookb", "okcat", "neap", "nap", "oghighwaycrashpineapplepenapplescreamicecreamed", "crashpineapplepenapplescreamicecreamed",
        "ashpi", "ega", "escreamicecreamed", "hwa", "rash", "cre", "micecreamed", "plepe", "coo", "epen", "napp", "wayc", "vegancookbookcatsanddoghighwaycrashpinea", "vegancookbookcatsanddogh", "plep", "ice", "ple", "gh", "ghw", "cook", "pl", "app", "ic", "pinea", "hello", "dog", "vegancookbookcat", "eamed", "ook", "lesc", "ddog", "ca", "vegancookbookcatsanddoghighwaycrashpineapplepenapplescreamice", "c", "escr", "penap", "boo", "eami", "ecreamed", "vegancookbookcatsanddoghighwaycrashpi", "igh", "mic", "ganc", "vegancookbookcatsanddoghighwaycrashpineapplepenap",
        "eappl", "vegancookbookcatsanddoghighway", "ep", "penapple", "b", "ycrashpineapplepenapplescreamicecreamed", "pin", "book", "p", "sa", "okb", "andd", "ayc", "sh", "vegan", "cookbook"];

    console.log("The list of words we can use to break down the strings are:\n");
    console.log(printArray(wordDict));
    console.log("");

    for (let i = 0; i < s.length; i++) {
        console.log(
            i + 1 + ".\t The possible strings from the string",
            s[i],
            "are the following combinations:\n"
        );
        console.log("\t", printArray(wordBreak(s[i], wordDict)));
        console.log("-".repeat(100));
    }
}

function printArray(array: string[]): string {
  return array.join("\n");
}

main();

