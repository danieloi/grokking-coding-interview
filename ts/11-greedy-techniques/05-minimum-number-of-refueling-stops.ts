import { MaxHeap } from "./utils";



function minRefuelStops(target, startFuel, stations) {
  // If starting fuel is already greater or equal to
  // target, no need to refuel
  if (startFuel >= target) {
    return 0;
  }
  // Create a max heap to store the fuel capacities of
  // stations in such a way that maximum fuel capacity
  // is at the top of the heap
  let maxHeap = new MaxHeap();

  // Initialize variables for loop
  let i = 0;
  let n = stations.length;
  let stops = 0;
  let maxDistance = startFuel;
  // Loop until the car reach the target or the car is
  // out of fuel
  while (maxDistance < target) {
    // If there are still stations and the next one is
    // within range, add its fuel capacity to the max
    // heap
    if (i < n && stations[i][0] <= maxDistance) {
      maxHeap.push(stations[i][1]);
      i++;
    }
    // If there are no more stations and we can't reach
    // the target, return -1
    else if (maxHeap.isEmpty()) {
      return -1;
    }
    // Otherwise, fill up at the station with the
    // highest fuel capacity and increment stops
    else {
      maxDistance += maxHeap.pop();
      stops++;
    }
  }
  // Return the number of stops taken
  return stops;
}
















// Driver code
function main() {
  let input = [
    [3, 3, []],
    [
      120,
      10,
      [
        [10, 60],
        [20, 25],
        [30, 30],
        [60, 40],
      ],
    ],
    [
      15,
      3,
      [
        [2, 5],
        [3, 1],
        [6, 3],
        [12, 6],
      ],
    ],
    [
      570,
      140,
      [
        [140, 200],
        [160, 130],
        [310, 200],
        [330, 250],
      ],
    ],
    [
      1360,
      380,
      [
        [310, 160],
        [380, 620],
        [700, 89],
        [850, 190],
        [990, 360],
      ],
    ],
  ];

  for (let i = 0; i < input.length; i++) {
    console.log(
      i + 1 + ".\tStations : [" + input[i][2] + "]"
    );
    console.log("\tTarget fuel : " + input[i][0]);
    console.log("\tStarting fuel : " + input[i][1]);
    console.log(
      "\n\tMinimum number of refueling stops : " +
        minRefuelStops(
          input[i][0],
          input[i][1],
          input[i][2]
        )
    );
    console.log("-".repeat(97));
  }
}

main();
