




function removeDuplicates(s) {
  // Create an empty stack.
  let stack: string[] = [];

  // Iterare over the stringo
  for (let c of s) {
    // If stack has at least one character and stack's
    // top character is same as the string's character.
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      // Pop a character from the stack.
      stack.pop();
    } else {
      // Otherwise, push that character onto the stack.
      stack.push(c);
    }
  }

  // Return the result string.
  return stack.join("");
}
























// Driver code
function main() {
  let inputs = [
    "g",
    "ggaabcdeb",
    "abbddaccaaabcd",
    "aannkwwwkkkwna",
    "abbabccblkklu",
  ];
  for (let i = 0; i < inputs.length; i++) {
    console.log(
      i +
        1 +
        `.\tRemove duplicates from string: '${inputs[i]}'`
    );
    let resultingString = removeDuplicates(inputs[i]);
    console.log(
      "\tString after removing duplicates:",
      resultingString
    );
    console.log("-".repeat(100));
  }
}

main();
