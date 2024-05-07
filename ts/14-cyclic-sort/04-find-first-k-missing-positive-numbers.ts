export function firstKMissingNumbers(arr, k) {
  const arrLength = arr.length;

  // initialize the cursor
  let i = 0;

  // phase 1: sort the numbers with cyclic sort move the
  // cursor through the list
  while (i < arrLength) {
    // has minus 1 because range starts from 1 not 0
    const valAtI = arr[i] - 1;

    const belongsInRange =
      valAtI >= 0 && valAtI < arrLength;

    const isAtWrongIndex = arr[i] !== arr[valAtI];

    if (belongsInRange && isAtWrongIndex) {
      [arr[i], arr[valAtI]] = [arr[valAtI], arr[i]];
    } else {
      i += 1;
    }
  }

  const missingNumbers: number[] = [];
  const extraNumbers = new Set();

  // phase 2: find the first missing positive integers
  // within the current range
  for (let x = 0; x < arrLength; x++) {
    if (missingNumbers.length < k) {
      if (x + 1 !== arr[x]) {
        missingNumbers.push(x + 1);
        extraNumbers.add(arr[x]);
      }
    }
  }

  // phase 3: build up missingNumbers till there are k
  // numbers there

  let cursor = 1;
  while (missingNumbers.length < k) {
    const potentialMissingNumber = cursor + arrLength;

    // don't add numbers already in the list
    if (!extraNumbers.has(potentialMissingNumber)) {
      missingNumbers.push(potentialMissingNumber);
    }

    cursor += 1;
  }

  return missingNumbers;
}

// expected [6,7,8,9,10,11]
console.log(firstKMissingNumbers([1, 2, 3, 4, 5], 6));

// expected [3,4]
console.log(firstKMissingNumbers([1, -1, 2], 2));

// expected [1,2,3,4]
console.log(firstKMissingNumbers([-4, 6], 4));


// expected [2,6,7]
console.log(firstKMissingNumbers([0, -5, 1, 3, 5, 4], 3));