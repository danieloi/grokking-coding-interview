import { Log, LogEntry, printArray } from "./utils";






function exclusiveTime(n: number, logs: LogEntry[]) {
  let logStack: Log[] = [],
    result = new Array(n).fill(0);

  for (let content of logs) {
    // Extract the log details from the
    // content(string)
    let log = new Log(content);
    if (log.isStart) {
      // Push the log details to the logStack
      logStack.push(log);
    } else {
      // Pop the log details from the logStack
      let top = logStack.pop()!;
      // Add the execution time of the current
      // function in the actual result
      result[top.id] += log.time - top.time + 1;
      // If the logStack is not empty, subtract the
      // current child function execution time from
      // the parent function
      if (logStack.length > 0) {
        result[logStack[logStack.length - 1].id] -=
          log.time - top.time + 1;
      }
    }
  }
  
  return result;
};














// Driver code
function main() {
  let logs: LogEntry[][] = [
      [
        "0:start:0",
        "1:start:2",
        "1:end:3",
        "2:start:4",
        "2:end:7",
        "0:end:8",
      ],
      [
        "0:start:0",
        "0:start:2",
        "0:end:5",
        "1:start:6",
        "1:end:6",
        "0:end:7",
      ],
      ["0:start:0", "1:start:5", "1:end:6", "0:end:7"],
      [
        "0:start:0",
        "1:start:5",
        "2:start:8",
        "3:start:12",
        "4:start:15",
        "5:start:19",
        "5:end:22",
        "4:end:24",
        "3:end:27",
        "2:end:32",
        "1:end:35",
        "0:end:36",
      ],
      ["0:start:0", "1:start:3", "1:end:6", "0:end:10"],
    ],
    n = [3, 2, 2, 6, 2],
    x = 1;

  for (let i = 0; i < n.length; i++) {
    console.log(x + ".\tn =", n[i]);
    console.log("\tlogs =", printArray(logs[i]));
    console.log("\tOutput:", exclusiveTime(n[i], logs[i]));
    console.log("-".repeat(100), "\n");
    x += 1;
  }
}

main();
