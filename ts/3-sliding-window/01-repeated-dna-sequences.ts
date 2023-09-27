function findRepeatedSequences(s, k) {
  const n = s.length;

  if (n < k) {
    return new Set();
  }

  // Mapping of characters
  const mapping = new Map([
    ["A", 1],
    ["C", 2],
    ["G", 3],
    ["T", 4],
  ]);

  // Base value
  const a = 4;

  // Numeric representation of the sequence
  const numbers = new Array(n);
  for (let i = 0; i < n; i++) {
    numbers[i] = mapping.get(s[i]);
  }

  // Current hash value
  let hashValue = 0;

  // 1. Set to store the unique hash values
  // 2. Set to store the repeated substrings
  const hashSet = new Set();
  const output = new Set();

  for (let i = 0; i < n - k + 1; i++) {
    // If the window is at its initial position, calculate the hash value from scratch
    if (i === 0) {
      for (let j = 0; j < k; j++) {
        hashValue += numbers[j] * Math.pow(a, k - j - 1);
      }
    }

    // Otherwise, utilize the previous hash value
    else {
      const previousHashValue = hashValue;
      hashValue =
        (previousHashValue - numbers[i - 1] * Math.pow(a, k - 1)) * a +
        numbers[i + k - 1];
    }

    // If the current hash value is present in the hash set, the current substring has been repeated, so we add it to the output
    if (hashSet.has(hashValue)) {
      output.add(s.substring(i, i + k));
    }

    // We add the evaluated hash value to the hash set
    hashSet.add(hashValue);
  }
  return output;
}

// Driver code
function main() {
  const inputsString = [
    "ACGT",
    "AGACCTAGAC",
    "AAAAACCCCCAAAAACCCCCC",
    "GGGGGGGGGGGGGGGGGGGGGGGGG",
    "TTTTTCCCCCCCTTTTTTCCCCCCCTTTTTTT",
    "TTTTTGGGTTTTCCA",
    "AAAAAACCCCCCCAAAAAAAACCCCCCCTG",
    "ATATATATATATATAT",
  ];
  const inputsK = [3, 3, 8, 12, 10, 14, 10, 6];

  for (let i = 0; i < inputsK.length; i++) {
    console.log(
      i + 1 + ".\tInput sequence: ",
      inputsString[i],
      "\n\tk: ",
      inputsK[i],
      "\n\n\tRepeated sequences: ",
      printSet(findRepeatedSequences(inputsString[i], inputsK[i]))
    );
    console.log("-".repeat(100));
  }
}

function printSet(set) {
  let output = "[";
  for (const element of set) {
    output += `'${element}', `;
  }
  output += "]";
  return output;
}

main();
