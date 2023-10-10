class Interval {
  start: number;
  end: number;
  closed: boolean;
  setClosed: (closed: boolean) => void;
  formatInterval: () => string;
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.closed = true; // the interval is closed by default

    this.setClosed = function (closed) {
      this.closed = closed;
    };

    this.formatInterval = function () {
      return this.closed
        ? "[" + this.start + ", " + this.end + "]"
        : "(" + this.start + ", " + this.end + ")";
    };
  }
}

function display(vec: Interval[]) {
  let string = "[";
  if (vec.length > 0) {
    for (let i = 0; i < vec.length; i++) {
      string += vec[i].formatInterval();
      if (i + 1 < vec.length) {
        string += ", ";
      }
    }
  }
  string += "]";
  return string;
}

class MinHeap {
  data: [number, number, number][];
  compareVal: (a: number, b: number) => number;
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

  offer(value: [number, number, number]) {
    this.data.push(value);
    this.percolateUp(this.size() - 1);
  }

  poll() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop()!;
    if (this.size() !== 0) {
      this.data[0] = last;
      this.percolateDown(0);
    }
    return result;
  }

  percolateUp(index: number) {
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

  percolateDown(index: number) {
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

  swap(index1: number, index2: number) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  size() {
    return this.data.length;
  }
}

export { Interval, display, MinHeap };
