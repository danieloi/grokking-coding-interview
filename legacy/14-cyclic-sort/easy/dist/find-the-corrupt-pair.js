"use strict";
exports.__esModule = true;
var find_corrupt_numbers = function (nums) {
    var _a;
    var i = 0;
    while (i < nums.length) {
        var j = nums[i] - 1; //j is the correct index of the value at i
        if (nums[i] !== nums[j]) {
            _a = [nums[j], nums[i]], nums[i] = _a[0], nums[j] = _a[1]; // swap
        }
        else {
            i += 1;
        }
    }
    //find the duplicate and the missing number
    for (var i_1 = 0; i_1 < nums.length; i_1++) {
        if (nums[i_1] !== i_1 + 1) {
            return [nums[i_1], i_1 + 1];
        }
    }
    return [-1, -1];
};
