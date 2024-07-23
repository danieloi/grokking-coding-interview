function calculator(expression) {
  // We'll use sign_value variable to represent the
  // positive or negative operator
  var i,
    number = 0,
    operations_stack: number[] = [],
    result = 0,
    signValue = 1,
    length = expression.length;

  for (i = 0; i < length; i++) {
    var c = expression[i];
    // To store the consecutive digits that is 52 => 5 x
    // 10 + 2 = 52
    if (!isNaN(parseInt(c))) {
      number = number * 10 + parseInt(c);
    }
    // Evaluate the left expression and store the new
    // sign value
    if ("+-".includes(c)) {
      result += number * signValue;
      signValue = c == "-" ? -1 : 1;
      number = 0;
    }
    // Push the result calculated till now and store
    // the sign value
    else if (c == "(") {
      operations_stack.push(result);
      operations_stack.push(signValue);

      result = 0;
      signValue = 1;
    }
    // Convert current number to positive or negative
    // if we need to perform an addition or a
    // subtraction respectively and add it to the
    // previously calculated result
    else if (c == ")") {
      result += signValue * number;
      var popSignValue: number = operations_stack.pop()!;
      result *= popSignValue;
      let secondValue: number = operations_stack.pop()!;
      result += secondValue;
      number = 0;
    }
  }
  return result + number * signValue;
}

















// Driver code
function main() {
  var input = [
      "4 + (52 - 12) + 99",
      "(31 + 7) - (5 - 2)",
      "(12 - 9 + 4) + ( 7 - 5)",
      "8 - 5 + (19 - 11) + 6 + (10 + 3)",
      "56 - 44 - (27 - 17 - 1) + 7",
    ],
    num = 1,
    i,
    length = input.length;

  for (i = 0; i < length; i++) {
    var expression = input[i];
    console.log(
      num + "." + "\tGiven Expression:",
      expression
    );
    console.log("\tThe result is:", calculator(expression));
    num += 1;
    console.log("-".repeat(100));
  }
}

main();
