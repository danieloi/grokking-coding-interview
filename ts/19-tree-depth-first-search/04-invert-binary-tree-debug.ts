import { BinaryTree, displayTree, TreeNode } from "./utils";

// Global variables to support step-by-step printing
var change = 0;
var masterRoot: TreeNode | null = null;

// Function to mirror binary tree
function mirrorBinaryTree(root) {
  // Base case: end recursive call if current node is
  // null
  if (root == null) return null;

  // we will do a post-order traversal of the binary
  // tree.
  if (root.left != null) mirrorBinaryTree(root.left);
  if (root.right != null) mirrorBinaryTree(root.right);

  // Let's swap the left and right nodes at current
  // level.
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Only to demonstrate step-by-step operation of the
  // solution
  if (masterRoot && (root.left || root.right)) {
    change++;
    console.log(
      `\n\tChange ${change}, at node ${root.data}: `
    );
    displayTree(masterRoot);
  }
  return root;
}





























// Driver code
function main() {
  let listOfTrees = [
    [
      new TreeNode(100),
      new TreeNode(50),
      new TreeNode(200),
      new TreeNode(25),
      new TreeNode(75),
      new TreeNode(125),
      new TreeNode(350),
    ],
    [
      new TreeNode(100),
      new TreeNode(50),
      new TreeNode(200),
      new TreeNode(25),
      new TreeNode(110),
      new TreeNode(125),
      new TreeNode(350),
    ],
    [
      new TreeNode(100),
      new TreeNode(50),
      new TreeNode(200),
      new TreeNode(25),
      new TreeNode(75),
      new TreeNode(90),
      new TreeNode(350),
    ],
    [
      new TreeNode(25),
      new TreeNode(50),
      new TreeNode(75),
      new TreeNode(100),
      new TreeNode(125),
      new TreeNode(350),
    ],
    [
      new TreeNode(350),
      new TreeNode(125),
      new TreeNode(100),
      new TreeNode(75),
      new TreeNode(50),
      new TreeNode(25),
    ],
    [new TreeNode(100)],
    [
      new TreeNode(1),
      new TreeNode(2),
      null,
      new TreeNode(3),
      null,
      new TreeNode(4),
    ],
    [
      new TreeNode(1),
      new TreeNode(2),
      new TreeNode(3),
      new TreeNode(4),
      null,
      null,
      new TreeNode(5),
    ],
    [],
  ];

  // Create the binary trees using the BinaryTree
  // class
  const inputTrees: BinaryTree[] = [];
  listOfTrees.forEach((listOfNodes) => {
    const tree = new BinaryTree(listOfNodes);
    inputTrees.push(tree);
  });

  for (let i = 0; i < inputTrees.length; i++) {
    console.log(i + 1 + ".\tBinary tree:");
    displayTree(inputTrees[i].root);
    change = 0;
    masterRoot = inputTrees[i].root!;
    let result = mirrorBinaryTree(inputTrees[i].root);
    console.log("\n\tMirrored binary tree:");
    displayTree(result);
    console.log("-".repeat(100));
  }
}

main();
