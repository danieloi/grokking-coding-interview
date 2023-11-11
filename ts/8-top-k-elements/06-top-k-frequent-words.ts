import { LexMinHeap, printList } from "./utils";

function topKFrequent(words: string[], k: number) {
  // find the frequency of each word
  let wordFrequencyMap = new Map();
  for (let i = 0; i < words.length; i++) {
    if (wordFrequencyMap.has(words[i])) {
      wordFrequencyMap.set(
        words[i],
        wordFrequencyMap.get(words[i]) + 1
      );
    } else {
      wordFrequencyMap.set(words[i], 1);
    }
  }

  let topKElements = new LexMinHeap();

  // go through all words of the wordFrequencyMap and
  // push them in the topKElements, which will have top
  // k frequent words. If the heap size is more than
  // k, we remove the smallest(top) word
  for (let [word, frequency] of wordFrequencyMap) {
    topKElements.push([frequency, word]);
    if (topKElements.size() > k) {
      topKElements.pop();
    }
  }

  // create a list of top k words
  let topWords: string[] = [];
  while (topKElements.size() > 0) {
    topWords.push(topKElements.pop()[1]);
  }

  return topWords.reverse();
}

// Driver code
function main() {
  const words = [
    [
      "lets",
      "play",
      "cricket",
      "and",
      "then",
      "lets",
      "play",
      "badminton",
    ],
    [
      "the",
      "day",
      "is",
      "sunny",
      "the",
      "the",
      "the",
      "sunny",
      "is",
      "is",
    ],
    [
      "i",
      "love",
      "developing",
      "i",
      "love",
      "coding",
      "i",
      "watch",
      "fictional",
      "movies",
    ],
  ];
  const k = [3, 4, 2];
  for (var i = 0; i < k.length; i++) {
    console.log(
      i + 1 + ".\tInput:(" + printList(words[i]) + ",",
      k[i] + ")"
    );
    console.log(
      "\tTop",
      k[i],
      "frequent Words:",
      printList(topKFrequent(words[i], k[i]))
    );
    console.log("-".repeat(100));
  }
}

main();
