// Template for linked list node class
class LinkedListNode {
  data: number;
  next: LinkedListNode | null;
  constructor(data: number, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Template for the linked list
class LinkedList {
  head: LinkedListNode | null;
  insertNodeAtHead: (node: LinkedListNode) => void;
  createLinkedList: (list: number[]) => void;
  getLength: (head: LinkedListNode | null) => number;
  getNode: (head: LinkedListNode | null, pos: number) => LinkedListNode | null;
  display: () => string;
  constructor() {
    this.head = null;

    // insertNodeAtHead method will insert a LinkedListNode at head
    // of a linked list.
    this.insertNodeAtHead = function (node) {
      if (this.head != null) {
        node.next = this.head;
        this.head = node;
      } else this.head = node;
    };

    // createLinkedList method will create the linked list using the
    // given integer array with the help of InsertAthead method.
    this.createLinkedList = function (list) {
      list.reverse().forEach((element) => {
        let newNode = new LinkedListNode(element);
        this.insertNodeAtHead(newNode);
      });
    };
    // returns the number of nodes in the linked list
    this.getLength = function (head) {
      let length = 0,
        temp = head;
      while (temp != null) {
        length++;
        temp = temp.next;
      }
      return length;
    };
    // returns the node at the specified position(index) of the linked list
    this.getNode = function (head, pos): LinkedListNode | null {
      if (pos !== -1) {
        let p = 0;
        let ptr = head;
        while (p < pos && ptr != null) {
          ptr = ptr.next;
          p += 1;
        }
        return ptr;
      }
      return null;
    };

    // This method will display the elements of the linked list.
    this.display = function () {
      let result = "",
        temp = this.head;
      while (temp != null) {
        result += temp.data;
        temp = temp.next;
        if (temp != null) {
          result += ", ";
        }
      }
      result += "";
      return result;
    };
  }
}

function detectCycle(head: LinkedListNode | null) {
  // Replace this placeholder return statement with your code
  if (head == null) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;
    if (slow == fast) {
      return true;
    }
  }

  return false;
}

// Driver code
function main() {
  const input = [
    [2, 4, 6, 8, 10, 12],
    [1, 3, 5, 7, 9, 11],
    [0, 1, 2, 3, 4, 6],
    [3, 4, 7, 9, 11, 17],
    [5, 1, 4, 9, 2, 3],
  ];

  const pos = [0, -1, 1, -1, 2];

  for (var i = 0; i < input.length; i++) {
    const inputLinkedList = new LinkedList();
    inputLinkedList.createLinkedList(input[i]);
    console.log(i + 1 + ".\tInput:");
    if (pos[i] === -1) {
      console.log("\t", printListWithForwardArrow(inputLinkedList.head));
    } else {
      console.log("\t", printListWithForwardArrowLoop(inputLinkedList.head));
    }
    console.log("\tpos: ", pos[i]);
    if (pos[i] != -1) {
      var length = inputLinkedList.getLength(inputLinkedList.head);
      const lastNode = inputLinkedList.getNode(
        inputLinkedList.head,
        length - 1
      )!;
      lastNode.next = inputLinkedList.getNode(inputLinkedList.head, pos[i]);
    }

    var result = detectCycle(inputLinkedList.head) ? "True" : "False";

    console.log("\n\tDetected cycle =", result);
    console.log("-".repeat(100), "\n");
  }
}

main();

// Template for printing the linked list with forward arrows
export function printListWithForwardArrow(
  linkedListNode: LinkedListNode | null
) {
  let temp = linkedListNode;
  let result = "";
  while (temp != null) {
    result += temp.data;
    temp = temp.next!;
    if (temp != null) result += " → ";
    // if this is the last node, print null at the end
    else result += " → null";
  }
  return result;
}

export function printListWithForwardArrowLoop(
  linkedListNode: LinkedListNode | null
) {
  let temp = linkedListNode;
  let result = "";
  while (temp != null) {
    result += temp.data;
    temp = temp.next;
    if (temp != null) result += " → ";
  }
  return result;
}
