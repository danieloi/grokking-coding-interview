let v;

function firstBadVersion(n) {
  let first = 1;
  let last = n,
    calls = 0;

  while (first < last) {
    let mid = first + Math.floor((last - first) / 2);
    // @ts-expect-error
    if (isBadVersion(mid)) {
      last = mid;
    } else {
      first = mid + 1;
    }
    calls++;
  }
  return [first, calls];
}

























function main() {
  let testCaseVersions = [38, 13, 29, 40, 23],
    firstBadVersions = [28, 10, 10, 28, 19];

  for (let i = 0; i < testCaseVersions.length; i++) {
    v = firstBadVersions[i];
    console.log(
      i + 1 + ".\tNumber of versions:",
      testCaseVersions[i]
    );
    let result = firstBadVersion(testCaseVersions[i]);
    console.log(
      `\n\tFirst bad version: ${result[0]}. Found in`,
      result[1],
      "API calls."
    );
    console.log("-".repeat(100));
  }
}

main();
