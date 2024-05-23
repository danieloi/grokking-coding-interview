import { Queue, print2DArray } from "./utils";

function findCompilationOrder(dependencies: [string, string][]) {
  let sortedOrder: string[] = [];
  let graph: { [key: string]: string[] } = {};
  let inDegree: { [key: string]: number } = {};

  dependencies.forEach((x) => {
    let parent = x[1];
    let child = x[0];
    graph[parent] = [];
    graph[child] = [];
    inDegree[parent] = 0;
    inDegree[child] = 0;
  });

  if (Object.keys(graph).length === 0) {
    return sortedOrder;
  }

  dependencies.forEach((dependency) => {
    let parent = dependency[1];
    let child = dependency[0];
    graph[parent].push(child);
    inDegree[child] += 1;
  });

  let sources = new Queue();

  Object.keys(inDegree).forEach((key) => {
    if (inDegree[key] == 0) {
      sources.enqueue(key);
    }
  });

  while (sources.length != 0) {
    let vertex = sources.dequeue();
    sortedOrder.push(vertex);

    graph[vertex].forEach((child) => {
      inDegree[child] -= 1;
      if (inDegree[child] == 0) {
        sources.enqueue(child);
      }
    });
  }

  if (sortedOrder.length != Object.keys(graph).length) {
    return [];
  }
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
