import Queue from "./05-utils";








/**
 *
 * @param routes routes[i] is a bus route (array of bus
 * stations) that the ith bus repeats forever. 
 * @param src the source bus station
 * @param dest the destination bus station
 * @returns the minimum number of buses required to
 * travel from src to dest
 */
function minimumBuses(
  routes: number[][],
  src: number,
  dest: number
) {
  // Create adjacency list for graph.
  const adjList = {};
  for (let i = 0; i < routes.length; i++) {
    const stations = routes[i];
    for (let j = 0; j < stations.length; j++) {
      const station = stations[j];
      if (!adjList.hasOwnProperty(station)) {
        adjList[station] = [];
      }
      adjList[station].push(i);
    }
  }

  // Create a queue with initial source and bus count of
  // 0.
  const queue = new Queue();
  queue.enqueue([src, 0]);
  // Create a set to contain visited routes of bus.
  const visitedBuses = new Set();

  // Iterate until the queue is empty.
  while (!queue.isEmpty()) {
    // Pop station and number of buses taken and store
    // in variables.
    const [station, busesTaken] = queue.dequeue()!;
    // If we have reached the destination station,
    // return number of buses taken.
    if (station === dest) {
      return busesTaken;
    }

    // If station is in graph, then iterate over the
    // stations in graph and if it is not already
    // visited, enqueue all the stations in that bus
    // route along with an incremented bus count and
    // mark the bus visited.
    if (adjList.hasOwnProperty(station)) {
      for (const bus of adjList[station]) {
        if (!visitedBuses.has(bus)) {
          for (const stop of routes[bus]) {
            queue.enqueue([stop, busesTaken + 1]);
          }
          visitedBuses.add(bus);
        }
      }
    }
  }

  // If the route is not found, return -1.
  return -1;
}






























// Driver code
function main() {
  let routes = [
    [
      [2, 5, 7],
      [4, 6, 7],
    ],
    [
      [1, 12],
      [4, 5, 9],
      [9, 19],
      [10, 12, 13],
    ],
    [
      [1, 12],
      [10, 5, 9],
      [4, 19],
      [10, 12, 13],
    ],
    [
      [1, 9, 7, 8],
      [3, 6, 7],
      [4, 9],
      [8, 2, 3, 7],
      [2, 4, 5],
    ],
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
  ];
  let src = [2, 9, 1, 1, 4];
  let dest = [6, 12, 9, 5, 6];

  for (let i = 0; i < routes.length; i++) {
    process.stdout.write(i + 1 + ".\tBus Routes: ");
    for (let bus of routes[i]) {
      process.stdout.write("[");
      for (let j = 0; j < bus.length; j++) {
        process.stdout.write(bus[j].toString());
        if (j !== bus.length - 1) {
          process.stdout.write(", ");
        }
      }
      process.stdout.write("] ");
    }
    console.log();
    console.log("\tSource: " + src[i]);
    console.log("\tDestination: " + dest[i]);
    console.log(
      "\n\tMinimum Buses Required: " +
        minimumBuses(routes[i], src[i], dest[i])
    );
    console.log("-".repeat(100));
  }
}

main();
