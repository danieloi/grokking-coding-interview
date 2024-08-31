// Initializing our marker as the max possible int

import {
  BinaryTree,
  displayTree,
  printArray,
  TreeNode,
} from "./utils";








































// value
let MARKER = "M",
  m = 1;

function serializeRec(node, stream) {
  if (node == null) {
    stream.push(MARKER + m);
    m++;
    return stream;
  }

  stream.push(node.data);

  stream = serializeRec(node.left, stream);

  return serializeRec(node.right, stream);
}





























// Function to serialize tree into list of integer.
function serialize(root) {
  let stream = [];
  stream = serializeRec(root, stream);
  return stream;
}

































// Function to deserialize integer list into a binary
// tree.
function deserialize_helper(stream) {
  let val = stream.pop();

  if (typeof val == "string" && val[0] == MARKER)
    return null;

  let node = new TreeNode(val);

  node.left = deserialize_helper(stream);
  node.right = deserialize_helper(stream);

  return node;
}






























// Function to deserialize integer list into a binary
// tree.
function deserialize(stream) {
  stream.reverse();
  let node = deserialize_helper(stream);
  return node;
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
      new TreeNode(350),
    ],
    [
      new TreeNode(100),
      new TreeNode(200),
      new TreeNode(75),
      new TreeNode(50),
      new TreeNode(25),
      new TreeNode(350),
    ],
    [
      new TreeNode(200),
      new TreeNode(350),
      new TreeNode(100),
      new TreeNode(75),
      new TreeNode(50),
      new TreeNode(200),
      new TreeNode(25),
    ],
    [
      new TreeNode(100),
      new TreeNode(50),
      new TreeNode(200),
      new TreeNode(25),
      new TreeNode(75),
      new TreeNode(350),
    ],
    [
      new TreeNode(25),
      new TreeNode(50),
      new TreeNode(75),
      new TreeNode(100),
      new TreeNode(200),
      new TreeNode(350),
    ],
    [
      new TreeNode(350),
      new TreeNode(75),
      new TreeNode(25),
      new TreeNode(200),
      new TreeNode(50),
      new TreeNode(100),
    ],
    [
      new TreeNode(1),
      null,
      new TreeNode(2),
      null,
      new TreeNode(3),
      null,
      new TreeNode(4),
      null,
      new TreeNode(5),
    ],
    [],
  ];

  const inputTrees: BinaryTree[] = [];
  listOfTrees.forEach((listOfNodes) => {
    const tree = new BinaryTree(listOfNodes);
    inputTrees.push(tree);
  });

  for (let i = 0; i < inputTrees.length; i++) {
    console.log(i + 1 + ".\tBinary tree:");
    displayTree(inputTrees[i].root);
    console.log(
      `\n\tMarker used for NULL nodes in serialization/deserialization: ${MARKER}*`
    );

    // Serialization
    let ostream = serialize(inputTrees[i].root);
    console.log("\n\tSerialized integer list:");
    console.log(`\t`, printArray(ostream));

    // Deserialization
    let deserializedRoot = deserialize(ostream);
    console.log("\n\tDeserialized binary tree:");
    displayTree(deserializedRoot);
    console.log("-".repeat(100));
    m = 1;
  }
}

main();
