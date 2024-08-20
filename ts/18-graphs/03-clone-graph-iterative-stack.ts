import {
  createGraph,
  create2DList,
  printGraph,
  Node,
} from "./03-utils";

















function clone(root: Node | null) {
  // If the root node is null, return null
  if (root === null) {
    return null;
  }

  // Initialize an empty map to keep track of cloned
  // nodes. Nodes must have been visited before they can
  // be cloned therefore every node that has a clone has
  // been visited.
  let clonedNodesMap = new Map();

  const clonedRoot = new Node(root.data);
  clonedNodesMap.set(root, clonedRoot);

  const stack = [root];

  // clone and connect all the remaining nodes
  while (stack.length > 0) {
    const node = stack.pop()!;
    const clonedNode = clonedNodesMap.get(node);

    for (const neighbor of node.neighbors) {
      const clonedNeighborFromMap =
        clonedNodesMap.get(neighbor);

      if (!clonedNeighborFromMap) {
        const clonedNeighbor = new Node(neighbor.data);
        clonedNodesMap.set(neighbor, clonedNeighbor);
        clonedNode.neighbors.push(clonedNeighbor);
        stack.push(neighbor);
      } else {
        // connect it to it's cloned neighbor
        clonedNode.neighbors.push(clonedNeighborFromMap);
      }
    }
  }

  return clonedRoot;
}






































// Driver code
let data = [
  [
    [2, 3],
    [1, 3],
    [1, 2],
  ],
  [
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ],
  [
    [2, 5],
    [1, 3],
    [2, 4],
    [3, 5],
    [1, 4],
  ],
  [[2], [1]],
  [
    [2, 6],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
    [1, 5],
  ],
  [[]],
];

for (let i = 0; i < data.length; i++) {
  let node1 = createGraph(data[i]);
  let originalGraph = create2DList(node1);
  console.log(`${i + 1}.\tOriginal Graph:`, originalGraph);
  console.log();
  printGraph(node1);
  console.log();
  let clonedRoot = clone(node1)!;
  let clonedGraph = create2DList(clonedRoot);
  console.log("\tCloned Graph:", clonedGraph);
  console.log();
  printGraph(clonedRoot);
  console.log("-".repeat(100));
}
