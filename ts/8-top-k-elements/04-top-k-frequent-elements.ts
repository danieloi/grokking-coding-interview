import { MinHeap, printList } from "./utils";

function topKFrequent(arr, k) {
  // find the frequency of each number
  let numFrequencyMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (numFrequencyMap.has(arr[i])) {
      numFrequencyMap.set(
        arr[i],
        numFrequencyMap.get(arr[i]) + 1
      );
    } else {
      numFrequencyMap.set(arr[i], 1);
    }
  }

  let topKElements = new MinHeap();

  // go through all numbers of the numFrequencyMap and
  // push them in the topKElements, which will have top
  // k frequent numbers. If the heap size is more than
  // k, we remove the smallest(top) number
  for (let [num, frequency] of numFrequencyMap) {      
    topKElements.push([frequency, num]);
    if (topKElements.size() > k) {
      topKElements.pop();
    }
  }

  // create a list of top k numbers
  let topNumbers: number[] = [];
  while (topKElements.size() > 0) {
    topNumbers.push(topKElements.pop()[1]);
  }

  return topNumbers;
}






// Driver code
function main() {
  const arr = [
    [1, 3, 5, 12, 11, 12, 11, 12, 5],
    [1, 3, 5, 14, 18, 14, 5],
    [2, 3, 4, 5, 6, 7, 7],
    [2, 4, 3, 2, 3, 4, 5, 4, 4, 4],
    [1, 1, 1, 1, 1, 1],
    [2, 3],
  ];
  const k = [3, 2, 1, 3, 1, 2];
  for (var i = 0; i < k.length; i++) {
    console.log(
      i + 1 + ".\tInput:(" + printList(arr[i]) + ",",
      k[i] + ")"
    );
    console.log(
      "\tTop",
      k[i],
      "frequent Elements:",
      printList(topKFrequent(arr[i], k[i]))
    );
    console.log("-".repeat(100));
  }
}

main();
