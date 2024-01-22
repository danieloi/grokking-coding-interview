import { printList } from "./utils";

// Use backtrack function to generate all possible
// combinations
function backtrack(
  index,
  path,
  digits,
  letters,
  combinations
) {
  // If the length of path and digits is same, we have a
  // complete combination
  if (path.length === digits.length) {
    // Join the path list into a string and add it to
    // combinations list
    combinations.push(path.join(""));
    return; // Backtrack
  }
  // Get the list of letters using the index and
  // digits[index]
  let possibleLetters = letters[digits[index]];

  if (possibleLetters) {
    for (let i = 0; i < possibleLetters.length; i++) {
      // Add the current letter to the path
      let letter = possibleLetters[i];
      path.push(letter);
      // Recursively explore the next digit
      backtrack(
        index + 1,
        path,
        digits,
        letters,
        combinations
      );
      // Remove the current letter from the path before
      // backtracking to explore other combinations
      path.pop();
    }
  }
}






function letterCombinations(digits) {
  let combinations = [];

  // If the input is empty, immediately return an empty
  // answer array
  if (digits.length == 0) {
    return [];
  }

  //  Mapping the digits to their corresponding letters
  let digitsMapping = {
    1: [""],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  // Initiate backtracking with an empty path and
  // starting index of 0

  backtrack(0, [], digits, digitsMapping, combinations);
  return combinations;
}


















function main() {
  const digitsArray = [
    "23",
    "73",
    "426",
    "78",
    "925",
    "2345",
  ];
  let counter = 1;
  for (var i = 0; i < digitsArray.length; i++) {
    console.log(
      counter +
        ".\tAll letter combinations for '" +
        digitsArray[i] +
        "':",
      printList(letterCombinations(digitsArray[i]))
    );
    counter += 1;
    console.log("-".repeat(100));
  }
}

main();
