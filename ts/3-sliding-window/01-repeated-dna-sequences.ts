export function findRepeatedSequences(s: string, k: number) {
  const result: string[] = [];

  let windowStart = 0;
  let windowEnd = windowStart + k - 1;
  const freq: Record<string, number> = {};
  while (windowEnd < s.length) {
    const subStr = s.substring(windowStart, windowEnd + 1);
    freq[subStr] = (freq[subStr] || 0) + 1;
    if (freq[subStr] === 2) {
      result.push(subStr);
    }
    windowStart += 1;
    windowEnd += 1;
  }

  return result;
}

//  test
console.log(findRepeatedSequences("AAAAACCCCCAAAAACCCCCC", 8));
// expected output: ["AAAAACCC", "AAAACCCC", "AAACCCCC"]
