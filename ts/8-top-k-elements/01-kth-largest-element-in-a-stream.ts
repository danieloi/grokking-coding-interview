import { MinHeap } from "./utils";

class KthLargest {
    topKHeap: MinHeap;
    k: any;
    // Constructor to initialize heap and add values in it
    constructor(k, nums) {
        this.topKHeap = new MinHeap();
        this.k = k;

        for (const element of nums) {
            this.add(element);
        }
    }

    // Adds element in the heap and return the Kth largest
    add(val) {
        if (this.topKHeap.size() < this.k) {
            this.topKHeap.push(val);
        } else if (val > this.topKHeap.peek()) {
            this.topKHeap.pop();
            this.topKHeap.push(val);
        }

        return this.topKHeap.peek();
    }
}

















function main() {
    const nums = [3, 6, 9, 10];
    const temp = [3, 6, 9, 10];
    console.log("Initial stream: [" + nums + "]");
    console.log("k: " + 3);
    const kLargest = new KthLargest(3, nums);
    const val = [4, 7, 10, 8, 15];
    for (let i = 0; i < val.length; i++) {
        console.log("\tAdding a new number " + val[i] + " to the stream");
        temp.push(val[i]);
        console.log("\tNumber stream: [" + temp + "]");
        console.log("\tKth largest element in the stream: " + kLargest.add(val[i]));
        console.log("-".repeat(100));
    }
}


main()