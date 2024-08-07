import { Stack } from "./06-stack";

class MyQueue {
  stack1: Stack;
  stack2: Stack;
  
  // constructor to initialize two stacks
  constructor() {
    // stack to store elements
    this.stack1 = new Stack();

    // temporary stack for reversing elements
    this.stack2 = new Stack();
  }

  push(x) {
    // move all elements from stack1 to stack2
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    // push the new element to stack1
    this.stack1.push(x);

    // move all elements back from stack2 to stack1
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  pop() {
    return this.stack1.pop();
  }

  peek() {
    return this.stack1.top();
  }

  empty() {
    return this.stack1.isEmpty();
  }
}













// Driver code
function main() {
  const input_queues = [
    [
      [9, 3, 1, "", "", ""],
      ["push", "push", "push", "pop", "peek", "empty"],
    ],
    [
      [10, 6, "", "", ""],
      ["push", "push", "pop", "empty", "peek"],
    ],
    [
      [1, 2, 3, "", "", "", "", ""],
      [
        "push",
        "push",
        "push",
        "peek",
        "pop",
        "pop",
        "pop",
        "empty",
      ],
    ],
    [
      [14, "", 66, ""],
      ["push", "pop", "push", "pop"],
    ],
    [
      [4, ""],
      ["push", "peek"],
    ],
  ];

  for (let i = 0; i < input_queues.length; i++) {
    console.log(i + 1 + "\tStarting operations:");

    const queue_obj = new MyQueue();
    for (let j = 0; j < input_queues[i][1].length; j++) {
      if (input_queues[i][1][j] === "push") {
        const inputstr =
          input_queues[i][1][j] +
          "(" +
          input_queues[i][0][j] +
          ")";
        console.log("\t\t", inputstr);
        queue_obj.push(input_queues[i][0][j]);
      }
      if (input_queues[i][1][j] === "pop") {
        const inputstr =
          input_queues[i][1][j] +
          "(" +
          input_queues[i][0][j] +
          ")";
        console.log(
          "\t\t",
          inputstr,
          "   returns ",
          queue_obj.pop()
        );
      }
      if (input_queues[i][1][j] === "empty") {
        const inputstr =
          input_queues[i][1][j] +
          "(" +
          input_queues[i][0][j] +
          ")";
        console.log(
          "\t\t",
          inputstr,
          " returns ",
          queue_obj.empty()
        );
      }
      if (input_queues[i][1][j] === "peek") {
        const inputstr =
          input_queues[i][1][j] +
          "(" +
          input_queues[i][0][j] +
          ")";
        console.log(
          "\t\t",
          inputstr,
          "  returns ",
          queue_obj.peek()
        );
      }
    }

    console.log("-".repeat(100));
  }
}

main();
