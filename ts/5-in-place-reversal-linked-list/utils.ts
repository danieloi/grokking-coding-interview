// Template for linked list node class
export class LinkedListNode {
  data: number;
  next: LinkedListNode | null;
  constructor(data: number, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  head: LinkedListNode | null;
  insertNodeAtHead: (node: LinkedListNode) => void;
  createLinkedList: (list: number[]) => void;
  getLength: (head: LinkedListNode | null) => number;
  getNode: (
    head: LinkedListNode | null,
    pos: number
  ) => LinkedListNode | null;
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

// Template for reversing a linked list

export function reverseLinkedList(head: LinkedListNode | null) {
  let prev: LinkedListNode | null = null,
    curr = head;

  while (curr != null) {
    let nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }
  return prev;
}

export function reverseLinkedListKNodes(
  head: LinkedListNode | null,
  k: number
) {
  let previous: LinkedListNode | null = null;
  let current = head;
  let next: LinkedListNode | null = null;

  for (let i = 0; i < k; i++) {
    // temporarily store the next node
    next = current!.next;
    // reverse the current node
    current!.next = previous;
    // before we move to the next node, point previous to the current node
    previous = current;
    // move to the next node
    current = next;
  }

  return [previous, current];
}

// Template for traversing a linked list

export function traverseLinkedList(head: LinkedListNode | null) {
  let current = head,
    nxt: LinkedListNode | null = null;

  while (current != null) {
    nxt = current.next;
    current = nxt;
  }
}

// Template for printing the linked list with forward arrows
export function printListWithForwardArrow(linkedListNode) {
  let temp = linkedListNode;
  let result = "";
  while (temp != null) {
    result += temp.data;
    temp = temp.next;
    if (temp != null) result += " → ";
    // if this is the last node, print null at the end
    else result += " → null";
  }
  return result;
}
