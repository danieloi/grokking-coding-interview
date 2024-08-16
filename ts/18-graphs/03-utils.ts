export class Node {
  data: number;
  neighbors: Node[];

  constructor(d: number) {
    this.data = d;
    this.neighbors = [];
  }
}

export function createGraph(data) {
  if (data.length === 0) {
    return new Node(1);
  }
  const nodes: Node[] = [];
  for (let i = 0; i < data.length; i++) {
    nodes.push(new Node(i + 1));
  }

  for (let i = 0; i < data.length; i++) {
    for (let neighbor of data[i]) {
      nodes[i].neighbors.push(nodes[neighbor - 1]);
    }
  }

  return nodes[0];
}

export function create2DList(root: Node) {
  // Initialize a queue for breadth-first traversal
  const queue: Node[] = [];
  queue.push(root);

  // Initialize a Set to keep track of visited nodes
  const visited = new Set();
  visited.add(root);

  // Initialize a 2D array to store the graph
  const graph: [number, number[]][] = [];

  // Perform breadth-first traversal
  while (queue.length > 0) {
    // Get the next node in the queue
    const node = queue.shift()!;

    // Create a new array to store the neighbors of
    // the current node
    const neighbors: number[] = [];

    // Iterate through the neighbors of the current
    // node
    for (const neighbor of node.neighbors) {
      // Append the neighbor's value to the array of
      // neighbors
      neighbors.push(neighbor.data);

      // Add the neighbor to the queue if it hasn't
      // been visited yet
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }

    // Sort the array of neighbors
    neighbors.sort((a, b) => a - b);

    // Append the current node's value and its
    // neighbors to the 2D array
    graph.push([node.data, [...neighbors]]);
  }
  // Sort the graph based on the node.data value
  graph.sort((a, b) => a[0] - b[0]);
  // Extract the second list from each sub-array
  const result = graph.map((item) => item[1]);

  return result;
}

export function printGraphRec(root, visited_nodes) {
  if (root === null || visited_nodes.has(root)) {
    return;
  }

  visited_nodes.add(root);
  let output = `\t${root.data}: {`;
  for (let n of root.neighbors) {
    output += `${n.data} `;
  }
  output += "}";
  console.log(output);

  for (let n of root.neighbors) {
    printGraphRec(n, visited_nodes);
  }
}

export function printGraph(root) {
  const visited_nodes = new Set();
  printGraphRec(root, visited_nodes);
}
