/**
 *
 * @param times - an array of edges in the format
 * [source, destination, travelTime]
 * @param n - the number of nodes in the graph
 * @param k - the starting node
 * @returns the minimum amount of time required for
 * all nodes to receive the signal. returns -1 if not
 * all nodes can receive the signal
 */
function networkDelayTime(
  times: number[][],
  n: number,
  k: number
) {
  // our adjacency dictionary
  const adjacency = new Map();

  // store the source as the key
  // store the destination and time as the value
  for (const time of times) {
    const src = time[0];
    const dst = time[1];
    const t = time[2];
    if (!adjacency.has(src)) {
      // initialize the adjacency list for the source
      adjacency.set(src, []);
    }
    // add the destination and time to the adjacency
    // list
    adjacency.get(src).push([dst, t]);
  }

  // initialize our priority queue
  const pq: { node: number; time: number }[] = [];

  // add the source node with a delay time of 0
  pq.push({ node: k, time: 0 });

  // for storing visited nodes
  const visited = new Set();
  // for storing our delay time
  let delays = 0;

  while (pq.length > 0) {
    // sort the priority queue by the time
    pq.sort((a, b) => a.time - b.time);
    // get the node with the smallest time
    const { time, node } = pq.shift()!;

    // if we've seen it before we continue to the next
    // iteration
    if (visited.has(node)) {
      continue;
    }

    // mark the node as visited
    visited.add(node);

    // update the delays if necessary
    delays = Math.max(delays, time);

    // get the neighbors
    const neighbors = adjacency.get(node) || [];

    // add all the unvisited neighbors of the current
    // node to the queue with their new delay times
    for (const neighbor of neighbors) {
      const neighborNode = neighbor[0];
      const neighborTime = neighbor[1];
      if (!visited.has(neighborNode)) {
        const newTime = time + neighborTime;
        pq.push({ node: neighborNode, time: newTime });
      }
    }
  }

  // if all the nodes have been visited, return the
  // delay time otherwise return -1 below since
  // there's no way to visit all the nodes
  if (visited.size === n) {
    return delays;
  }

  return -1;
}


















function main() {
  const times = [
    [
      [2, 1, 1],
      [3, 2, 1],
      [3, 4, 2],
    ],
    [
      [2, 1, 1],
      [1, 3, 1],
      [3, 4, 2],
      [5, 4, 2],
    ],
    [
      [1, 2, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    [
      [1, 2, 1],
      [2, 3, 1],
      [3, 5, 2],
    ],
    [[1, 2, 2]],
  ];

  const n = [4, 5, 4, 5, 2];
  const k = [3, 1, 1, 1, 2];

  for (let i = 0; i < times.length; ++i) {
    console.log(
      `${i + 1}.\t times = [${times[i]
        .map((t) => `[${t.join(", ")}]`)
        .join(", ")}]`
    );
    console.log(`\t number of nodes 'n' = ${n[i]}`);
    console.log(`\t starting node 'k' = ${k[i]}\n`);
    console.log(
      `\t Minimum amount of time required = ${networkDelayTime(
        times[i],
        n[i],
        k[i]
      )}`
    );
    console.log("-".repeat(100));
  }
}

main();
