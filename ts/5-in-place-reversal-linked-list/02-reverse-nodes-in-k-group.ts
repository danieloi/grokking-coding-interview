import {
  LinkedListNode,
  LinkedList,
  printListWithForwardArrow,
  reverseLinkedListKNodes,
} from "./utils";

function reverseKGroups(head: LinkedListNode | null, k: number) {
  // Create a dummy node and set its next pointer to the head
  const dummy = new LinkedListNode(0);
  dummy.next = head;
  let ptr: LinkedListNode | null = dummy;

  while (ptr !== null) {
    console.log("\tIdentifying a group of " + k + " nodes:");
    console.log("\t\tptr: " + ptr.data);

    // Keep track of the current position
    let tracker: LinkedListNode | null = ptr;

    let groupString = "\t\tCurrent group: ";

    // Traverse k nodes to check if there are enough nodes to reverse
    for (let i = 0; i < k; i++) {
      if (tracker === null) {
        break;
      }
      tracker = tracker.next;
      if (tracker) {
        groupString += tracker.data + " ";
      } else {
        groupString += "";
      }
    }
    console.log(groupString);

    // If there are not enough nodes to reverse, break out of the loop
    if (tracker === null) {
      console.log(
        "\t\tThe above group contains less than " +
          k +
          " nodes, so we can't reverse it."
      );
      console.log(
        "\nFinal state of the linked list: ",
        printListWithForwardArrow(dummy.next)
      );
      break;
    }
    console.log(
      "\t\tThe above group of " + k + " nodes can be reversed.\n"
    );

    // Reverse the current group of k nodes
    console.log("\tReversing the current group of " + k + " nodes:");
    const updatedNodes = reverseLinkedListKNodes(ptr.next, k);
    const previous = updatedNodes[0];
    const current = updatedNodes[1];
    console.log(
      "\t\tReversed group: ",
      printListWithForwardArrow(previous)
    );

    // Connect the reversed group to the rest of the linked list
    const lastNodeOfReversedGroup = ptr.next;
    lastNodeOfReversedGroup.next = current;
    ptr.next = previous;
    ptr = lastNodeOfReversedGroup;
    console.log(
      "\n\tRe-attaching the reversed group to the rest of the linked list:\n\t\t",
      printListWithForwardArrow(dummy.next)
    );

    console.log("\n");
  }
  return dummy.next;
}

// Driver code
function main() {
  const inputList = [1, 2, 3, 4, 5, 6, 7, 8];
  const k = 3;

  const inputLinkedList = new LinkedList();
  inputLinkedList.createLinkedList(inputList);

  console.log(
    "Linked list:",
    printListWithForwardArrow(inputLinkedList.head),
    "\n"
  );
  reverseKGroups(inputLinkedList.head, k);
}

main();
