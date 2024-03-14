function calculateMinimumCoins(coins, rem, counter) {
  // combo is bigger than the total
  if (rem < 0) {
    return -1;
  }
    
  // combo is equal to the total
  if (rem == 0) {
    return 0;
  }
    
  // we've seen it before
  if (counter[rem - 1] != Number.MAX_VALUE) {
    return counter[rem - 1];
  }
    
  let minimum = Number.MAX_VALUE;

  coins.forEach(function (coin) {
    let result = calculateMinimumCoins(
      coins,
      rem - coin,
      counter
    );

    // if the result is valid and less than the minimum
    if (result >= 0 && result < minimum) {
      minimum = 1 + result;
    }
  });

  if (minimum != Number.MAX_VALUE) {
    counter[rem - 1] = minimum;
  } else {
    //there's no valid result for this combination
    // so we set it to -1
    counter[rem - 1] = -1;
  }
    
  return counter[rem - 1];
}

// @ts-ignore
function coinChange(coins, total) {
  if (total < 1) {
    return 0;
  }

  return calculateMinimumCoins(
    coins,
    total,
    Array(total).fill(Number.MAX_VALUE)
  );
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
