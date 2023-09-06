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

function find_minimum_depth(root: TreeNodeChild) {
  if (root === null) {
    return 0;
  }

  const queue = new Deque();
  queue.push(root);
  let minimumTreeDepth = 0;
  while (queue.length > 0) {
    minimumTreeDepth += 1;
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const currentNode: TreeNode = queue.shift();

      // check if this is a leaf node
      if (currentNode.left === null && currentNode.right === null) {
        return minimumTreeDepth;
      }
      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
export {};
