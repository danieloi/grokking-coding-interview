
function findCorruptPair(nums) {
  let missing: number | null = null;
  let duplicated: number | null = null;

  // initialize the cursor
  let i = 0;

  // phase 1: sort the numbers with cyclic sort
  // move the cursor through the entire list
  while (i < nums.length) {
    // has minus 1 because the numbers start from 1 not 0
    let valAtI = nums[i] - 1;

    //   unlike the previous problems in this pattern,
    //   we don't check whether the number belongs in
    //   the range of the list because the problem
    //   constraints state that the numbers, even the
    //   wrong ones, are between 1 and n
    const isAtWrongIndex = nums[i] !== nums[valAtI];

    if (isAtWrongIndex) {
      [nums[i], nums[valAtI]] = [nums[valAtI], nums[i]];
    } else {
      // move the cursor to the next index
      i += 1;
    }
  }

  // phase 2: find the corrupt pair
  for (let j = 0; j < nums.length; j++) {
    // has plus 1 because the numbers start from 1 not 0
    if (nums[j] != j + 1) {
      duplicated = nums[j];
      missing = j + 1;
    }
  }

  return [missing, duplicated];
}

































// Driver code
function main() {
  let array = [
    [3, 1, 2, 5, 2],
    [3, 1, 2, 3, 6, 4],
    [4, 1, 2, 1, 6, 3],
    [4, 3, 4, 5, 1],
    [5, 3, 5, 6, 2, 1],
  ];

  for (let i = 0; i < array.length; i++) {
    console.log(i + 1 + ".\tGiven array:", array[i]);
    let result = findCorruptPair(array[i]);
    console.log(
      `\n\tCorrupt pair: ${result[0]}, ${result[1]}`
    );
    console.log("-".repeat(100));
  }
}

main();
