import { MaxHeap } from "./utils.js";

function kClosest(points: Point[], k: number) {
  let maxHeap = new MaxHeap(),
    result: Point[] = [];

  // put first 'k' points in the max heap
  for (var i = 0; i < k; i++) {
    maxHeap.push([
      points[i].distanceFromOrigin(),
      points[i],
    ]);
  }

  // go through the remaining points of the input array,
  // if a point is closer to the origin than the top point
  // of the max-heap, remove the top point from heap and
  // add the point from the input array
  for (var i = k; i < points.length; i++) {
    if (
      points[i].distanceFromOrigin() <
      maxHeap.peek()[1].distanceFromOrigin()
    ) {
      maxHeap.pop();
      maxHeap.push([
        points[i].distanceFromOrigin(),
        points[i],
      ]);
    }
  }

  for (var i = 0; i < k; i++) {
    let point = maxHeap.pop()[1];
    result.push(point);
  }
  return result;
}






// Driver code
function main() {
  let pointsOne = [
      new Point(1, 3),
      new Point(3, 4),
      new Point(2, -1),
    ],
    pointsTwo = [
      new Point(1, 3),
      new Point(2, 4),
      new Point(2, -1),
      new Point(-2, 2),
      new Point(5, 3),
      new Point(3, -2),
    ],
    pointsThree = [
      new Point(1, 3),
      new Point(5, 3),
      new Point(3, -2),
      new Point(-2, 2),
    ],
    pointsFour = [
      new Point(2, -1),
      new Point(-2, 2),
      new Point(1, 3),
      new Point(2, 4),
    ],
    pointsFive = [
      new Point(1, 3),
      new Point(2, 4),
      new Point(2, -1),
      new Point(-2, 2),
      new Point(5, 3),
      new Point(3, -2),
      new Point(5, 3),
      new Point(3, -2),
    ],
    kArray = [2, 3, 1, 4, 5],
    points = [
      pointsOne,
      pointsTwo,
      pointsThree,
      pointsFour,
      pointsFive,
    ];

  for (var i = 0; i < kArray.length; i++) {
    const result = kClosest(points[i], kArray[i]);
    console.log(
      i + 1 + ".\tSet of points:",
      printList(points[i])
    );
    console.log("\tk:", kArray[i]);
    console.log(
      "\tHere are the k =",
      kArray[i],
      "points closest to the origin (0, 0):",
      printList(result)
    );
    console.log("-".repeat(100));
  }
}

class Point {
  x: number;
  y: number;
  // __init__ will be used to make a Point type object
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // str is used to print the x and y values
  str() {
    const string = "[" + this.x + ", " + this.y + "]";
    return string;
  }

  // distanceFromOrigin calculates the distance using x, y
  // coordinates
  distanceFromOrigin() {
    // ignoring sqrt to calculate the distance
    return this.x * this.x + this.y * this.y;
  }
}

// Function used to convert list to string
function printList(lst: Point[]) {
  let out = "[";
  for (var i = 0; i < lst.length - 1; i++) {
    out += lst[i].str() + ", ";
  }
  out += lst[lst.length - 1].str() + "]";
  return out;
}

main();
