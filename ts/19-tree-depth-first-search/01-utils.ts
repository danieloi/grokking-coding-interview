export class TreeNode {
  data: number;
  left: null | TreeNode;
  right: null | TreeNode;
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  root: TreeNode | null;
  constructor(ListOfNodes: TreeNode[]) {
    this.root = this.createBinaryTree(ListOfNodes);
  }

  createBinaryTree(ListOfNodes: TreeNode[]) {
    if (ListOfNodes.length === 0) {
      return null;
    }

    // Create the root node of the binary tree
    const root = new TreeNode(ListOfNodes[0].data);

    // Create a queue and add the root node to it
    const queue: TreeNode[] = [root];

    // Start iterating over the list of ListOfNodes
    // starting from the second node
    let i = 1;
    while (i < ListOfNodes.length) {
      // Get the next node from the queue
      const curr = queue.shift()!;

      // If the node is not null, create a new TreeNode
      // object for its left child, set it as the left
      // child of the current node, and add it to the
      // queue
      if (ListOfNodes[i] !== null) {
        curr.left = new TreeNode(ListOfNodes[i].data);
        queue.push(curr.left);
      }

      i += 1;

      // If there are more ListOfNodes in the list and
      // the next node is not null, create a new
      // TreeNode object for its right child, set it as
      // the right child of the current node, and add it
      // to the queue
      if (
        i < ListOfNodes.length &&
        ListOfNodes[i] !== null
      ) {
        curr.right = new TreeNode(ListOfNodes[i].data);
        queue.push(curr.right);
      }

      i += 1;
    }

    // Return the root of the binary tree
    return root;
  }
}

function height(node) {
  if (node == null) return 0;
  else
    return (
      1 + Math.max(height(node.left), height(node.right))
    );
}

function drawNode(
  output,
  linkAbove,
  node,
  level,
  p,
  linkChar
) {
  if (node == null) return;

  let h = output.length,
    SP = " ";

  if (p < 0) {
    output.forEach((s) => {
      if (s) {
        s = " ".repeat(-1 * p) + s;
      }
    });
    linkAbove.forEach((s) => {
      if (s) {
        s = " ".repeat(-1 * p) + s;
      }
    });
  }
  if (level < h - 1) {
    p = Math.max(p, output[level + 1].length);
  }
  if (level > 0) {
    p = Math.max(p, output[level - 1].length);
  }
  p = Math.max(p, output[level].length);

  // Fill in to left
  if (node.left != null) {
    let leftData = SP + node.left.data + SP;
    drawNode(
      output,
      linkAbove,
      node.left,
      level + 1,
      p - leftData.length,
      "L"
    );
    p = Math.max(p, output[level + 1].length);
  }

  // Enter this data
  let space = p - output[level].length;
  if (space > 0) {
    output[level] += " ".repeat(space);
  }
  let nodeData = SP + node.data + SP;
  output[level] += nodeData;

  // Add vertical link above
  space = p + SP.length - linkAbove[level].length;
  if (space > 0) {
    linkAbove[level] += " ".repeat(space);
  }
  linkAbove[level] += linkChar;

  // Fill in to right
  if (node.right) {
    drawNode(
      output,
      linkAbove,
      node.right,
      level + 1,
      output[level].length,
      "R"
    );
  }
}

function drawNodeWithMarkers(
  output,
  linkAbove,
  node,
  level,
  p,
  linkChar
) {
  if (node == null) return;

  let h = output.length,
    SP = " ";

  if (p < 0) {
    output.forEach((s) => {
      if (s) {
        s = " ".repeat(-1 * p) + s;
      }
    });
    linkAbove.forEach((s) => {
      if (s) {
        s = " ".repeat(-1 * p) + s;
      }
    });
  }
  if (level < h - 1)
    p = Math.max(p, output[level + 1].length);
  if (level > 0) p = Math.max(p, output[level - 1].length);
  p = Math.max(p, output[level].length);

  // Fill in to left
  if (node.left != null) {
    let leftData = SP + node.left.printData + SP;
    drawNodeWithMarkers(
      output,
      linkAbove,
      node.left,
      level + 1,
      p - leftData.length,
      "L"
    );
    p = Math.max(p, output[level + 1].length);
  }

  // Enter this data
  let space = p - output[level].length;
  if (space > 0) {
    output[level] += " ".repeat(space);
  }
  let nodeData = SP + node.printData + SP;
  output[level] += nodeData;

  // Add vertical link above
  space = p + SP.length - linkAbove[level].length;
  if (space > 0) linkAbove[level] += " ".repeat(space);
  linkAbove[level] += linkChar;

  // Fill in to right
  if (node.right != null) {
    drawNodeWithMarkers(
      output,
      linkAbove,
      node.right,
      level + 1,
      output[level].length,
      "R"
    );
  }
}

