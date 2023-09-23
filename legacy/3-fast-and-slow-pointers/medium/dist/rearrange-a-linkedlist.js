"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    Node.prototype.print_list = function () {
        var temp = this;
        while (temp !== null) {
            process.stdout.write(temp.value + " ");
            temp = temp.next;
        }
        console.log();
    };
    return Node;
}());
function reorder(head) {
    if (head === null || head.next === null) {
        return;
    }
    // find middle of the LinkedList
    var slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // slow is now pointing to the middle node
    var headSecondHalf = reverse(slow); // reverse the second half
    var headFirstHalf = head;
    // rearrange to produce the LinkedList in the required order
    while (headFirstHalf !== null && headSecondHalf !== null) {
        var temp = headFirstHalf.next;
        headFirstHalf.next = headSecondHalf;
        headFirstHalf = temp;
        temp = headSecondHalf.next;
        headSecondHalf.next = headFirstHalf;
        headSecondHalf = temp;
    }
    // set the next of the last node to 'null'
    if (headFirstHalf !== null) {
        headFirstHalf.next = null;
    }
}
function reverse(head) {
    var prev = null;
    while (head !== null) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
var head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
reorder(head);
head.print_list();
