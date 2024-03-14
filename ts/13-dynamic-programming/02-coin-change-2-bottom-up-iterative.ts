// @ts-ignore
function coinChange(coins, total) {
  if (total < 1) {
    return 0;
  }

  const counter = new Array(total+1 ).fill(
    Number.MAX_VALUE
  );
  
  counter[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j < total + 1; j++) {
      counter[j] = Math.min(
        counter[j],
        counter[j - coins[i]] + 1
      );
    }
  }

  if (counter[total] == Number.MAX_VALUE) {
    return -1;
  }

  return counter[total];
}




















// @ts-ignore
function main() {
  let coins = [
    [1, 3, 4, 5],
    [1, 4, 6, 9],
    [6, 7, 8],
    [1, 2, 3, 4, 5],
    [14, 15, 18, 20],
  ];
  let total = [7, 11, 27, 41, 52];

  for (let i = 0; i < total.length; i++) {
    console.log(
      (i + 1).toString() +
        ".\tThe minimum number of coins required to find " +
        total[i].toString() +
        " from",
      coins[i],
      "is " + coinChange(coins[i], total[i]).toString()
    );
    console.log("-".repeat(100));
  }
}

main();
