function findItinerary(tickets) {
  const flightMap = new Map();
  const result: string[] = [];

  // Populate the flight map with each departure and
  // arrival
  for (const [departure, arrival] of tickets) {
    if (!flightMap.has(departure)) {
      flightMap.set(departure, []);
    }
    flightMap.get(departure).push(arrival);
  }

  // Sort each list of destinations in reverse
  // lexicographical order
  for (const [departure, destinations] of flightMap) {
    destinations.sort().reverse();
  }

  function dfsTraversal(current) {
    const destinations = flightMap.get(current);

    // Traverse all destinations in the order of their
    // lexicographical sorting
    while (destinations && destinations.length) {
      // Pop the last destination from the list
      // (smallest lexicographical order due to reverse
      // sorting)
      const nextDestination = destinations.pop();

      // Recursively perform DFS on the next destination
      dfsTraversal(nextDestination);
    }

    // Append the current airport to the result after
    // all destinations are visited
    result.push(current);
  }

  dfsTraversal("JFK");

  return result.reverse();
}



















function main() {
  const ticketsList = [
    [["JFK", "REP"]],
    [
      ["JFK", "DOC"],
      ["DOC", "ABT"],
      ["ABT", "JFK"],
    ],
    [
      ["JFK", "SFO"],
      ["LAK", "SFO"],
      ["SFO", "ATL"],
      ["SFO", "LAK"],
    ],
    [
      ["JFK", "YUR"],
      ["YUR", "JFK"],
      ["JFK", "ATL"],
      ["ATL", "JFK"],
    ],
    [
      ["JFK", "ABC"],
      ["JFK", "ABM"],
      ["JFK", "ABX"],
      ["ABX", "WXY"],
      ["WXY", "OPT"],
    ],
  ];

  for (let i = 0; i < ticketsList.length; i++) {
    let ticketsString = ticketsList[i]
      .map((ticket) => `['${ticket[0]}', '${ticket[1]}']`)
      .join(", ");
    console.log(`${i + 1}.\tTickets: [${ticketsString}]`);

    let itinerary = findItinerary(ticketsList[i]);
    let itineraryString = itinerary
      .map((place) => `'${place}'`)
      .join(", ");
    console.log(`\tFlight Itinerary: [${itineraryString}]`);

    console.log("-".repeat(100));
  }
}

main();
