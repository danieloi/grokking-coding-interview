class Stack {
  stackList: number[];

  constructor() {
    this.stackList = [];
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stackList[this.stackList.length - 1];
  }

  size() {
    return this.stackList.length;
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stackList.pop();
  }
}

export { Stack };
