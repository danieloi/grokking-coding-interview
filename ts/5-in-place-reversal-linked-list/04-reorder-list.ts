import {
  LinkedList,
  LinkedListNode,
  printListWithForwardArrow,
} from "./utils";

function reorderList(head: LinkedListNode | null) {
  if (head == null) return;

  // find the middle of linked list
  // in 1->2->3->4->5->6 find 4
  let slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next!;
    fast = fast.next.next!;
  }

  // reverse the second part of the list
  // convert 1->2->3->4->5->6 into 1->2->3 and 6->5->4
  // reverse the second half in-place
  let prev: LinkedListNode | null = null,
    curr: LinkedListNode | null = slow;
  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // merge two sorted linked lists
  // merge 1->2->3 and 6->5->4 into 1->6->2->5->3->4
  let first = head,
    second = prev!;

  while (second.next != null) {
    let temp1 = first.next,
      temp2 = second.next;
    first.next = second;
    first = temp1!;
    second.next = temp1;
    second = temp2;
  }
  return head;
}

// Driver code
function main() {
  let inputList = [
    [1, 1, 2, 2, 3, -1, 10, 12],
    [10, 20, -22, 21, -12],
    [1, 1, 1],
    [-2, -5, -6, 0, -1, -4],
    [3, 1, 5, 7, -4, -2, -1, -6],
  ];

  inputList.map((inp, i) => {
    // creating linked list
    let obj = new LinkedList();
    obj.createLinkedList(inp);

    // Displaying original linked list
    console.log(
      i + 1 + ".\tOriginal list:",
      printListWithForwardArrow(obj.head)
    );

    // Calling the reorderList function
    let result = reorderList(obj.head);

    // Displaying modified linked list
    console.log(
      "\tAfter folding:",
      printListWithForwardArrow(result)
    );
    if (i != inputList.length - 1) console.log("-".repeat(100));
  });
}

main();
