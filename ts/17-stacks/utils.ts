







type LogEntry = `${number}:${"start" | "end"}:${number}`;

class Log {
  id: number;
  isStart: boolean;
  time: number;

  constructor(content: LogEntry) {
    const strs = content.split(":");
    this.id = parseInt(strs[0]);
    this.isStart = strs[1] == "start";
    this.time = parseInt(strs[2]);
  }
}





























export { LogEntry, Log };


// helper function
export function printArray(arr) {
  let result = "[";
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "object") {
      result += printArray(arr[i]);
    } else {
      result += `'${arr[i]}'`;
    }
    if (i != arr.length - 1) result += ", ";
  }
  return (result += "]");
}
