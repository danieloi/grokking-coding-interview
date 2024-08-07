type OpeningBrace = "(" | "{" | "[";
type ClosingBrace = ")" | "}" | "]";

const openingBraces = new Set(["(", "{", "["]);

const closingBraces = new Set([")", "}", "]"]);

function isValid(s: string) {
  let stack: OpeningBrace[] = [];

  for (let i = 0; i < s.length; i++) {
    let val = s[i];

    // if the current value is an opening parenthesis
    if (openingBraces.has(val)) {
      // push onto stack
      stack.push(val as OpeningBrace);
    } else {
      // we're dealing with a closing brace

      // if the stack is empty, then we have an invalid
      // string
      if (stack.length === 0) {
        return false;
      }

      let topOfStack = stack[stack.length - 1]!;

      if (
        matchesTopOfStack(val as ClosingBrace, topOfStack)
      ) {
        // pop the top of the stack
        stack.pop();
      } else {
        // if the top of the stack does not match the
        // current closing brace, then we have an
        // invalid string
        return false;
      }

    }
  }

  // if the stack is empty, then we have a valid string
  return stack.length === 0;
}

function matchesTopOfStack(
  val: ClosingBrace,
  topOfStack: OpeningBrace
) {
  if (val === ")") {
    return topOfStack === "(";
  }
  if (val === "}") {
    return topOfStack === "{";
  }
  if (val === "]") {
    return topOfStack === "[";
  }
  return false;
}
