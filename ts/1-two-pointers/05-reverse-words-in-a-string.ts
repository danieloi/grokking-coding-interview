export function reverseWords(sentence: string) {
  // Replace this placeholder return statement with your code
  const words = sentence.split(" ");
  let left = 0,
    right = words.length - 1;

  while (left < right) {
    if (words[left] === "") {
      left++;
    } else if (words[right] === "") {
      right--;
    } else {
      [words[left], words[right]] = [words[right], words[left]];
      left++;
      right--;
    }
  }
  return words.filter((word) => word.length > 0).join(" ");
}

// O(2n) => O(n)
console.log(reverseWords("We love JS  "));
