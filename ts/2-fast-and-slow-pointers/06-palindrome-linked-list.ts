import { LinkedListNode, reverseLinkedList, LinkedList } from "./linked-list";

export function palindrome(head: LinkedListNode | null) {
  // Replace this placeholder return statement with your code

  // find the middle of the linked list
  let slowPointer: LinkedListNode | null = head;
  let fastPointer: LinkedListNode | null = head;
  while (fastPointer != null && fastPointer.next != null) {
    slowPointer = slowPointer!.next!;
    fastPointer = fastPointer.next.next;
  }

  // reverse the second half of the linked list
  let headSecondHalf = reverseLinkedList(slowPointer);
  let copyHeadSecondHalf = headSecondHalf;

  // compare the first and the second half
  while (head != null && headSecondHalf != null) {
    if (head.data !== headSecondHalf.data) {
      break; // not a palindrome
    }
    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }

  reverseLinkedList(copyHeadSecondHalf); // revert the reverse of the second half

  if (head == null || headSecondHalf == null) {
    // if both halves match
    return true;
  }

  return false;
}

// Test
function createLinkedList(arr: number[]) {
  let list = new LinkedList();
  list.createLinkedList(arr);
  return list;
}

let list = createLinkedList([1, 2, 3, 2, 1]);
console.log(`Is palindrome: ${palindrome(list.head)}`);
