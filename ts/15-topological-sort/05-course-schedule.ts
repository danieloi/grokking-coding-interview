import { Queue } from "./utils";

function canFinish(numCourses, prerequisites) {
  let counter = 0;
  if (numCourses <= 0) {
    return true;
  }

  // a. Initialize the graph count of incoming
  // prerequisites
  let inDegree = {};
  let graph = {};
  for (let i = 0; i < numCourses; i++) {
    inDegree[i] = 0;
  }

  for (let i = 0; i < numCourses; i++) {
    graph[i] = []; // adjacency list graph
  }

  // b. Build the graph
  prerequisites.forEach((edge) => {
    let parent = edge[1];
    let child = edge[0];
    graph[parent].push(child); // put the child into it's parent's list
    inDegree[child] += 1; // increment child's inDegree
  });

  // c. Find all sources i.e., all numCourses with 0
  // in-degrees
  let sources = new Queue();

  Object.keys(inDegree).forEach((key) => {
    if (inDegree[key] == 0) {
      sources.enqueue(key);
    }
  });

  // d. For each source, increment the counter and
  // subtract one from all of its children's in-degrees
  // if a child's in-degree becomes zero, add it to the
  // sources queue

  while (sources.length != 0) {
    let course = sources.dequeue();
    counter++;
    // get the node's children to decrement their
    // in-degrees

    graph[course].forEach((child) => {
      inDegree[child] -= 1;
      if (inDegree[child] == 0) {
        sources.enqueue(child);
      }
    });
  }

  // topological sort is not possible if the counter is
  // not equal to numCourses
  return counter == numCourses;
}













// Driver code
function main() {
  let prereq = [
    [
      [1, 0],
      [2, 1],
    ],
    [
      [1, 0],
      [0, 1],
    ],
    [
      [1, 0],
      [2, 1],
      [3, 2],
      [4, 3],
    ],
    [
      [1, 0],
      [2, 1],
      [3, 2],
      [4, 3],
      [0, 4],
    ],
    [
      [2, 0],
      [2, 1],
      [3, 2],
      [4, 2],
      [3, 1],
    ],
  ];
  let courses = [3, 2, 10, 5, 5];

  for (let i = 0; i < courses.length; i++) {
    console.log(
      i + 1 + ".\t Number of courses: ",
      courses[i].toString()
    );
    console.log("\t Number of pre-requisites: ", prereq[i]);
    console.log(
      "\t Output: ",
      canFinish(courses[i], prereq[i])
    );
    console.log("-".repeat(100));
  }
}

main();
