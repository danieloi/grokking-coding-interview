// Queue data structure
class Queue {
  elements: {};
  head: number;
  tail: number;
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

// helper function
function print2DArray(arr) {
  let result = "[";
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "object") {
      result += print2DArray(arr[i]);
    } else {
      result += arr[i];
    }
    if (i != arr.length - 1) result += ", ";
  }
  return (result += "]");
}

export { Queue, print2DArray };
