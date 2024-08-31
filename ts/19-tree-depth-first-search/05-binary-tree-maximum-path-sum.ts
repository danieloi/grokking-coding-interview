import { BinaryTree, displayTree, TreeNode } from "./utils";

let maxSum = Infinity * -1;

function maxContrib(root) {
  if (root == null) return 0;

  // sum of the left and right subtree
  let maxLeft = maxContrib(root.left);
  let maxRight = maxContrib(root.right);

  let leftSubtree = 0,
    rightSubtree = 0;

  // max sum on the left and right sub-trees of root
  if (maxLeft > 0) leftSubtree = maxLeft;
  if (maxRight > 0) rightSubtree = maxRight;

  // the value to start a new path where `root` is a
  // highest root
  let valueNewPath = 
            root.data + leftSubtree + rightSubtree;

  // update maxSum if it's better to start a new path
  maxSum = Math.max(maxSum, valueNewPath);

  // for recursion: return the max contribution if
  // continue the same path
  return root.data + Math.max(leftSubtree, rightSubtree);
}

















































function maxPathSum(root) {
  maxContrib(root);
  let temp = maxSum;
  maxSum = Infinity * -1;
  return temp;
}
















































// driver code
function main() {
  let inputTrees = [
    [
      new TreeNode(-8),
      new TreeNode(2),
      new TreeNode(17),
      new TreeNode(1),
      new TreeNode(4),
      new TreeNode(19),
      new TreeNode(5),
    ],
    [
      new TreeNode(7),
      new TreeNode(3),
      new TreeNode(4),
      new TreeNode(-1),
      new TreeNode(-3),
    ],
    [
      new TreeNode(-10),
      new TreeNode(9),
      new TreeNode(20),
      new TreeNode(30),
      new TreeNode(16),
      new TreeNode(15),
      new TreeNode(7),
    ],
    [new TreeNode(1), new TreeNode(2), new TreeNode(3)],
    [new TreeNode(0)],
    [
      new TreeNode(-10),
      new TreeNode(9),
      new TreeNode(20),
      null,
      null,
      new TreeNode(15),
      new TreeNode(7),
    ],
    [
      new TreeNode(1),
      new TreeNode(-3),
      new TreeNode(3),
      new TreeNode(5),
      null,
      null,
      new TreeNode(-5),
    ],
  ];

  for (let i = 0; i < inputTrees.length; i++) {
    let tree = new BinaryTree(inputTrees[i]);
    console.log(i + 1 + ".\tBinary Tree:");
    displayTree(tree.root);
    console.log(
      "\n\t Maximum path sum:\t",
      maxPathSum(tree.root)
    );
    console.log("\n", "-".repeat(100));
  }
}

main();
