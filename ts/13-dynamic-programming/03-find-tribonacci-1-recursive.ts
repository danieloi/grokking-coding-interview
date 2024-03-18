export function findTribonacci(n) {
  const dp = new Array(n).fill(Number.MAX_VALUE);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  findTribonacciHelper(n, dp);

  return dp[n];
}

function findTribonacciHelper(n, dp) {
  if (dp[n] != Number.MAX_VALUE) {
    return dp[n];
  }

  if (n < 3) {
    return dp[n];
  }

  return (dp[n] =
    findTribonacci(n - 1) +
    findTribonacci(n - 2) +
    findTribonacci(n - 3));
}
































// Driver code
function main() {
  let tr1 = findTribonacci(4);
  console.log("1. The 4th Tribonacci number is:  ", tr1);
  console.log("-".repeat(100));
  let tr2 = findTribonacci(5);
  console.log("2. The 5th Tribonacci number is:  ", tr2);
  console.log("-".repeat(100));
  let tr3 = findTribonacci(25);
  console.log("3. The 25th Tribonacci number is: ", tr3);
  console.log("-".repeat(100));
}

main();
