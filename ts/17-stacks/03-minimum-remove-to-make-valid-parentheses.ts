
function minRemoveParentheses(s) {
  let stack: [string, number][] = [];
  let arrFromString = Array.from(s);

  for (let i = 0; i < s.length; i++) {
    let val = s[i];

    // if stack is not empty and top element of stack
    // is an opening parenthesis and the current
    // element is a closing parenthesis
    if (
      stack.length > 0 &&
      stack[stack.length - 1][0] === "(" &&
      val === ")"
    ) {
      // pop the opening parenthesis as it makes a
      // valid pair with the current closing
      // parenthesis
      stack.pop();
    }
    // if the current value is an opening or a closing
    // parenthesis
    else if (val === "(" || val === ")") {
      // push onto stack
      stack.push([val, i]);
    }
  }

  // Remove the invalid parentheses
  for (let p of stack) {
    arrFromString[p[1]] = "";
  }

  // convert the list to string
  let result = arrFromString.join("");
  return result;
}
















// Driver code
function main() {
  let inputs = [
    "ar)ab(abc)abd(",
    "a)rt)lm(ikgh)",
    "aq)xy())qf(a(ba)q)",
    "(aw))kk())(w(aa)(bv(wt)r)",
    "(qi)(kl)((y(yt))(r(q(g)s)",
  ];
  for (let i = 0; i < inputs.length; i++) {
    console.log(i + 1 + `. Input: "${inputs[i]}"`);
    console.log(
      `   Valid parentheses, after minimum removal: "${minRemoveParentheses(
        inputs[i]
      )}"`
    );
    console.log("-".repeat(100));
  }
}

main();
