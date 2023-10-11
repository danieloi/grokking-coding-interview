function leastTime(tasks: string[], n: number) {
  // Initialize a map to store the frequencies of the tasks
  const frequencies = new Map();

  // Store the frequency of each task
  for (const task of tasks) {
    frequencies.set(task, (frequencies.get(task) || 0) + 1);
  }

  // Sort the frequencies from least to greatest
  const sortedFrequencies = Array.from(frequencies.entries()).sort(
    (a, b) => a[1] - b[1]
  );

  // Store the max frequency
  const maxFreq = sortedFrequencies[sortedFrequencies.length - 1][1];
  sortedFrequencies.pop();

  // Compute the maximum possible idle time
  let idleTime = (maxFreq - 1) * n;

  // Iterate over the frequencies array and update the idle time
  while (sortedFrequencies.length > 0 && idleTime > 0) {
    idleTime -= Math.min(
      maxFreq - 1,
      sortedFrequencies[sortedFrequencies.length - 1][1]
    );
    sortedFrequencies.pop();
  }
  idleTime = Math.max(0, idleTime);

  // Return the total time, which is the sum of the busy time and
  // idle time
  return tasks.length + idleTime;
}

// Driver code
function main() {
  const allTasks = [
    ["A", "A", "B", "B"],
    ["A", "A", "A", "B", "B", "C", "C"],
    ["S", "I", "V", "U", "W", "D", "U", "X"],
    ["M", "A", "B", "M", "A", "A", "Y", "B", "M"],
    [
      "A",
      "K",
      "X",
      "M",
      "W",
      "D",
      "X",
      "B",
      "D",
      "C",
      "O",
      "Z",
      "D",
      "E",
      "Q",
    ],
  ];
  const allNs = [2, 1, 0, 3, 3];

  for (let i = 0; i < allTasks.length; i++) {
    console.log(`${i + 1}.`, "\tTasks: ", allTasks[i]);
    console.log("\tn: ", allNs[i]);

    const min_time = leastTime(allTasks[i], allNs[i]);
    console.log(
      "\tMinimum time required to execute the tasks: ",
      min_time
    );
    console.log("-".repeat(100));
  }
}

main();
