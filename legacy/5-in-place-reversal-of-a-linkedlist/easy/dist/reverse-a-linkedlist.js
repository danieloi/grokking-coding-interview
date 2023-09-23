"use strict";
/**
 * To reverse a LinkedList, we need to reverse one node at a
 * time. We will start with a variable current which will
 * initially point to the head of the LinkedList and a
 * variable previous which will point to the previous node
 * that we have processed; initially previous will point to
 * null.
 *
 * In a stepwise manner, we will reverse the current node by
 * pointing it to the previous before moving on to the next
 * node. Also, we will update the previous to always point
 * to the previous node that we have processed. Here is the
 */
exports.__esModule = true;
var Node = /** @class */ (function () {
  function Node(value, next) {
    if (next === void 0) {
      next = null;
    }
    this.value = value;
    this.next = next;
  }
  Node.prototype.print_list = function () {
    var temp = this;
    while (temp !== null) {
      process.stdout.write(temp.value + " ");
      temp = temp.next;
    }
    console.log("done");
  };
  return Node;
})();
function reverse(head) {
  var current = head,
    previous = null;
  while (current !== null) {
    var next = current.next; // temporarily store the next node
    current.next = previous; // reverse the current node
    previous = current; // before we move to the next node, point previous to the current node
    current = next; // move on the next node
  }
  return previous;
}
var head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
process.stdout.write("Nodes of original LinkedList are: ");
head.print_list();
var result = reverse(head);
process.stdout.write("Nodes of reversed LinkedList are: ");
result === null || result === void 0 ? void 0 : result.print_list();
