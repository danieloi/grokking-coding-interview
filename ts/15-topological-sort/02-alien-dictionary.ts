import { Queue, print2DArray } from "./utils";

// Default Dict class that returns a dictionary like
// object.
class DefaultDict {
  constructor(defaultInit) {
    return new Proxy(
      {},
      {
        get: (target, name) =>
          name in target
            ? target[name]
            : (target[name] =
                typeof defaultInit === "function"
                  ? new defaultInit().valueOf()
                  : defaultInit),
      }
    );
  }
}

// helper function that creates an iterator that will
// aggregate two arrays
function zip(array1, array2) {
  let zipped: [string, string][] = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == undefined || array2[i] == undefined) {
      break;
    }
    zipped.push([array1[i], array2[i]]);
  }
  return zipped;
}

function alienOrder(words) {
  let adjList = new DefaultDict(Set);

  // 'counts' stores the number of unique letters
  let counts = {};
  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      counts[word[i]] = 0;
    }
  });

  // Step 1: We need to populate adjList and counts. 
  // For each pair of adjacent words: 
  // 'broken' will be true when in any position 
  // the letter in both the words are not same. 
  // 'exit' will be true when the length of word1 
  // is greater than that of word2.
  let broken = false;
  let exit = false;
  zip(words, words.slice(1)).forEach((w) => {
    let word1 = w[0],
      word2 = w[1],
      t = zip(word1, word2);
    for (let x = 0; x < t.length; x++) {
      let c = t[x][0];
      let d = t[x][1];
      if (c != d) {
        //The characters are not the same
        if (adjList[c].has(d) == false) {
          adjList[c].add(d);
          counts[d] += 1;
        }
        broken = true;
        break;
      }
    }

    if (broken == false) {
      // Check that second word isn't a prefix of first
      // word.
      if (word2.length < word1.length) {
        exit = true;
        return "";
      }
    }
  });

  if (exit) {
    return "";
  }

  // Step 2: We need to repeatedly pick off nodes with
  // an indegree of 0.
  let result: string[] = [];
  let sourcesQueue = new Queue();
  for (let c in counts) {
    if (counts[c] == 0) {
      sourcesQueue.enqueue(c);
    }
  }

  while (sourcesQueue.length != 0) {
    let c = sourcesQueue.dequeue();
    result.push(c);
    adjList[c].forEach((d) => {
      counts[d] -= 1;
      if (counts[d] == 0) {
        sourcesQueue.enqueue(d);
      }
    });
  }

  // If not all letters are in result, that means there
  // was a cycle and so no valid ordering. Return "".
  if (result.length < Object.keys(counts).length) {
    return "";
  }

  // Otherwise, convert the ordering we found into a
  // string and return it.
  return result.join("");
}

















// Driver code
function main() {
  let words = [
    [
      "mzosr",
      "mqov",
      "xxsvq",
      "xazv",
      "xazau",
      "xaqu",
      "suvzu",
      "suvxq",
      "suam",
      "suax",
      "rom",
      "rwx",
      "rwv",
    ],
    [
      "vanilla",
      "alpine",
      "algor",
      "port",
      "norm",
      "nylon",
      "ophellia",
      "hidden",
    ],
    ["passengers", "to", "the", "unknown"],
    ["alpha", "bravo", "charlie", "delta"],
    ["jupyter", "ascending"],
  ];

  for (let i = 0; i < words.length; i++) {
    console.log(
      i + 1 + ".\twords =",
      print2DArray(words[i])
    );
    console.log(`\tDictionary = "${alienOrder(words[i])}"`);
    console.log("-".repeat(100));
  }
}

main();
