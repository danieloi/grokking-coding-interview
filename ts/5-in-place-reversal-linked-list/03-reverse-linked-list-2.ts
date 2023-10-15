// Assume that the linked list has left to right nodes.
import {
  LinkedList,
  LinkedListNode,
  printListWithForwardArrow,
} from "./utils";

// Reverse left to right nodes of the given linked list.
function reverse(head: LinkedListNode, left: number, right: number) {
  let prev: LinkedListNode | null = null;
  let curr: LinkedListNode | null = head;
  while (right >= left) {
    let next = curr!.next;
    curr!.next = prev;
    prev = curr;
    curr = next;
    right--;
  }
  return prev!; // Returns the head of the reversed list
}

// Reverses the sublist between left and right in the linked list
function reverseBetween(
  head: LinkedListNode | null,
  left: number,
  right: number
) {
  let curr = head;
  // Previous node before the sublist
  let lpn: LinkedListNode | null = null;
  // Node after the sublist
  let right_n: LinkedListNode | null = null;
  // Head of the reversed sublist
  let reverse_head: LinkedListNode | null = null;

  let count = 1;
  while (count < left && curr) {
    lpn = curr;
    curr = curr.next;
    count++;
  }
  if (curr) {
    let rpn: LinkedListNode | null = curr;
    while (count <= right && rpn) {
      right_n = rpn;
      rpn = right_n!.next;
      count++;
    }
    if (right_n) {
      reverse_head = reverse(curr, left, right);
    }
    if (lpn) {
      // Connects the previous node to the reversed sublist
      lpn.next = reverse_head;
    }
    if (rpn) {
      let tmp = reverse_head;
      while (tmp!.next) {
        tmp = tmp!.next;
      }
      // Connects the last node of the reversed sublist to
      // the next node after the sublist
      tmp!.next = rpn;
    }
  }

  if (lpn) {
    // Returns the original head if there are nodes before the sublist
    return head;
  } else {
    // Returns the head of the reversed sublist if there are no
    // nodes before the sublist
    return reverse_head;
  }
}

// Driver code
function main() {
  let inputList = [
      [1, 2, 3, 4, 5, 6, 7],
      [6, 9, 3, 10, 7, 4, 6],
      [6, 9, 3, 4],
      [6, 2, 3, 6, 9],
      [6, 2],
    ],
    left = [1, 3, 2, 1, 1],
    right = [5, 6, 4, 3, 2];

  for (let i = 0; i < inputList.length; i++) {
    let newLinkedList = new LinkedList();
    newLinkedList.createLinkedList(inputList[i]);

    console.log(
      i + 1 + ".\tOriginal linked list is: ",
      printListWithForwardArrow(newLinkedList.head)
    );

    if (left[i] <= 0) {
      console.log(
        "\tThe expected 'left' and 'right' to have value from 1 to length of the linked list only."
      );
    } else {
      let result = reverseBetween(
        newLinkedList.head,
        left[i],
        right[i]
      );
      console.log(
        "\tReversed linked list is: ",
        printListWithForwardArrow(result)
      );
    }
    console.log("-".repeat(98));
  }
}

main();
