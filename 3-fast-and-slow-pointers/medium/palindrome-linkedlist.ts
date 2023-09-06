class Node {
  value: number;
  next: Node | null;
  constructor(value: number, next = null) {
    this.value = value;
    this.next = next;
  }
}

function is_palindromic_linked_list(head: Node | null) {
  if (head === null || head.next === null) {
    return true;
  }

  // find middle of the LinkedList
  let slow: Node | null = head,
    fast: Node | null = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  let headSecondHalf = reverse(slow); // reverse the second half
  // store the head of reversed part to revert back later
  let copyHeadSecondHalf = headSecondHalf;

  // compare the first and the second half
  while (head !== null && headSecondHalf !== null) {
    if (head.value !== headSecondHalf.value) {
      break; // not a palindrome
    }

    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }
  reverse(copyHeadSecondHalf); // revert the reverse of the second half

  if (head === null || headSecondHalf === null) {
    // if both halves match
    return true;
  }

  return false;
}

/**
 * To reverse a LinkedList, we need to reverse one node at a
 * time. We will start with a variable current which will
 * initially point to the head of the LinkedList and a
 * variable previous which will point to the previous node
 * that we have processed; initially previous will point to
 * null.
 *
 * In a stepwise manner, we will reverse the current
 * node by pointing it to the previous before moving on to
 * the next node. Also, we will update the previous to
 * always point to the previous node that we have processed.
 *
 * here 'head' is 'current'
 */
function reverse(head: Node | null) {
  let prev: Node | null = null;
  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

head.next.next.next.next.next = new Node(2);
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

export {};
