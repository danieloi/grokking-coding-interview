// Driver code
// @ts-ignore
function tribonacci(n) {
  if (n < 3) {
    return n === 0 ? 0 : 1;
  }

  let a = 0, b = 1, c = 1;

  for (let i = 2; i < n; i++) {
    [a, b, c] = [b, c, a + b + c];
  }
  return c;
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
