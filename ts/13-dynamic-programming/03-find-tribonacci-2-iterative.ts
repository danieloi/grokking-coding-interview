// Driver code
// @ts-ignore
function tribonacci(n) {
  if (n < 3) {
    return n === 0 ? 0 : 1;
  }

  let dp = new Array(n + 1).fill(0);

  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  
  return dp[n];
}































// @ts-ignore
function main() {
  let tr1 = tribonacci(4);
  console.log("1. The 4th Tribonacci number is:  ", tr1);
  console.log("-".repeat(100));
  let tr2 = tribonacci(5);
  console.log("2. The 5th Tribonacci number is:  ", tr2);
  console.log("-".repeat(100));
  let tr3 = tribonacci(25);
  console.log("3. The 25th Tribonacci number is: ", tr3);
  console.log("-".repeat(100));
}

main();
