/**
 * Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path represents an integer.
 * Find the total sum of all the integers represented by the paths.
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

let sum = 0;
let path: number[] = [];
function find_paths(node: TreeNodeChild) {
  if (node === null) {
    return;
  }
  path.push(node.val);
  if (isLeaf(node)) {
    sum += parseInt(path.join(""));
  }
  find_paths(node.left);
  find_paths(node.right);
  path.pop();
}

function find_sum_of_path_numbers(root: TreeNodeChild): number {
  find_paths(root);
  return sum;
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
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);

/**
 * Time complexity
 *
 * The time complexity of the above
 * algorithm is O(N) O(N) , where ‘N’ is the total number of
 * nodes in the tree. This is due to the fact that we
 * traverse each node once.
 *
 *
 * Space complexity
 *
 * The space complexity of the above
 * algorithm will be O(N) O(N) in the worst case. This space
 * will be used to store the recursion stack. The worst case
 * will happen when the given tree is a linked list (i.e.,
 * every node has only one child).
 */
