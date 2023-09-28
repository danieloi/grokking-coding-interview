function minWindow(s: string, t: string) {
  // empty string scenario
  if (t === "") {
    return "";
  }

  // creating the two hash maps
  const reqCount = {};
  const window = {};

  // populating reqCount hash map
  for (let i = 0; i < t.length; i++) {
    const c = t.charAt(i);
    reqCount[c] = 1 + (reqCount[c] || 0);
  }

  // populating window hash map
  for (let i = 0; i < t.length; i++) {
    const c = t.charAt(i);
    window[c] = 0;
  }

  // setting up the conditional variables
  let current = 0;
  const required = Object.keys(reqCount).length;

  // setting up a variable containing the result's starting and ending point
  // with default values and a length variable
  let res = [-1, -1];
  let resLen = Infinity;

  // setting up the sliding window pointers
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const c = s.charAt(right);

    // if the current character also occurs in t, update its frequency in window hash map
    if (t.indexOf(c) !== -1) {
      window[c] = 1 + (window[c] || 0);
    }

    // updating the current variable
    if (reqCount[c] && window[c] === reqCount[c]) {
      current += 1;
    }

    // adjusting the sliding window
    while (current === required) {
      // update our result
      if (right - left + 1 < resLen) {
        res = [left, right];
        resLen = right - left + 1;
      }

      // pop from the left of our window
      const leftChar = s.charAt(left);
      if (t.indexOf(leftChar) !== -1) {
        window[leftChar] -= 1;
      }

      // if the popped character was among the required characters and
      // removing it has reduced its frequency below its frequency in t, decrement current
      if (reqCount[leftChar] && window[leftChar] < reqCount[leftChar]) {
        current -= 1;
      }
      left += 1;
    }
  }
  const [leftIndex, rightIndex] = res;

  // return the minimum window substring
  return resLen !== Infinity ? s.slice(leftIndex, rightIndex + 1) : "";
}

// driver Code
function main() {
  const s = ["PATTERN", "LIFE", "ABRACADABRA", "STRIKER", "DFFDFDFVD"];
  const t = ["TN", "I", "ABC", "RK", "VDD"];
  for (let i = 0; i < s.length; i++) {
    console.log(
      `${i + 1}.\ts: ${s[i]}\n\tt: ${
        t[i]
      }\n\tThe minimum substring containing ${t[i]} is: ${minWindow(
        s[i],
        t[i]
      )}`
    );
    console.log("-".repeat(100));
  }
}

if (require.main === module) {
  main();
}
