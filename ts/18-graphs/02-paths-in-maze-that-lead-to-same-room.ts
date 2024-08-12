
function numberOfPaths(n, corridors) {
  // Create a Map to store neighbors of each room
  const neighbours = new Map();
  // Counter to store the number of cycles
  let cycles = 0;

  // Iterate over each corridor
  for (const [room1, room2] of corridors) {
    // Add the neighbor rooms
    if (!neighbours.has(room1)) {
      neighbours.set(room1, new Set());
    }
    neighbours.get(room1).add(room2);

    if (!neighbours.has(room2)) {
      neighbours.set(room2, new Set());
    }
    neighbours.get(room2).add(room1);

    // Optimized intersection calculation
    let intersectionSize = 0;
    const set1 = neighbours.get(room1);
    const set2 = neighbours.get(room2);
    // iterate over the neighbors of room1
    for (const neighbor of set1) {
      // if the neighbor is in room2, increment the
      // intersection size
      if (set2.has(neighbor)) {
        intersectionSize++;
      }
    }
    // add the intersection size to the cycle count
    cycles += intersectionSize;
  }

  return cycles;
}


















// Driver code
function main() {
  const nList = [5, 4, 5, 5, 4];
  const corridorsList = [
    [
      [1, 2],
      [5, 2],
      [4, 1],
      [2, 4],
      [3, 1],
      [3, 4],
    ],
    [
      [1, 2],
      [3, 4],
    ],
    [
      [1, 2],
      [5, 2],
      [4, 1],
      [3, 1],
      [3, 4],
    ],
    [
      [1, 2],
      [5, 2],
      [4, 1],
      [2, 4],
      [3, 1],
      [3, 4],
      [1, 5],
    ],
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  ];

  for (let i = 0; i < nList.length; ++i) {
    console.log(`${i + 1}.\tn: ${nList[i]}`);
    console.log("\tcorridors:", corridorsList[i]);
    console.log(
      `\tcycles: ${numberOfPaths(
        nList[i],
        corridorsList[i]
      )}`
    );
    console.log("-".repeat(100));
  }
}

main();