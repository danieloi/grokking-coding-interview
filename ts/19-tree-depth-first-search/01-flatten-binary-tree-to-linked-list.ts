import {
  BinaryTree,
  displayTree,
  TreeNode,
} from "./utils";







function flattenTree(root) {
  if (root == null) return;

  // start from the root
  let current = root;

  //traverse the whole tree
  while (current != null) {
    if (current.left != null) {
      // there's a left child for the current node
      let deepestRight = current.left;
      // find the rightmost node of the left subtree
      // i.e. the rightmost leaf of the left subtree
      while (deepestRight.right != null) {
        deepestRight = deepestRight.right;
      }

      // remember the previous while loop made it so
      // there's nothing in deepestRight.right so we
      // can move the right subtree of the current
      // node there without overwriting anything
      deepestRight.right = current.right;
      // move the left subtree of the current node to
      // the right
      current.right = current.left;
      // remove the left subtree of the current node
      current.left = null;
    }

    // update the current node to the right
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
