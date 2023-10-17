import {
  LinkedList,
  LinkedListNode,
  printListWithForwardArrow,
} from "./utils";

function reverseEvenLengthGroups(head: LinkedListNode | null) {
  // Node immediately before the current group
  let prev = head!;

  // The head doesn't need to be reversed since
  // it's a group of one node, so starts with length 2
  let groupLen = 2;

  while (prev.next != null) {
    let node = prev,
      numNodes = 0;
    for (let i = 0; i < groupLen; i++) {
      if (node.next == null) break;
      numNodes++;
      node = node.next;
    }
    if (numNodes % 2) {
      // odd length
      prev = node;
    } else {
      // even length
      let reverse = node.next;
      let curr = prev.next,
        currNext;
      for (let j = 0; j < numNodes; j++) {
        currNext = curr.next;
        curr.next = reverse;
        reverse = curr;
        curr = currNext;
      }
      // updating the prev pointer after reversal of
      // the even group
      let prevNext = prev.next;
      prev.next = node;
      prev = prevNext;
    }
    // increment 1 by one and move to the next group
    groupLen++;
  }
  return head;
}

// Driver code
function main() {
  let v1 = [1, 2, 3, 4],
    v2 = [10, 11, 12, 13, 14],
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
        ".\tIf we reverse the even length groups of the linked list:\n\t" +
        printListWithForwardArrow(listHeads[i])
    );
    console.log(
      "\n\tWe will get:\n\t" +
        printListWithForwardArrow(
          reverseEvenLengthGroups(listHeads[i])
        )
    );
    console.log("-".repeat(100));
  }
}

main();
