






function twoCityScheduling(costs) {
  // Initialize the total cost to 0
  let totalCost = 0;

  // Sort the costs list in ascending order based on the
  // difference between the costs of sending someone to
  // city A vs city B
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));

  // Get the length of the costs list
  let costLength = costs.length;

  // For each pair of cities, add the cost of sending
  // one person to city A and the other person to city B
  // to the total cost
  for (let i = 0; i < Math.floor(costLength / 2); i++) {
    totalCost += costs[i][0] + costs[costLength - i - 1][1];
  }

  // Return the total cost
  return totalCost;
}



















// Driver code
function main() {
  const inputCosts = [
    [
      [10, 20],
      [30, 200],
      [400, 50],
      [30, 20],
    ],
    [
      [259, 770],
      [448, 54],
      [926, 667],
      [184, 139],
      [840, 118],
      [577, 469],
    ],
    [
      [515, 563],
      [451, 713],
      [537, 709],
      [343, 819],
      [855, 779],
      [457, 60],
      [650, 359],
      [631, 42],
    ],
    [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ],
    [
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
    ],
    [
      [10, 100],
      [10, 1000],
      [50, 500],
      [1, 100],
    ],
  ];

  for (let i = 0; i < inputCosts.length; i++) {
    console.log(
      i + 1 + "\tcosts:",
      print2DArray(inputCosts[i])
    );
    console.log(
      "\n\tThe minimum cost to send people equally into city A and B is",
      twoCityScheduling(inputCosts[i])
    );
    console.log("-".repeat(100));
  }
}


// helper function
function print2DArray(arr) {
    let result = "[";
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "object") {
        result += print2DArray(arr[i]);
      } else {
        result += arr[i];
      }
      if (i != arr.length - 1) result += ", ";
    }
    return (result += "]");
  }

main();
