// This function inializes the stack using the given

import NestedInteger from "./05-nested-integer";

// nestedList list
class NestedIterator {
  stack: NestedInteger[];
  constructor(nestedList: NestedInteger[]) {
    this.stack = [...nestedList.reverse()];
  }

  // hasNext() will return true if there are still some
  // integers in the stack (that has nestedList
  // elements) and, otherwise, will return false.
  hasNext = function () {
    // Iterate in a stack until stack is not empty
    while (this.stack.length > 0) {
      // Save the top value of the stack
      let top = this.stack[this.stack.length - 1];
      // Check if the top value is integer, if true
      // return True, if not continue
      if (top.isInteger()) return true;
      // If the top is not an integer, it must be the
      // list of integers Pop the list from the stack
      // and save it in the topList
      let topList = this.stack.pop().getList();
      // Save the length of the topList in i and iterate
      // in the list
      let i = topList.length - 1;
      while (i >= 0) {
        // push the values of the nested list into the
        // stack
        this.stack.push(topList[i]);
        i -= 1;
      }
    }
    return false;
  };

  // next will return the integer from the nestedList
  next = function () {
    // Check if there is still an integer in the stack
    if (this.hasNext())
      // If true pop and return the top of the stack
      return this.stack.pop().getInteger();
    return null;
  };
}

export default NestedIterator;
