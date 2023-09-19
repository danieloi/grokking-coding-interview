/**
 * Statement
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If the number of nodes in the linked list is even, there will be two middle nodes, so return the second one.
 */

import { LinkedList, LinkedListNode } from "./linked-list";

// The code in "linked_list.js" can be used to create a linked list out of a list.
// The code in "linked_list_traversal.js" can be used to traverse the linked list.
// The code in "linked_list_reversal.js" can be used to reverse the linked list.

export function getMiddleNode(head: LinkedListNode) {
  // Replace this placeholder return statement with your code
  // Replace this placeholder return statement with your code
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;
  }

  return slow;
}
