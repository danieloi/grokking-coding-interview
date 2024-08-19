import {
  createGraph,
  create2DList,
  printGraph,
  Node,
} from "./03-utils";












function cloneHelper(
  root: Node,
  clonedNodesMap: Map<Node, Node>
) {
  // Make a clone by creating a new Node with the same
  // data as the root node
  let clonedNode = new Node(root.data);

  // Add the root node and its clone to the
  // clonedNodesMap map
  clonedNodesMap.set(root, clonedNode);

  // Iterate through the neighbors of the root node
  for (let neighbor of root.neighbors) {
    // This checks if neighbor node has already
    // been cloned.
    let clonedNodeFromMap = clonedNodesMap.get(neighbor);

    // If the neighbor is not cloned yet, recursively
    // clone it
    if (!clonedNodeFromMap) {
      const clonedNeighbor = cloneHelper(
        neighbor,
        clonedNodesMap
      );
      clonedNode.neighbors.push(clonedNeighbor);
    }

    // If the neighbor was already cloned, add the
    // cloned neighbor (not the original one) to
    // the new node's neighbor list
    else {
      clonedNode.neighbors.push(clonedNodeFromMap);
    }
  }

  return clonedNode;
}






















function clone(root: Node | null) {
  // If the root node is null, return null
  if (root === null) {
    return null;
  }

  // Initialize an empty map to keep track of cloned
  // nodes. Nodes must have been visited before they
  // can be cloned therefore every node that has a
  // clone has been visited.
  let clonedNodesMap = new Map();

  // Call the recursive function to clone the graph
  // starting from the root node
  return cloneHelper(root, clonedNodesMap);
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
