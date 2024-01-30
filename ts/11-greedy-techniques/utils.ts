export class MaxHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(idx) {
    if (idx === 0) return;
    const parentIdx = Math.floor((idx - 1) / 2);
    if (this.heap[idx] > this.heap[parentIdx]) {
      [this.heap[idx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[idx],
      ];
      this.bubbleUp(parentIdx);
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);
    return max;
  }

  bubbleDown(idx) {
    const leftChildIdx = 2 * idx + 1;
    const rightChildIdx = 2 * idx + 2;
    let maxChildIdx;
    if (leftChildIdx >= this.heap.length) return;

    if (rightChildIdx >= this.heap.length) {
      maxChildIdx = leftChildIdx;
    } else {
      maxChildIdx =
        this.heap[leftChildIdx] > this.heap[rightChildIdx]
          ? leftChildIdx
          : rightChildIdx;
    }

    if (this.heap[idx] < this.heap[maxChildIdx]) {
      [this.heap[idx], this.heap[maxChildIdx]] = [
        this.heap[maxChildIdx],
        this.heap[idx],
      ];
      this.bubbleDown(maxChildIdx);
    }
  }

  peekMax() {
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}
