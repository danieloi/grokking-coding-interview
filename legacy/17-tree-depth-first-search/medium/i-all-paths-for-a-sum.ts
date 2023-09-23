/**
 * Given a binary tree and a number "S", find all paths from the root to leaf such that adding up all the values along the path equals S.
 */

let result: number[][] = [];
const path: number[] = [];

function find_paths(node: TreeNodeChild, sum: number) {
  if (node === null) {
    return;
  }

  path.push(node.val);

  if (isLeaf(node) && node.val === sum) {
    result.push(path.slice());
  }

  find_paths(node.left, sum - node.val);
  find_paths(node.right, sum - node.val);

  path.pop();

  return result;
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

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let sum = 23;

result = find_paths(root, sum) || [];

process.stdout.write(`Tree paths with sum ${sum}: `);
for (let i = 0; i < result.length; i++) {
  process.stdout.write(`[${result[i]}] `);
}

export {};
