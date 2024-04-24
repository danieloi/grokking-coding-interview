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

function permuteWord(word) {
    let result: string[] = [];
    let stack: { word: string, i: number }[] = [{ word, i: 0 }];

    while (stack.length > 0) {
      let { word, i } = stack.pop()!;

      if (i === word.length) {
        result.push(word);
      } else {
        for (let j = i; j < word.length; j++) {
          let swapped = swapChar(word, i, j);
          stack.push({ word: swapped, i: i + 1 });
        }
      }
    }

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
