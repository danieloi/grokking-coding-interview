/**
 * Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
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
let result: boolean = false;
const path: number[] = [];

function traverse(node: TreeNodeChild, sequence: number[]) {
  if (node === null) {
    return;
  }
  path.push(node.val);

  if (isLeaf(node) && sequence.length === path.length) {
    if (sequence.every((value, index) => value === path[index])) {
      result = true;
    }
  }
  traverse(node.left, sequence);
  traverse(node.right, sequence);

  path.pop();
}

function find_paths(node: TreeNodeChild, sequence: number[]) {
  traverse(node, sequence);
  return result;
}
function isLeaf(node: TreeNode) {
  return node.left === null && node.right === null;
}

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${find_paths(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${find_paths(root, [1, 1, 6])}`);
