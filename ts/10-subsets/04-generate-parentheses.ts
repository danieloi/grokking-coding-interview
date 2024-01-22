function backtrack(
  n,
  leftCount,
  rightCount,
  output,
  result
) {
  // Base case where count of left and right braces is
  // "n"
  if (leftCount >= n && rightCount >= n) {
    // Join the array elements into a string without any
    // separators.
    let outputStr = output.join("");
    result.push(outputStr);
  }

  // Case where we can still append left braces
  if (leftCount < n) {
    output.push("(");
    backtrack(n, leftCount + 1, rightCount, output, result);
    output.pop();
  }

  // Case where we append right braces if the current
  // count of right braces is less than the count of
  // left braces
  if (rightCount < leftCount) {
    output.push(")");
    backtrack(n, leftCount, rightCount + 1, output, result);
    output.pop();
  }
}

function generateCombinations(n) {
  let result = [];
  let output = [];
  backtrack(n, 0, 0, output, result);

  return result;
}

function printResult(result) {
  for (var i = 0; i < result.length; i++) {
    console.log("\t\t ", result[i].replace(",", ""));
  }
}

// Driver code
function main() {
  const n = [1, 2, 3, 4, 5];

  for (var i = 0; i < n.length; i++) {
    console.log(i + 1 + ".\t n = ", n[i]);
    console.log(
      "\t All combinations of valid balanced parentheses: "
    );

    const result = generateCombinations(n[i]);
    printResult(result);

    console.log("-".repeat(100));
  }
}

main();
