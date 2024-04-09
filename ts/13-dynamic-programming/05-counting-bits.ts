function countingBits(n) {
  // Create an array of size n + 1 with all elements
  // initialized to 0
  const result = new Array(n + 1).fill(0);

  // If n is 0, return the empty array
  if (n === 0) {
    return result;
  }

  // Base cases: Set the first two elements of the
  // array
  result[0] = 0;
  result[1] = 1;

  // Iterate from 2 to n
  for (let x = 2; x <= n; ++x) {
    // If 'x' is even, set the x-th element of the
    // array to the (x / 2)-th element
    if (x % 2 === 0) {
      result[x] = result[Math.floor(x / 2)];
    }
    // If x is odd, set the x-th element of the array
    // to the (x / 2)-th element + 1
    else {
      result[x] = result[Math.floor(x / 2)] + 1;
    }
  }

  // Return the final array
  return result;
}

















// Helper function to convert array to string
function arrToString(arr) {
  return arr.join(", ");
}

// Driver code
const inputBits = [1, 2, 3, 4, 5, 10];

for (let i = 0; i < inputBits.length; ++i) {
  console.log(i + 1 + ".\t Bits: " + inputBits[i]);
  const result = countingBits(inputBits[i]);
  console.log(
    "\t Counting bits: [" + arrToString(result) + "]"
  );
  console.log("-".repeat(100));
}
