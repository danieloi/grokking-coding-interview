function longestRepeatingCharacterReplacement(s, k) {
  // initialize variables
  const stringLength = s.length;
  let lengthOfMaxSubstring = 0;
  let start = 0;
  const charFreq = new Map();
  let mostFreqCharCountInWindow = 0;

  // iterate over the input string
  for (let end = 0; end < stringLength; ++end) {
    // if the new character is not in the hash map, add it, else increment its frequency
    if (!charFreq.has(s[end])) {
      charFreq.set(s[end], 1);
    } else {
      charFreq.set(s[end], charFreq.get(s[end]) + 1);
    }

    // update the most frequent character count in the window
    mostFreqCharCountInWindow = Math.max(
      mostFreqCharCountInWindow,
      charFreq.get(s[end])
    );

    const currentWindowWidth = end - start + 1;

    // if the number of replacements in the current window have exceeded the limit, slide the window
    if (currentWindowWidth - mostFreqCharCountInWindow > k) {
      charFreq.set(s[start], charFreq.get(s[start]) - 1);
      start += 1;
    }

    // if this window is the longest so far, update the length of max substring
    lengthOfMaxSubstring = Math.max(currentWindowWidth, lengthOfMaxSubstring);
  }

  return lengthOfMaxSubstring;
}

// Driver code
const inputStrings = ["aabccbb", "abbcb", "abccde", "abbcab", "bbbbbbbbb"];
const k = [2, 1, 1, 2, 4];

for (let i = 0; i < inputStrings.length; ++i) {
  console.log(`${i + 1}.\tInput String: '${inputStrings[i]}'`);
  console.log(`\tk: ${k[i]}`);
  console.log(
    "\tLength of the longest substring with repeating characters: " +
      longestRepeatingCharacterReplacement(inputStrings[i], k[i])
  );
  console.log("-".repeat(100));
}
