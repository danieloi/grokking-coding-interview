import {
  MaxHeap,
  MinHeap,
  printDecimalNum,
  printList,
} from "./utils";

class MedianOfStream {
  maxHeapForSmallNum: MaxHeap;
  minHeapForLargeNum: MinHeap;
  constructor() {
    this.maxHeapForSmallNum = new MinHeap();
    this.minHeapForLargeNum = new MinHeap();
  }

  insertNum(num: number) {
    if (
      this.maxHeapForSmallNum.size() == 0 ||
      -1 * this.maxHeapForSmallNum.peek() >= num
    ) {
      this.maxHeapForSmallNum.push(-1 * num);
    } else {
      this.minHeapForLargeNum.push(num);
    }

    if (
      this.maxHeapForSmallNum.size() >
      this.minHeapForLargeNum.size() + 1
    ) {
      this.minHeapForLargeNum.push(
        -1 * this.maxHeapForSmallNum.pop()
      );
    } else if (
      this.maxHeapForSmallNum.size() < this.minHeapForLargeNum.size()
    ) {
      this.maxHeapForSmallNum.push(
        -1 * this.minHeapForLargeNum.pop()
      );
    }
  }

  findMedian() {
    if (
      this.maxHeapForSmallNum.size() == this.minHeapForLargeNum.size()
    ) {
      // we have even number of elements,
      // take the average of middle two elements
      return (
        (-1 * this.maxHeapForSmallNum.peek()) / 2.0 +
        this.minHeapForLargeNum.peek() / 2.0
      ); // we divide both numbers by 2.0 to ensure
      // we add two floating point numbers
    }

    // because max-heap will have one more element than the min-heap
    return -1 * (this.maxHeapForSmallNum.peek() / 1.0);
  }
}

// Driver code
function main() {
  var medianNum = new MedianOfStream();
  var nums = [35, 22, 30, 25, 1];
  var numlist: number[] = [];
  for (var i = 0; i < nums.length; i++) {
    numlist.push(nums[i]);
    medianNum.insertNum(nums[i]);
    console.log(
      i + 1 + ".\tData stream:",
      printList(numlist),
      "\n\tThe median for the given numbers is:",
      printDecimalNum(medianNum.findMedian())
    );
    console.log("-".repeat(100));
  }
}

main();
