const Deque = require("collections/deque"); //http://www.collectionsjs.com

type TreeNodeChild = TreeNode | null;

class TreeNode {
  val: number;
  left: TreeNodeChild;
  right: TreeNodeChild;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function find_successor(root: TreeNodeChild, key: number) {
  if (root === null) {
    return null;
  }

  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    const currentNode: TreeNode = queue.shift();
    // insert the children of current node in the queue
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
    // break if we have found the key
    if (currentNode.val === key) {
      break;
    }
  }

  if (queue.length > 0) {
    return queue.peek();
  }
  return null;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let result = find_successor(root, 12);
if (result) {
  console.log(result.val);
}
result = find_successor(root, 9);
if (result) {
  console.log(result.val);
}
export {};
