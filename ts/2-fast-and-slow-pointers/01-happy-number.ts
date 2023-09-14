export function isHappyNumber(n) {
  // Replace this placeholder return statement with your code
  if (n === 1) {
    return true;
  }
  let slow = n,
    fast = sumOfSquaredDigits(n);

  while (slow !== fast) {
    slow = sumOfSquaredDigits(slow);
    fast = sumOfSquaredDigits(sumOfSquaredDigits(fast));
    if (fast === 1) {
      return true;
    }
  }

  return false;
}

// Helper function that calculates the sum of squared digits.
function sumOfSquaredDigits(number: number) {
  let totalSum = 0;
  while (number > 0) {
    let temp = Math.floor(number / 10),
      digit = number % 10;
    number = temp;
    totalSum += digit ** 2;
  }
  return totalSum;
}
