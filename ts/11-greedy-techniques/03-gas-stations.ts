let gasStationJourney = function (gas, cost) {
  let sumCost = cost.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  let sumGas = gas.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  // Check if it is possible to complete the journey
  // based on total gas and cost.
  if (sumCost > sumGas) {
    return -1;
  }

  // Initialize variables for tracking total gas and
  // starting index.
  let currentGas = 0;
  let startingIndex = 0;

  // Iterate over all gas stations in the list.
  for (let i = 0; i < gas.length; i++) {
    // Update current gas level by adding gas and
    // subtracting cost at current station.
    currentGas = currentGas + (gas[i] - cost[i]);
    // If the current gas level is negative, reset it to
    // zero and update the starting index.
    if (currentGas < 0) {
      currentGas = 0;
      startingIndex = i + 1;
    }
  }
  // Return starting index of gas station that allows
  // journey to be completed.
  return startingIndex;
};














// Driver code
function main() {
  let gas = [
    [1, 2, 3, 4, 5],
    [2, 3, 4],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 10],
    [1, 1, 1, 1, 1],
    [1, 2, 3, 4, 5],
  ];
  let cost = [
    [3, 4, 5, 1, 2],
    [3, 4, 3],
    [1, 2, 3, 4, 5],
    [2, 2, 1, 3, 1],
    [1, 0, 1, 2, 3],
    [1, 2, 3, 4, 5],
  ];

  for (let i = 0; i < gas.length; i++) {
    console.log(i + 1 + ".\tGas = [" + gas[i] + "]");
    console.log("\tCost = [" + cost[i] + "]");
    console.log(
      "\n \tThe index of the gas station we can start our journey from is",
      gasStationJourney(gas[i], cost[i]),
      "(If it's -1, then that \n \tmeans no solution exists)"
    );
    console.log("-".repeat(100));
  }
}

main();
