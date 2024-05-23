

function findMissingNumber(nums) {
  const numsLength = nums.length;
  // initialize the cursor
  let i = 0;

  // phase 1: sort the numbers with cyclic sort
  // move the cursor through the entire list
  while (i < numsLength) {
    let valAtI = nums[i];

    // does the value belong in the range of the list?
    // if it doesn't, we get an out of bounds error
    // when we try to access nums[valAtI] later
    const belongsInRange = valAtI < numsLength;

    // is the value at the wrong index?
    const isAtWrongIndex = valAtI != nums[valAtI];

    if (belongsInRange && isAtWrongIndex) {
      [nums[i], nums[valAtI]] = [nums[valAtI], nums[i]];
    } else {
      // move the cursor to the next index
      i += 1;
    }
  }

  // phase 2: find the missing number
  for (let x = 0; x < numsLength; x++) {
    if (x != nums[x]) {
      return x;
    }
  }

  // if all the numbers are already present,
  // the missing number is the length of the list
  return numsLength;
}



































// Driver code
function main() {
  let inputnumbers = [
    [4, 0, 3, 1],
    [8, 3, 5, 2, 4, 6, 0, 1],
    [1, 2, 3, 4, 6, 7, 8, 9, 10, 11],
    [0],
    [
      1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      16, 17, 18, 19, 20, 21, 23,
    ],
  ];

  let i = 1;
  inputnumbers.forEach((x) => {
    console.log(i + ".\tnums:", x);
    console.log(
      "\n\tMissing number: ",
      findMissingNumber(x)
    );
    console.log("-".repeat(100));
    i += 1;
  });
}

main();
