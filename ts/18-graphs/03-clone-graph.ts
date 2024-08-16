import {
  createGraph,
  create2DList,
  printGraph,
  Node,
} from "./03-utils.js";

function cloneHelper(
  root: Node | null,
  nodesCompleted: Map<Node, Node>
) {
  // If the root node is null, return null
  if (root === null) {
    return null;
  }

  // Create a new Node with the same data as the root
  // node
  let clonedNode = new Node(root.data);
  
  // Add the root node and its clone to the
  // nodesCompleted map
  nodesCompleted.set(root, clonedNode);

  // Iterate through the neighbors of the root node
  for (let p of root.neighbors) {
    // Retrieve the value of key p in the nodesCompleted
    // map. If it exists, assign the corresponding
    // cloned node to x. This checks if neighbor node p
    // has already been cloned.
    let x = nodesCompleted.get(p);

    // If the neighbor is not cloned yet, recursively
    // clone it
    if (!x) {
      clonedNode.neighbors.push(
        cloneHelper(p, nodesCompleted)!
      );
    }

    // If the neighbor is already cloned, add the cloned
    // neighbor to the new node's neighbors
    else {
      clonedNode.neighbors.push(x);
    }
  }

  return clonedNode;
}

function clone(root: Node | null) {
  // Initialize an empty map to keep track of cloned
  // nodes
  let nodesCompleted = new Map();

  // Call the recursive function to clone the graph
  // starting from the root node
  return cloneHelper(root, nodesCompleted);
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
