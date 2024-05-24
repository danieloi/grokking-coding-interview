import { Queue, print2DArray } from "./utils";

function findCompilationOrder(
  dependencies: [string, string][]
) {
  // the array of the compilation order we return
  let sortedOrder: string[] = [];
  // the graph as an adjacency list
  let graph: { [key: string]: string[] } = {};
  // the in-degree of each node
  let inDegree: { [key: string]: number } = {};

  // initialize the graph and in-degree
  dependencies.forEach((x) => {
    let parent = x[1];
    let child = x[0];
    graph[parent] = [];
    graph[child] = [];
    inDegree[parent] = 0;
    inDegree[child] = 0;
  });

  if (Object.keys(graph).length === 0) {
    // if the graph is empty, return an empty array
    return sortedOrder;
  }

  // populate the graph and in-degree
  dependencies.forEach((dependency) => {
    let parent = dependency[1];
    let child = dependency[0];
    graph[parent].push(child);
    inDegree[child] += 1;
  });

  // the queue of the nodes with in-degree 0
  let sources = new Queue();

  // find the nodes with in-degree 0
  Object.keys(inDegree).forEach((key) => {
    if (inDegree[key] == 0) {
      sources.enqueue(key);
    }
  });

  // process the nodes with in-degree 0
  while (sources.length != 0) {
    // dequeue a node from the queue
    let vertex = sources.dequeue();
    // add the node to the sorted order
    sortedOrder.push(vertex);

    // decrement the in-degree of the node's children
    graph[vertex].forEach((child) => {
      inDegree[child] -= 1;
      // when a child's in-degree is 0, enqueue it
      if (inDegree[child] == 0) {
        sources.enqueue(child);
      }
    });
  }

  if (sortedOrder.length != Object.keys(graph).length) {
    return [];
  }
  // if the sorted order has all the nodes, return the
  // sorted order
  return sortedOrder;
}















// Driver code
function main() {
  let dependencies: [string, string][][] = [
    [
      ["B", "A"],
      ["C", "A"],
      ["D", "C"],
      ["E", "D"],
      ["E", "B"],
    ],
    [
      ["B", "A"],
      ["C", "A"],
      ["D", "B"],
      ["E", "B"],
      ["E", "D"],
      ["E", "C"],
      ["F", "D"],
      ["F", "E"],
      ["F", "C"],
    ],
    [
      ["A", "B"],
      ["B", "A"],
    ],
    [
      ["B", "C"],
      ["C", "A"],
      ["A", "F"],
    ],
    [["C", "C"]],
  ];

  for (let i = 0; i < dependencies.length; i++) {
    console.log(
      i + 1 + ".\tdependencies: ",
      print2DArray(dependencies[i])
    );
    console.log(
      "\tCompilation Order: ",
      findCompilationOrder(dependencies[i])
    );
    console.log("-".repeat(100));
  }
}

main();
