import {
  LinkedList,
  LinkedListNode,
  printListWithForwardArrow,
} from "./utils";

// Helper function
function merge2Lists(
  head1: LinkedListNode | null,
  head2: LinkedListNode | null
) {
  let dummy = new LinkedListNode(-1);
  // set prev pointer to dummy node
  let prev: LinkedListNode | null = dummy;

  // traverse over the lists until both or
  // one of them becomes null
  while (head1 != null && head2 != null) {
    if (head1.data <= head2.data) {
      // if l1 value is <=  l2 value,
      // add l1 node to the list
      prev.next = head1;
      head1 = head1.next;
    } else {
      // if l1 value is greater than l2 value,
      // add l2 node to the list
      prev.next = head2;
      head2 = head2.next;
    }
    prev = prev.next;
  }

  if (head1 != null) prev.next = head1;
  else prev.next = head2;

  return dummy.next;
}











// Main function
function mergeKLists(lists: LinkedList[]) {
  // for debugging
  const clonedLists = cloneArrayOfLinkedLists(lists);
  if (lists.length > 0) {
    let step = 1;
    while (step < lists.length) {
      // Traversing over the lists in pairs to
      // merge with result
      for (
        let i = 0;
        i < lists.length - step;
        i = i + step * 2
      ) {
        lists[i].head = merge2Lists(
          lists[i].head,
          lists[i + step].head
        );
      }
      step *= 2;
    }
    return lists[0].head;
  }
  return;
}































// Driver code
function main() {
  let inputLists = [
      // [
      //   [21, 23, 42],
      //   [1, 2, 4],
      // ],
      // [
      //   [11, 41, 51],
      //   [21, 23, 42],
      // ],
      // [[2], [1, 2, 4], [25, 56, 66, 72]],
      [[11, 41, 51], [2], [2], [2], [1, 2, 4]],
      [
        [10, 30],
        [15, 25],
        [1, 7],
        [3, 9],
        [100, 300],
        [115, 125],
        [10, 70],
        [30, 90],
      ],
    ],
    k = 1;

  inputLists.forEach((i) => {
    console.log(k + ".\tInput lists: ");
    let llLists: LinkedList[] = [];
    i.forEach((x) => {
      let a = new LinkedList();
      a.createLinkedList(x);
      llLists.push(a);
      console.log(`\t${printListWithForwardArrow(a.head)}`);
    });
    k++;
    console.log("\tMerged list: ");
    console.log(
      `\t${printListWithForwardArrow(mergeKLists(llLists))}`
    );
    console.log("-".repeat(100));
  });
}

function cloneLinkedList(head: LinkedListNode | null) {
  if (!head) return null;

  let newNode = new LinkedListNode(head.data);
  newNode.next = cloneLinkedList(head.next);

  return newNode;
}

function cloneArrayOfLinkedLists(arrayOfLinkedLists: LinkedList[]) {
  return arrayOfLinkedLists.map(ll => cloneLinkedList(ll.head));
}



main();
