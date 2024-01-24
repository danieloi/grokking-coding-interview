








let jumpGame = function (nums: number[]) {
  let targetNumIndex = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (targetNumIndex <= i + nums[i]) {
      targetNumIndex = i;
    }
  }
  if (targetNumIndex == 0) return true;
  return false;
};




























function main() {
  const nums = [
    [3, 2, 2, 0, 1, 4],
    [2, 3, 1, 1, 9],
    [3, 2, 1, 0, 4],
    [0],
    [1],
    [4, 3, 2, 1, 0],
    [1, 1, 1, 1, 1],
    [4, 0, 0, 0, 1],
    [3, 3, 3, 3, 3],
    [1, 2, 3, 4, 5, 6, 7],
  ];

  for (let i = 0; i < nums.length; i++) {
    console.log(i + 1 + ".\tInput array:", nums[i]);
    console.log(
      "\tCan we reach the very last index?",
      jumpGame(nums[i]) ? "True" : "False"
    );
    console.log("-".repeat(100));
  }
}

main();
