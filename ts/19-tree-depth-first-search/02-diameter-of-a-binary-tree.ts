import { BinaryTree, displayTree, TreeNode } from "./utils";








































class Pair {
  diameter: number;
  height: number;
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}















































// Helper function to calculate diameter and height of
// a binary tree
function diameterHelper(node) {
  // If the node is null, return Pair with diameter
  // and height both as 0
  if (node == null) return new Pair(0, 0);

  // Recursively calculate the Pair for left and right
  // subtrees
  const lh = diameterHelper(node.left);
  const rh = diameterHelper(node.right);

  // Calculate height as the maximum height of left
  // and right subtrees + 1
  const height = Math.max(lh.height, rh.height) + 1;

  // Calculate diameter as the maximum of left
  // diameter, right diameter, and the sum of left and
  // right heights
  const diameter = Math.max(
    lh.diameter,
    rh.diameter,
    lh.height + rh.height
  );

  // Return the Pair for the current subtree
  return new Pair(diameter, height);
}
































// Function to find the diameter of a binary tree
function diameterOfBinaryTree(root) {
  // If the root is null, return 0 as the diameter
  if (root == null) return 0;

  // Calculate the Pair for the entire tree using the
  // helper function
  const pair = diameterHelper(root);

  // Return the diameter from the Pair
  return pair.diameter;
}









































// Driver code
function main() {
  const inputTrees = [
    [
      new TreeNode(2),
      new TreeNode(1),
      new TreeNode(4),
      new TreeNode(3),
      new TreeNode(5),
      new TreeNode(6),
      new TreeNode(7),
    ],
    [
      new TreeNode(1),
      new TreeNode(2),
      new TreeNode(3),
      new TreeNode(4),
      new TreeNode(5),
      new TreeNode(6),
      new TreeNode(7),
      new TreeNode(8),
      new TreeNode(9),
    ],
    [
      new TreeNode(45),
      new TreeNode(32),
      new TreeNode(23),
      new TreeNode(21),
      new TreeNode(19),
      new TreeNode(18),
      new TreeNode(1),
    ],
    [
      new TreeNode(5),
      new TreeNode(3),
      new TreeNode(4),
      new TreeNode(1),
      new TreeNode(2),
      new TreeNode(6),
      new TreeNode(7),
      new TreeNode(8),
      new TreeNode(9),
    ],
    [
      new TreeNode(9),
      new TreeNode(7),
      null,
      null,
      new TreeNode(1),
      new TreeNode(8),
      new TreeNode(10),
      null,
      new TreeNode(12),
    ],
  ];

  let y = 1;
  inputTrees.forEach((i) => {
    const tree = new BinaryTree(i);
    console.log(y + ".\tBinary tree:");
    displayTree(tree.root);
    console.log(
      "\tDiameter of the tree:",
      diameterOfBinaryTree(tree.root)
    );
    console.log("-".repeat(100));
    y++;
  });
}

main();
