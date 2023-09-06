"use strict";

exports.__esModule = true;

var search_quadruplets = function search_quadruplets(arr, target) {
  var quadruplets = [];
  arr.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      // skip same element to avoid duplicate quadruplets
      continue;
    }

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[j - 1]) {
        // skip same element to avoid duplicate quadruplets
        continue;
      }

      search_pair(arr, target - arr[i] - arr[j], j + 1, quadruplets);
    }
  } // TODO: Write your code here


  return quadruplets;
};

function search_pair(arr, target_sum, left, quadruplets) {
  var right = arr.length - 1;

  while (left < right) {
    var current_sum = arr[left] + arr[right];

    if (current_sum === target_sum) {
      // found the triplet
      quadruplets.push([-target_sum, arr[left], arr[right]]);
      left += 1;
      right -= 1;

      while (left < right && arr[left] === arr[left - 1]) {
        left += 1; // skip same element to avoid duplicate quadruplets
      }

      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element to avoid duplicate quadruplets
      }
    } else if (target_sum > current_sum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}