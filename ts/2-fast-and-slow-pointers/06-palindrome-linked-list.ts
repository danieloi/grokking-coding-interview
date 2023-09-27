import { LinkedListNode, reverseLinkedList, LinkedList } from "./linked-list";

// Check palindrome in linkedList
function palindrome(head: LinkedListNode | null) {
  // Initialize slow and fast pointers to the head of the linked list
  var fast: LinkedListNode | null, slow: LinkedListNode | null;
  slow = head;
  fast = head;

  // Find the middle of the linked list using the slow and fast pointers
  while (fast && fast.next) {
    // move slow one step forward
    slow = slow!.next;
    // move fast two steps forward
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list starting from the middle node
  const reversedData = reverseLinkedList(slow);

  // Compare the first half of the linked list with the reversed second half of the linked list

  var check = compareTwoHalves(head, reversedData);

  // Re-reverse the second half of the linked list to restore the original linked list
  reverseLinkedList(reversedData);

  // Return True if the linked list is a palindrome, else False
  if (check) {
    return true;
  }

  return false;
}

function compareTwoHalves(
  firstHalf: LinkedListNode | null,
  secondHalf: LinkedListNode | null
) {
  // Compare the corresponding nodes of the first and second halves of the linked list
  while (firstHalf !== null && secondHalf !== null) {
    if (firstHalf.data !== secondHalf.data) {
      return false;
    } else {
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
  }
  return true;
}

// Test
function createLinkedList(arr: number[]) {
  let list = new LinkedList();
  list.createLinkedList(arr);
  return list;
}

let list = createLinkedList([1, 2, 3, 2, 1]);
console.log(`Is palindrome: ${palindrome(list.head)}`);