function displayTreeWithMarker(root) {
  if (root == null) console.log("\tNone");

  let h = height(root),
    output: string[] = [],
    linkAbove: string[] = [];

  output = Array(h).fill("");
  linkAbove = Array(h).fill("");

  drawNodeWithMarkers(output, linkAbove, root, 0, 5, " ");

  // Create link lines
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < linkAbove[i].length; j++) {
      if (linkAbove[i][j] != " ") {
        let size = output[i - 1].length;
        if (size < j + 1) {
          output[i - 1] += " ".repeat(j + 1 - size);
        }
        let jj = j;
        if (linkAbove[i][j] == "L") {
          while (output[i - 1][jj] == " ") jj++;
          for (let k = j + 1; k < jj - 1; k++) {
            let str1 = output[i - 1],
              list1 = str1.split("");
            list1[k] = "_";
            output[i - 1] = list1.join("");
          }
        } else if (linkAbove[i][j] == "R") {
          while (output[i - 1][jj] == " ") jj -= 1;

          for (let k = j - 1; k > jj + 1; k--) {
            let temp = output[i - 1];
            let list1 = temp.split("");
            list1[k] = "_";
            output[i - 1] = list1.join("");
            k = k - 1;
          }
        }
        let str1 = linkAbove[i];
        let list1 = str1.split("");
        list1[j] = "|";
        linkAbove[i] = list1.join("");
      }
    }
  }

  // output
  for (let i = 0; i < h; i++) {
    if (i) {
      console.log("\t", linkAbove[i]);
    }
    console.log("\t", output[i]);
  }
}

export function displayTree(root: TreeNode | null) {
  if (root == null) console.log("\tNone");
  const h = height(root);
  let output: string[] = [];
  let linkAbove: string[] = [];

  output = Array(h).fill("");
  linkAbove = Array(h).fill("");

  drawNode(output, linkAbove, root, 0, 5, " ");

  // Create link lines
  for (var i = 0; i < h; i++) {
    for (var j = 0; j < linkAbove[i].length; j++) {
      if (linkAbove[i][j] != " ") {
        var size = output[i - 1].length;
        if (size < j + 1)
          output[i - 1] += " ".repeat(j + 1 - size);
        let jj = j;
        if (linkAbove[i][j] == "L") {
          while (output[i - 1][jj] == " ") {
            jj += 1;
          }
          for (var k = j + 1; k < jj - 1; k++) {
            var _str = output[i - 1];
            var _list = _str.split("");
            _list[k] = "_";
            output[i - 1] = _list.join("");
          }
        } else if (linkAbove[i][j] == "R") {
          while (output[i - 1][jj] == " ") {
            jj -= 1;
          }
          for (var _k = j - 1; _k > jj + 1; _k--) {
            var temp = output[i - 1];
            var _list2 = temp.split("");
            _list2[_k] = "_";
            output[i - 1] = _list2.join("");
            _k = _k - 1;
          }
        }

        var str1 = linkAbove[i];
        var list1 = str1.split("");
        list1[j] = "|";
        linkAbove[i] = list1.join("");
      }
    }
  }

  // output
  for (var _i = 0; _i < h; _i++) {
    if (_i) {
      console.log("\t", linkAbove[_i]);
    }
    console.log("\t", output[_i]);
  }
}

// print all project function definitions and calls
// including the hidden ones
const fs = require("fs");

function printModuleFiles(
  module,
  visitedModules = new Set(),
  depth = 0,
  maxDepth = 3
) {
  if (visitedModules.has(module) || depth > maxDepth)
    return;
  visitedModules.add(module);

  // Print the content of the module's file
  console.log(`Contents of ${module.filename}:`);
  try {
    const content = fs.readFileSync(
      module.filename,
      "utf8"
    );
    console.log(content);
  } catch (err) {
    console.error(
      `Error reading file ${module.filename}: ${err}`
    );
  }

  // Recurse for each child module, increasing the depth
  module.children.forEach((childModule) => {
    printModuleFiles(
      childModule,
      visitedModules,
      depth + 1,
      maxDepth
    );
  });
}

// Start printing from the main module with a maximum depth
// printModuleFiles(require.main);
