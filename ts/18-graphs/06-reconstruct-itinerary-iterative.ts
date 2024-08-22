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

  const stack = ["JFK"];

  while (stack.length) {
    const current = stack[stack.length - 1];

    const destinations = flightMap.get(current);

    if (destinations && destinations.length) {
      const nextDestination = destinations.pop();
      stack.push(nextDestination);
    } else {
      const current = stack.pop()!;
      result.push(current);
    }

  }

  return result.reverse();
}






function main() {
  const ticketsList = [
    // [["JFK", "REP"]],
    // [
    //   ["JFK", "DOC"],
    //   ["DOC", "ABT"],
    //   ["ABT", "JFK"],
    // ],
    // [
    //   ["JFK", "SFO"],
    //   ["LAK", "SFO"],
    //   ["SFO", "ATL"],
    //   ["SFO", "LAK"],
    // ],
    // [
    //   ["JFK", "YUR"],
    //   ["YUR", "JFK"],
    //   ["JFK", "ATL"],
    //   ["ATL", "JFK"],
    // ],
    // [
    //   ["JFK", "ABC"],
    //   ["JFK", "ABM"],
    //   ["JFK", "ABX"],
    //   ["ABX", "WXY"],
    //   ["WXY", "OPT"],
    // ],
    [
      ["JFK", "LRL"],
      ["JFK", "SUV"],
      ["SUV", "JFK"],
      ["SUV", "BDI"],
      ["BDI", "JFK"],
      ["LRL", "URK"],
      ["URK", "SUV"],
      ["BDI", "CEI"],
      ["CEI", "URK"],
      ["CEI", "CZR"],
      ["CZR", "BDI"],
      ["JFK", "EDJ"],
      ["EDJ", "JFK"],
      ["CEI", "ORG"],
      ["ORG", "URK"],
      ["JFK", "DSK"],
      ["DSK", "JFK"],
      ["CEI", "OUU"],
      ["OUU", "LRL"],
      ["LRL", "VWN"],
      ["VWN", "CZR"],
      ["SUV", "BWE"],
      ["BWE", "VWN"],
      ["BDI", "QFN"],
      ["QFN", "VWN"],
      ["URK", "MOV"],
      ["MOV", "CEI"],
      ["JFK", "TGN"],
      ["TGN", "SUV"],
      ["QFN", "DMM"],
      ["DMM", "CEI"],
      ["LRL", "DFZ"],
      ["DFZ", "ORG"],
      ["CZR", "XZS"],
      ["XZS", "URK"],
      ["DFZ", "QMI"],
      ["QMI", "CEI"],
      ["QMI", "NZY"],
      ["NZY", "OUU"],
      ["LRL", "JDM"],
      ["JDM", "EDJ"],
      ["QFN", "IZA"],
      ["IZA", "BDI"],
      ["DSK", "BQV"],
      ["BQV", "MOV"],
      ["URK", "DYY"],
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
