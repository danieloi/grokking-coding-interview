import { Queue } from "./utils";

function findOrder(n, prerequisites) {
  let sortedOrder: string[] = [];
  // if n is smaller than or equal to zero we will
  // return the empty array
  if (n <= 0) {
    return sortedOrder;
  }

  let inDegree = {};
  let graph = {};
  // Store the count of incoming prerequisites in a
  // hashmap
  for (let i = 0; i < n; i++) {
    inDegree[i] = 0;
  }
  // a. Initialize the graph
  for (let i = 0; i < n; i++) {
    graph[i] = []; // adjacency list graph
  }

  // b. Build the graph
  prerequisites.forEach((edge) => {
    let parent = edge[1];
    let child = edge[0];
    graph[parent].push(child); // put the child into it's parent's list
    inDegree[child] += 1; // increment child's inDegree
  });

  // c. Find all sources i.e., all nodes with 0
  // in-degrees
  let sources = new Queue();
  Object.keys(inDegree).forEach((key) => {
    if (inDegree[key] == 0) {
      sources.enqueue(key);
    }
  });

  // d. For each source, add it to the sortedOrder and
  // subtract one from all of its children's in-degrees.
  // If a child's in-degree becomes zero, add it to the
  // sources queue
  while (sources.length != 0) {
    // pop an element from the start of the sources and
    // store the element in vertex
    let vertex: string = sources.dequeue();
    // append the vertex at the end of the sortedOrder
    sortedOrder.push(vertex);
    // traverse in graph[vertex] using child get the
    // node's children to decrement their in-degrees
    graph[vertex].forEach((child) => {
      inDegree[child] -= 1;
      if (inDegree[child] == 0) {
        sources.enqueue(child);
      }
    });
  }
  // topological sort is not possible as the graph has a
  // cycle
  if (sortedOrder.length != n) {
    return [];
  }

  return sortedOrder;
}




















// Driver code
function main() {
  let n = [4, 5, 0, 4, 7];
  let prerequisites = [
    [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ],
    [
      [1, 0],
      [2, 0],
      [3, 1],
      [4, 3],
    ],
    [[1, 0]],
    [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ],
    [
      [1, 0],
      [0, 3],
      [0, 2],
      [3, 2],
      [2, 5],
      [4, 5],
      [5, 6],
      [2, 4],
    ],
  ];

  for (let i = 0; i < n.length; i++) {
    console.log(
      i + 1 + ".\tPrerequisites: ",
      printArray(prerequisites[i])
    );
    console.log("\tTotal number of courses, n:", n[i]);
    console.log(
      "\tValid courses order:",
      printArray(findOrder(n[i], prerequisites[i]))
    );
    console.log("-".repeat(100));
  }
}

function printArray(arr: any[]) {
  return arr.join(", ");
}

main();
