"use strict";
exports.__esModule = true;
var search_quadruplets = function (arr, target) {
    // TODO: Write your code here
    var quadruplets = [];
    arr.sort(function (a, b) { return a - b; });
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
            search_pair(arr, target, quadruplets, i, j);
        }
    }
    return quadruplets;
};
function search_pair(arr, target, quadruplets, i, j) {
    var target_sum = target - arr[i] - arr[j];
    var left = j + 1;
    var right = arr.length - 1;
    while (left < right) {
        var current_sum = arr[left] + arr[right];
        if (current_sum === target_sum) {
            // found the triplet
            quadruplets.push([arr[i], arr[j], arr[left], arr[right]]);
            left += 1;
            right -= 1;
            while (left < right && arr[left] === arr[left - 1]) {
                left += 1; // skip same element to avoid duplicate quadruplets
            }
            while (left < right && arr[right] === arr[right + 1]) {
                right -= 1; // skip same element to avoid duplicate quadruplets
            }
        }
        else if (target_sum > current_sum) {
            left += 1; // we need a pair with a bigger sum
        }
        else {
            right -= 1; // we need a pair with a smaller sum
        }
    }
}
console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
/**
 * expected output
 * [-3,-1,1,4]
 * [-3,1,1,2]
 */
console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));
