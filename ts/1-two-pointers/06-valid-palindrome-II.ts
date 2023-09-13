export function isPalindrome(s: string) {
  // Replace this placeholder return statement with your code
  let leftIndex = 0,
    rightIndex = s.length - 1;

  let mismatch = 0;

  while (leftIndex <= rightIndex) {
    if (mismatch > 1) {
      return false;
    }
    if (s[leftIndex] == s[rightIndex]) {
      leftIndex++;
      rightIndex--;
    } else {
      mismatch++;
      rightIndex--;
    }
  }

  if (mismatch <= 1) {
    return true;
  }

  return false;
}

// How to set up two pointers in an array

function twoPointers(array) {
  let leftIndex = 0,
    rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    leftIndex++;
    rightIndex--;
  }
}
