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

  return dp[n] =
    findTribonacci(n - 1) +
    findTribonacci(n - 2) +
    findTribonacci(n - 3);
}
