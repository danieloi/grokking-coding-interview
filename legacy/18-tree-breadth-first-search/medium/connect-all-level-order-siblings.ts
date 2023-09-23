const Deque = require("collections/deque"); //http://www.collectionsjs.com

type TreeNodeChild = TreeNode | null;

class TreeNode {
  val: number;
  left: TreeNodeChild;
  right: TreeNodeChild;
  next: TreeNodeChild;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // tree traversal using 'next' pointer
  print_tree = () => {
    process.stdout.write("Traversal using 'next' pointer: ");
    let current: TreeNodeChild = this;
    while (current !== null) {
      process.stdout.write(`${current.val} `);
      current = current.next;
    }
  };
}

function connect_all_siblings(root: TreeNodeChild) {
  if (root === null) {
    return;
  }

  const queue = new Deque();
  queue.push(root);
  let currentNode = null,
    previousNode = null;
  while (queue.length > 0) {
    currentNode = queue.shift();
    if (previousNode !== null) {
      previousNode.next = currentNode;
    }
    previousNode = currentNode;
    // insert the children of current node in the queue
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_all_siblings(root);
root.print_tree();

export {};
