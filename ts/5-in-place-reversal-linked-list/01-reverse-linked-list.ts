import {
  LinkedList,
  LinkedListNode,
  printListWithForwardArrow,
} from "./utils";

function reverse(head: LinkedListNode | null) {
  // initialize prev and next pointers to NULL
  let prev: LinkedListNode | null = null;
  let next: LinkedListNode | null = null;
  // set current pointer to the head node
  let curr = head;

  // while the current pointer is not NULL
  while (curr !== null) {
    // set the next pointer to the next node in the list
    next = curr.next;
    // reverse the current node's pointer to point to
    // the previous node
    curr.next = prev;
    // set the previous pointer to the current node
    prev = curr;
    // move the current pointer to the next node
    curr = next;
  }

  // set the head pointer to the last node, which is the new
  // first node after reversal
  head = prev;
  // return the new head pointer
  return head;
}

// Driver code
function main() {
  const input = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, 6],
    [3, 2, 1],
    [10],
    [1, 2],
  ];

  for (let i = 0; i < input.length; i++) {
    const inputLinkedList = new LinkedList();
    inputLinkedList.createLinkedList(input[i]);
    console.log(
      i + 1 + ".\tInput linked list:",
      printListWithForwardArrow(inputLinkedList.head)
    );
    let result = reverse(inputLinkedList.head);
    console.log(
      "\n\tReversed linked list:",
      printListWithForwardArrow(result)
    );
    console.log("-".repeat(100));
  }
}

main();
