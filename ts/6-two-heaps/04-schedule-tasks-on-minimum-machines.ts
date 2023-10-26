import { MinHeap } from "./utils";

function tasks(listOfTasks: number[][]) {
  // the optimal number of machines we
  // return at the end of this function
  let optimalMachines = 0;
  // empty heap to store tasks finish time
  let machinesAvailable = new MinHeap();
  // put the list of tasks in a min heap
  const tasksList = new MinHeap(listOfTasks);
  let machineInUse;

  // looping through the tasks list
  while (tasksList.size()) {
    // remove the task with earliest start time
    let task = tasksList.pop();

    if (
      machinesAvailable.size() &&
      task[0] >= machinesAvailable.peek()[0]
    ) {
      // delete top element from "machinesAvailable"
      machineInUse = machinesAvailable.pop();

      // schedule task on the current machine
      machineInUse = [task[1], machineInUse[1]];
    } else {
      // if there's a conflicting task, increment
      // the counter for machines and store this task's
      // end time on heap "machinesAvailable"
      optimalMachines += 1;
      machineInUse = [task[1], optimalMachines];
    }
    machinesAvailable.push(machineInUse);
  }

  // return the total number of machines
  // used by "tasksList" tasks
  return optimalMachines;
}

function lstToStr(lst) {
  let out = "[";
  var i;
  for (i = 0; i < lst.length - 1; i++) {
    out += "(" + lst[i][0] + ", " + lst[i][1] + "), ";
  }
  out += "(" + lst[i][0] + ", " + lst[i][1] + ")]";
  return out;
}

// driver code
function main() {
  // Input: A set "tasksList" of "n" tasks, such that each task has a start time and a finish time
  const inputTasksList = [
    [
      [1, 1],
      [5, 5],
      [8, 8],
      [4, 4],
      [6, 6],
      [10, 10],
      [7, 7],
    ],
    [
      [1, 7],
      [1, 7],
      [1, 7],
      [1, 7],
      [1, 7],
      [1, 7],
    ],
    [
      [1, 7],
      [8, 13],
      [5, 6],
      [10, 14],
      [6, 7],
    ],
    [
      [1, 3],
      [3, 5],
      [5, 9],
      [9, 12],
      [12, 13],
      [13, 16],
      [16, 17],
    ],
    [
      [12, 13],
      [13, 15],
      [17, 20],
      [13, 14],
      [19, 21],
      [18, 20],
    ],
  ];

  // loop to execute till the length of tasks
  for (var i = 0; i < inputTasksList.length; i++) {
    console.log(i + 1 + ".\tTasks =", lstToStr(inputTasksList[i]));

    // Output: A non-conflicting schedule of tasks in "tasksList" using the minimum number of machines
    console.log(
      "\tOptimal number of machines =",
      tasks(inputTasksList[i])
    );
    console.log("-".repeat(100));
  }
}
main();
