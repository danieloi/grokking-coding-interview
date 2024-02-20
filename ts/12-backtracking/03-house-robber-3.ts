import { BinaryTree, TreeNode, displayTree } from "./utils";

function rob(root) {
  // Returns maximum value from the pair: [includeRoot,
  // excludeRoot]
  const result = heist(root);
  return Math.max(result[0], result[1]);
}

function heist(root) {
  // Empty tree case
  if (root === null) {
    return [0, 0];
  }
  // Recursively calculating the maximum amount that can
  // be robbed from the left subtree of the root
  const leftSubtree = heist(root.left);
  // Recursively calculating the maximum amount that can
  // be robbed from the right subtree of the root
  const rightSubtree = heist(root.right);
  // includeRoot contains the maximum amount of money
  // that can be robbed with the parent node included
  const includeRoot =
    root.data + leftSubtree[1] + rightSubtree[1];
  // excludeRoot contains the maximum amount of money
  // that can be robbed with the parent node excluded
  const excludeRoot =
    Math.max(leftSubtree[0], leftSubtree[1]) +
    Math.max(rightSubtree[0], rightSubtree[1]);

  return [includeRoot, excludeRoot];
}













function main() {
  // Create a list of list of TreeNode objects to
  // represent binary trees
  const listOfTrees = [
    [
      new TreeNode(10),
      new TreeNode(9),
      new TreeNode(20),
      new TreeNode(15),
      new TreeNode(7),
    ],
    [
      new TreeNode(7),
      new TreeNode(9),
      new TreeNode(10),
      new TreeNode(15),
      new TreeNode(20),
    ],
    [
      new TreeNode(8),
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
      new TreeNode(1),
      new TreeNode(3),
    ],
    [
      new TreeNode(9),
      new TreeNode(5),
      new TreeNode(7),
      new TreeNode(1),
      new TreeNode(3),
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

  // Create the binary trees using the BinaryTree class
  const inputTrees: BinaryTree[] = [];
  listOfTrees.forEach((listOfNodes) => {
    const tree = new BinaryTree(listOfNodes);
    inputTrees.push(tree);
  });

  // Print the input trees
  let x = 1;
  inputTrees.forEach((tree) => {
    console.log(`${x}. Input Tree:`);
    displayTree(tree.root);
    x += 1;
    console.log(
      "\tMaximum amount we can rob without getting caught:",
      rob(tree.root)
    );
    console.log("-".repeat(100));
  });
}

main();
