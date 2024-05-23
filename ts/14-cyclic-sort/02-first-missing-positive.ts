
// difference between this and previous problem
// is the numbers here start from 1 not 0
function smallestMissingPositiveInteger(nums) {
  const numsLength = nums.length;
  // initialize the cursor
  let i = 0;

  // phase 1: sort the numbers with cyclic sort
  // move the cursor through the list
  while (i < numsLength) {
    // has minus 1 because the numbers start from 1 not 0
    const valAtI = nums[i] - 1;

    // does the value belong in the range of the list?
    // if it doesn't, we get an out of bounds error
    // when we try to access nums[valAtI] later
    const belongsInRange =
      valAtI >= 0 && valAtI < numsLength;

    // is the value at the wrong index?
    const isAtWrongIndex = nums[i] !== nums[valAtI];

    if (belongsInRange && isAtWrongIndex) {
      [nums[i], nums[valAtI]] = [nums[valAtI], nums[i]];
    } else {
      i++;
    }
  }

  // phase 2: find the first missing positive integer
  for (let x = 0; x < numsLength; x++) {
    // has plus 1 because the numbers start from 1 not 0
    if (x + 1 !== nums[x]) {
      return x + 1;
    }
  }

  // if all numbers are in the correct spot,
  // the first missing positive integer is the
  // length of the list + 1
  return numsLength + 1;
}






























// Driver code
function main() {
  let inputArray = [
    [1, 2, 3, 4],
    [-1, 3, 5, 7, 1],
    [1, 5, 4, 3, 2],
    [-1, 0, 2, 1, 4],
    [1, 4, 3],
  ];
  let x = 1;

  for (let i = 0; i < inputArray.length; i++) {
    let current_inp = inputArray[i].slice();
    let res = smallestMissingPositiveInteger(inputArray[i]);
    console.log(
      x +
        "\tThe first missing positive integer in the list ",
      current_inp,
      " is: "
    );
    console.log("\t" + res);
    console.log("-".repeat(100));
    x = x + 1;
  }
}

main();
