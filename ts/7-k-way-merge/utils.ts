export class MaxHeap {
  data: any[];
  compareVal: (a: any, b: any) => number;
  constructor(data = new Array()) {
    this.data = data;
    this.compareVal = (a, b) => b - a; // Invert the comparison for MaxHeap
    this.heapify();
  }

  heapify() {
    if (this.size() < 2) {
      return;
    }
    for (let i = 1; i < this.size(); i++) {
      this.percolateUp(i);
    }
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.data[0];
  }

  push(value) {
    this.data.push(value);
    this.percolateUp(this.size() - 1);
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.percolateDown(0);
    }
    return result;
  }

  percolateUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (
        this.compareVal(
          this.data[index][0],
          this.data[parentIndex][0]
        ) < 0
      ) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  percolateDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;

      if (
        leftIndex <= lastIndex &&
        this.compareVal(
          this.data[leftIndex][0],
          this.data[findIndex][0]
        ) < 0
      ) {
        findIndex = leftIndex;
      }

      if (
        rightIndex <= lastIndex &&
        this.compareVal(
          this.data[rightIndex][0],
          this.data[findIndex][0]
        ) < 0
      ) {
        findIndex = rightIndex;
      }

      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  size() {
    return this.data.length;
  }
}

export class MinHeap<T = any> {
  data: T[];
  compareVal: (a: any, b: any) => number;
  constructor(data = new Array()) {
    this.data = data;
    this.compareVal = (a, b) => a - b;
    this.heapify();
  }

  heapify() {
    if (this.size() < 2) {
      return;
    }
    for (let i = 1; i < this.size(); i++) {
      this.percolateUp(i);
    }
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.data[0];
  }

  push(value) {
    this.data.push(value);
    this.percolateUp(this.size() - 1);
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last as T;
      this.percolateDown(0);
    }
    return result;
  }

  percolateUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (
        this.compareVal(
          this.data[index][0],
          this.data[parentIndex][0]
        ) < 0
      ) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  percolateDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;

      if (
        leftIndex <= lastIndex &&
        this.compareVal(
          this.data[leftIndex][0],
          this.data[findIndex][0]
        ) < 0
      ) {
        findIndex = leftIndex;
      }

      if (
        rightIndex <= lastIndex &&
        this.compareVal(
          this.data[rightIndex][0],
          this.data[findIndex][0]
        ) < 0
      ) {
        findIndex = rightIndex;
      }

      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  size() {
    return this.data.length;
  }
}

export function printList(lst: number[]) {
  let output = "[";
  var i = 0;
  for (i = 0; i < lst.length - 1; i++) {
    output += lst[i] + ", ";
  }
  output += lst[i] + "]";
  return output;
}

export function printDecimalNum(num: number) {
  const temp = num.toString();
  const output = temp.includes(".")
    ? num
    : num.toPrecision(temp.length + 1);
  return output;
}

export function printListWithFloats(lst: number[]) {
  let output = "[";
  var i = 0;
  for (i = 0; i < lst.length - 1; i++) {
    output += printDecimalNum(lst[i]) + ", ";
  }
  output += printDecimalNum(lst[i]) + "]";
  return output;
}

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
    this.getNode = function (
      head,
      pos
    ): LinkedListNode | null {
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
