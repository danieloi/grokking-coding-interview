function mergeSorted(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) {
  // set p1 to the last initialised element of nums1
  let p1 = m - 1;

  // set p2 to the last element of nums2
  let p2 = n - 1;

  // traverse backwards over the nums1 array
  for (let p = n + m - 1; p > -1; p--) {
    // if p2 is less than 0, then we've reached
    // the end of nums2
    if (p2 < 0) {
      break;
    }
    // if p1 is greater than or equal to 0 and
    // nums1[p1] is greater than nums2[p2], then
    // set nums1[p] to nums1[p1] and decrement p1
    // by 1
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1 -= 1;
    } else {
      // otherwise, set nums1[p] to nums2[p2] and
      // decrement p2 by 1
      nums1[p] = nums2[p2];
      p2 -= 1;
    }
  }
  return nums1;
}

// Driver code
function main() {
  let m = [9, 2, 3, 1, 8],
    n = [6, 1, 4, 2, 1],
    nums1 = [
      [23, 33, 35, 41, 44, 47, 56, 91, 105, 0, 0, 0, 0, 0, 0],
      [1, 2, 0],
      [1, 1, 1, 0, 0, 0, 0],
      [6, 0, 0],
      [12, 34, 45, 56, 67, 78, 89, 99, 0],
    ],
    nums2 = [
      [32, 49, 50, 51, 61, 99],
      [7],
      [1, 2, 3, 4],
      [-99, -45],
      [100],
    ],
    k = 1;

  for (let i = 0; i < m.length; i++) {
    console.log(k + ".\tnums1:", nums1[i], ", m:", m[i]);
    console.log("\tnums2:", nums2[i], ", n:", n[i]);
    console.log(
      "\n\tMerged list:",
      mergeSorted(nums1[i], m[i], nums2[i], n[i])
    );
    console.log("-".repeat(100));
    k += 1;
  }
}

main();
