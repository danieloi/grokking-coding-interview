/**
 * Given a binary tree and a number ‘S’, find all paths in
 * the tree such that the sum of all the node values of each
 * path equals ‘S’. Please note that the paths can start or
 * end at any node but all paths must follow direction from
 * parent to child (top to bottom).
 */
let result: number[][] = [];
const path: number[] = [];

function count_paths(root, S) {
  return count_paths_recursive(root, S);
}

function count_paths_recursive(node: TreeNodeChild, sum: number) {
  if (node === null) {
    return 0;
  }

  path.push(node.val);

  let pathCount = 0,
    pathSum = 0;

  // find the sums of all sub-paths in the current path list
  for (let i = path.length - 1; i >= 0; i--) {
    pathSum += path[i];
    // if the sum of any sub-path is equal to 'S' we increment our path count.
    if (pathSum === sum) {
      pathCount += 1;
    }
  }

  // traverse the left sub-tree
  pathCount += count_paths_recursive(node.left, sum);
  // traverse the right sub-tree
  pathCount += count_paths_recursive(node.right, sum);

  path.pop();

  return pathCount;
}

function isLeaf(root: TreeNode) {
  return root.left === null && root.right === null;
}

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

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has paths: ${count_paths(root, 11)}`);
