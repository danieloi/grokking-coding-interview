import {
  LinkedList,
  LinkedListNode,
  printListWithForwardArrow,
  swap,
} from "./utils";

function swapNodes(head: LinkedListNode | null, k: number) {
  let count = 0;
  // front and end pointers will be used to track the kth node from
  // the start and end of the linked list, respectively
  let front: LinkedListNode | null = null,
    end: LinkedListNode | null = null;
  let curr = head;

  while (curr != null) {
    count++;

    // if end is not null, it means kth node from the begining
    // has been found. Now, we can move the end pointer in the
    // linked list to find the kth node from the end of the linked list
    if (end != null) end = end.next;

    // if the count has become equal to k, it means that the curr is
    // pointing at the kth node from the start of the linked list
    if (count == k) {
      front = curr;
      end = head;
    }

    curr = curr.next;
  }
  // swap the values of two nodes
  swap(front!, end!);
  return head;
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
    k = [2, 3, 2, 3, 1];

  for (let i = 0; i < inputList.length; i++) {
    let newLinkedList = new LinkedList();
    newLinkedList.createLinkedList(inputList[i]);
    console.log(
      i + 1 + ".\tOriginal linked list is:",
      printListWithForwardArrow(newLinkedList.head)
    );
    console.log("\tk:", k[i]);
    if (k[i] <= 0) {
      console.log(
        "\t The expected 'k' to have value from 1 to length of the linked list only."
      );
    } else {
      let result = swapNodes(newLinkedList.head, k[i]);
      console.log(
        "\tLinked list with swapped nodes:",
        printListWithForwardArrow(result)
      );
    }
    console.log("-".repeat(100));
  }
}

main();
