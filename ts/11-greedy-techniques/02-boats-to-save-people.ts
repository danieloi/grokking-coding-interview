function rescueBoats(people, limit) {
  // Sort the list of people in ascending order of
  // weight
  people = people.sort(function (a, b) {
    return a - b;
  });
  // Initialize pointers for the lightest and heaviest
  // person
  let left = 0;
  let right = people.length - 1;

  // Initialize the number of boats needed
  let boats = 0;

  // Loop through the list of people until all people
  // have been rescued
  while (left <= right) {
    // Check if the lightest and heaviest person 
    // on the same boat can fit
    if (people[left] + people[right] <= limit) {
      // If they can, move on to the next lightest
      // person
      left += 1;
    }
    // Move on to the next heaviest person
    right -= 1;

    // Add a boat for the current group of people
    boats += 1;
  }
  // Return the total number of boats needed
  return boats;
}










// Driver code
function main() {
  let people = [
    [1, 2],
    [3, 2, 2, 1],
    [3, 5, 3, 4],
    [5, 5, 5, 5],
    [1, 2, 3, 4],
    [1, 2, 3],
    [3, 4, 5],
  ];
  let limit = [3, 3, 5, 5, 5, 3, 5];
  for (let i = 0; i < people.length; i++) {
    console.log(i + 1 + "\tWeights = [" + people[i] + "]");
    console.log("\tWeight Limit = " + limit[i]);
    console.log(
      "\tThe minimum number of boats required to save people are " +
        rescueBoats(people[i], limit[i])
    );
    console.log("-".repeat(100));
  }
}

main();
