import { BinaryTree, displayTree, TreeNode } from "./01-utils";

function flattenTree(root) {
  if (root == null) return;

  let current = root;
  while (current != null) {
    if (current.left != null) {
      let last = current.left;
      while (last.right != null) {
        last = last.right;
      }

      last.right = current.right;
      current.right = current.left;
      current.left = null;
    }
    current = current.right;
  }
  return root;
}






























function main() {
  // Create a list of list of TreeNode objects to
  // represent binary trees
  const listOfTrees = [
    [
      new TreeNode(3),
      new TreeNode(2),
      new TreeNode(17),
      new TreeNode(1),
      new TreeNode(4),
      new TreeNode(19),
      new TreeNode(5),
    ],
    [
      new TreeNode(7),
      new TreeNode(6),
      new TreeNode(5),
      new TreeNode(4),
      new TreeNode(3),
      new TreeNode(2),
      null,
      new TreeNode(1),
    ],
    [
      new TreeNode(5),
      new TreeNode(4),
      new TreeNode(6),
      new TreeNode(3),
      new TreeNode(2),
      new TreeNode(7),
      new TreeNode(8),
      new TreeNode(1),
      new TreeNode(9),
    ],
    [
      new TreeNode(5),
      new TreeNode(2),
      new TreeNode(1),
      new TreeNode(6),
      new TreeNode(10),
      new TreeNode(11),
      new TreeNode(44),
    ],
    [
      new TreeNode(1),
      new TreeNode(2),
      new TreeNode(5),
      new TreeNode(3),
      new TreeNode(4),
      new TreeNode(6),
    ],
    [
      new TreeNode(-1),
      new TreeNode(-2),
      null,
      new TreeNode(-5),
      new TreeNode(1),
      new TreeNode(2),
      new TreeNode(6),
    ],
  ];

  // Create the binary trees using the BinaryTree class
  const inputTrees: BinaryTree[] = [];
  listOfTrees.forEach((listOfNodes) => {
    const tree = new BinaryTree(listOfNodes as TreeNode[]);
    inputTrees.push(tree);
  });

  // Print the input trees
  let x = 1;
  inputTrees.forEach((tree) => {
    console.log(`${x}.\tInput Tree:`);
    displayTree(tree.root);
    console.log("\n\tFlattened Tree:");
    displayTree(flattenTree(tree.root));
    x += 1;
    console.log("-".repeat(100));
  });
}

main();
