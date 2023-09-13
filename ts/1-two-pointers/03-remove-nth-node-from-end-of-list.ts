// Template for linked list node class
class LinkedListNode {
  data: number;
  next: LinkedListNode | null;
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Template for the linked list
class LinkedList {
  head: LinkedListNode | null;
  insertNodeAtHead: (node: LinkedListNode) => void;
  createLinkedList: (list: number[]) => void;
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

function removeNthLastNode(head: LinkedListNode, n: number) {
  let leftNode = head;
  let rightNode = head;

  if (head.next == null) {
    return null;
  }

  for (let i = 0; i < n; i++) {
    //   I can use ! because I know n is less than the length of the list
    rightNode = rightNode.next!;
  }

  if (rightNode == null) {
    return head.next;
  }

  while (rightNode.next != null) {
    leftNode = leftNode.next!;
    rightNode = rightNode.next;
  }

  leftNode.next = leftNode.next!.next;

  // Replace this placeholder return statement with your code
  return head;
}

export { removeNthLastNode };
