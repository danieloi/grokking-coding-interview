function houseRobber(money) {
  // Check if the input list is empty or undefined
  if (money.length === 0 || money === undefined) {
    return 0;
  }

  // If the input list has only one element, return that
  // element
  if (money.length === 1) {
    return money[0];
  }

  // Return the maximum value from calling the helper
  // function on the input list minus the last element
  // and the input list minus the first element
  return Math.max(
    houseRobberHelper(money.slice(0, -1)),
    houseRobberHelper(money.slice(1))
  );
}

























function houseRobberHelper(money) {
  // Create a lookup array with the same length as the
  // input list, filled with 0s
  const lookupArray = new Array(money.length + 1).fill(0);
  lookupArray[0] = 0;
  lookupArray[1] = money[0];

  // Iterate through the input list starting from the
  // second element
  for (let i = 2; i <= money.length; i++) {
    // Update the lookup array at each index with the
    // maximum value between the current element in the
    // input list plus the previous element in the
    // lookup array and the current element in the
    // lookup array
    lookupArray[i] = Math.max(
      money[i - 1] + lookupArray[i - 2],
      lookupArray[i - 1]
    ); 
  }

  // Return the last element in the lookup array
  return lookupArray[money.length];
}
























// Driver code
function main() {
  const inputs = [
    [2, 3, 2],
    [1, 2, 3, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [7, 4, 1, 9, 3],
    [],
  ];

  for (let i = 0; i < inputs.length; i++) {
    console.log(i + 1 + ".\tHouses:", inputs[i]);
    console.log(
      "\n\tMaximum loot:",
      houseRobber(inputs[i])
    );
    console.log("-".repeat(100));
  }
}

if (
  typeof require !== "undefined" &&
  require.main === module
) {
  main();
}
