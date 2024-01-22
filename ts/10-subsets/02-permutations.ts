import { printList } from "./utils";

// This function will swap characters for every
// permutation
function swapChar(word, i, j) {
  let swapIndex = word.split("");

  let temp = swapIndex[j];
  swapIndex[j] = swapIndex[i];

  swapIndex[i] = temp;

  return swapIndex.join("");
}

function permuteStringRec(word, currentIndex, result) {
  var swappedStr;

  if (currentIndex === word.length - 1) {
    result.push(word);
    return;
  }

  for (
    var index = currentIndex;
    index < word.length;
    index++
  ) {
    swappedStr = swapChar(word, currentIndex, index);
    permuteStringRec(swappedStr, currentIndex + 1, result);
  }
}

function permuteWord(word) {
  let result = [];

  permuteStringRec(word, 0, result);

  return result;
}

// Driver code
function main() {
  const inputWord = ["ab", "bad", "abcd"];

  for (var index = 0; index < inputWord.length; index++) {
    const permutedWords = permuteWord(inputWord[index]);

    console.log(
      index + 1 + ".\tInput string:",
      "'" + inputWord[index] + "'"
    );
    console.log(
      "\tAll possible permutations are:",
      printList(permutedWords)
    );
    console.log("-".repeat(100));
  }
}

main();
