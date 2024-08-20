function validTreeHelper(
  node: number,
  adjacency: number[][],
  visited: Set<number>
) {
  // the goal here is to populate the visited set with
  // all the nodes in the graph
  if (!visited.has(node)) {
    // Add the node to the visited set
    visited.add(node);

    // Iterate over the neighbors of the node
    for (const neighbor of adjacency[node]) {
      validTreeHelper(neighbor, adjacency, visited);
    }
  }
}

function validTree(n: number, edges: [number, number][]) {
  // Check if n - 1 edges exist
  if (edges.length !== n - 1) {
    return false;
  }

  // Create an adjacency list
  const adjacency = Array.from(
    { length: n },
    () => [] as number[]
  );

  // Populate adjacency with all the connected nodes
  for (const [x, y] of edges) {
    adjacency[x].push(y);
    adjacency[y].push(x);
  }

  const visited = new Set<number>();

  // populate the visited set with all the connected
  // nodes in the graph
  validTreeHelper(0, adjacency, visited);

  return visited.size === n;
}




























// Driver code
function main() {
  const n = [3, 4, 5, 5, 6];
  const edges: [number, number][][] = [
    [
      [0, 1],
      [0, 2],
      [1, 2],
    ],
    [
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [3, 4],
    ],
    [
      [0, 1],
      [0, 2],
      [0, 3],
      [3, 4],
    ],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 4],
      [0, 5],
    ],
  ];

  for (let i = 0; i < n.length; i++) {
    console.log(`${i + 1}. n = ${n[i]}`);
    console.log(`   Edges = ${JSON.stringify(edges[i])}`);
    console.log(
      `   Is the given graph a valid tree: ${validTree(
        n[i],
        edges[i]
      )}`
    );
    console.log("-".repeat(100));
  }
}

main();
