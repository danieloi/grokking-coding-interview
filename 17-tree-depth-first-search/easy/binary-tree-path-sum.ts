/**
 * Given a binary tree and a number "S", find if the tree has a root-to-leaf path such that adding up all the values along the path equals S.
 */

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

function hasPath(root: TreeNodeChild, sum: number) {
  if (root === null) {
    return false;
  }

  // if the current node is a leaf and its value is equal to the sum, we've found a path
  if (root.val === sum && isLeaf(root)) {
    return true;
  }

  // recursively call to traverse the left and right sub-tree
  // return true if any of the two recursive calls return true
  return (
    hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val)
  );
}

function isLeaf(root: TreeNode) {
  return root.left === null && root.right === null;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${hasPath(root, 23)}`);
console.log(`Tree has path: ${hasPath(root, 16)}`);
export {};

/**
 * we traverse each node once so time complexity is O(n) where n is the number of nodes in the tree
 * space complexity is O(n). Happens when the tree is a linked list (i.e. every node has only one child)
 */
