var findLongestSubstring = function (str: string) {
  if (str.length == 0) return 0;

  let n = str.length;
  let windowStart = 0,
    longest = 0,
    windowLength = 0;

  let lastSeenAt = {};

  // Traverse str to find the longest substring
  // without repeating characters.
  let index = 0;
  for (; index < n; index++) {
    let val = str[index];

    // If the current element is not present in the hash map,
    // then store it in the hash map with the value as the current index.
    if (!(val in lastSeenAt)) {
      lastSeenAt[val] = index;
    } else {
      // If the current element is present in the hash map,
      // it means that this element may have appeared before.
      // Check if the current element occurs before or after `windowStart`.
      if (lastSeenAt[val] >= windowStart) {
        windowLength = index - windowStart;
        if (longest < windowLength) {
          longest = windowLength;
        }
        // The next substring will start after the last
        // occurence of the current element.
        windowStart = lastSeenAt[val] + 1;
      }

      // Update the last occurence of
      // the element in the hash map
      lastSeenAt[val] = index;
    }
  }

  // Update the longest substring's
  // length and starting index.
  if (longest < index - windowStart) {
    longest = index - windowStart;
  }

  return longest;
};

function main() {
  let str = [
    "abcabcbb",
    "pwwkew",
    "bbbbb",
    "ababababa",
    "",
    "ABCDEFGHI",
    "ABCDEDCBA",
    "AAAABBBBCCCCDDDD",
  ];

  for (let i = 0; i < str.length; i++) {
    console.log(i + 1 + ". \t Input String:", str[i]);
    console.log(
      "\t Length of longest substring:",
      findLongestSubstring(str[i])
    );
    console.log("-".repeat(100));
  }
}

main();
