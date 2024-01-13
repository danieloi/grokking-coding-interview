import { lstToSetStr, twoDLstToSetStr } from "./utils";

function getBit(num, bit) {
  let temp;
  // shifts the first operand the specified number of
  // bits to the left
  temp = 1 << bit;

  temp = temp & num;

  // if binary number and current subset count are
  // equal, return 1 else return 0
  if (temp === 0) {
    return 0;
  }

  return 1;
}

function findAllSubsets(nums) {
  let sets: number[][] = [];

  if (nums.length === 0) {
    return [[]];
  } else {
    // finds number of subsets by taking power of length
    // of input array
    let subsetsCount = 2 ** nums.length;
    for (let i = 0; i < subsetsCount; i++) {
      // Set is created to store each subset
      let subset = new Set<number>();
      for (let j = 0; j < nums.length; j++) {
        if (getBit(i, j) == 1 && !subset.has(nums[j])) {
          subset.add(nums[j]);
        }
      }
      // for first iteration subset list will always
      // have an empty list
      if (i === 0) {
        sets.push([]);
      } else {
        sets.push(Array.from(subset));
      }
    }
  }
  return sets;
}

// driver code
function main() {
  const nums = [
    [],
    [2, 5, 7],
    [1, 2],
    [1, 2, 3, 4],
    [7, 3, 1, 5],
  ];

  for (var i = 0; i < nums.length; i++) {
    console.log(i + 1 + ".\tSet:", lstToSetStr(nums[i]));
    const subsets = findAllSubsets(nums[i]);
    console.log("\tSubsets:", twoDLstToSetStr(subsets));
    console.log("-".repeat(100));
  }
}

main();
