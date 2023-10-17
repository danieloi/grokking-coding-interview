import {
  LinkedList,
  LinkedListNode,
  printListWithForwardArrow,
} from "./utils";

export function swapPairs(head: LinkedListNode | null) {
  // If linked list is empty or there is only one node in list
  if (head == null || head.next == null) {
    return head;
  }
  let leftEntrance: LinkedListNode | null = null;

  let cursor: LinkedListNode | null = head;

  while (cursor && cursor.next) {
    let left = cursor;
    let right = cursor.next;
    let next = right.next;

    right.next = left;
    left.next = next;

    if (leftEntrance) {
      // If we are not at the head of the list
      leftEntrance.next = right;
    } else {
      // If we are at the head of the list
      head = right;
    }

    // Update the left entrance and the cursor
    leftEntrance = left;
    cursor = next;
  }

  return head;
}

// Driver code
function main() {
  let v1 = [1, 2, 3, 4],
    v2 = [10, 1, 2, 3, 4, 5],
    v3 = [15],
    v4 = [16, 17];

  let l1 = new LinkedList();
  l1.createLinkedList(v1);

  let l2 = new LinkedList();
  l2.createLinkedList(v2);

  let l3 = new LinkedList();
  l3.createLinkedList(v3);

  let l4 = new LinkedList();
  l4.createLinkedList(v4);

  let listHeads = [l1.head, l2.head, l3.head, l4.head];

  for (let i = 0; i < listHeads.length; i++) {
    console.log(
      i +
        1 +
        ".\tIf we swap head pairs of the linked list:\n\t" +
        printListWithForwardArrow(listHeads[i])
    );
    console.log(
      "\n\tWe will get:\n\t" +
        printListWithForwardArrow(swapPairs(listHeads[i]))
    );
    console.log("-".repeat(100));
  }
}

main();
