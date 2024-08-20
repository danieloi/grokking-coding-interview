// A node in a linked list
class Node {
  value: [number, number];
  next: Node | null;

  constructor(value: [number, number]) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add element into a queue
  enqueue(value: [number, number]) {
    const node = new Node(value);

    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  // Remove element from a queue
  dequeue() {
    if (this.head === null) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.length--;
    return value;
  }

  // Get value of the first element
  peek() {
    if (this.head === null) {
      return undefined;
    }
    return this.head.value;
  }

  // Check if queue is empty or not
  isEmpty() {
    return this.length === 0;
  }

  // A helper function to convert the nodes' data to
  // array format string
  toString() {
    if (this.head === null) return "[]";

    let result = "[";
    let current = this.head;
    while (current.next !== null) {
      result += current.value + ",";
      current = current.next;
    }
    result += current.value + "]";
    return result;
  }
}

export default Queue;
