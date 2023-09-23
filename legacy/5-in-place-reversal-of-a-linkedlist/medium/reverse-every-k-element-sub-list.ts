class Node {
  value: number;
  next: Node | null;
  constructor(value: number, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let result = "";
    let temp: Node | null = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
}

const reverse_every_k_elements = function (head: Node, k: number) {
  if (k <= 1 || head === null) {
    return head;
  }
  // after skipping 'p-1' nodes, current will point to 'p'th node
  let current = head,
    previous = null;
  while (true) {
    const last_node_of_previous_part = previous;
    // after reversing the LinkedList 'current' will become the last node of the sub-list
    const last_node_of_sub_list = current;
    let next = null; // will be used to temporarily store the next node
    let i = 0;
    while (current !== null && i < k) {
      // reverse 'k' nodes
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i += 1;
    }

    // connect with the previous part
    if (last_node_of_previous_part !== null) {
      last_node_of_previous_part.next = previous;
    } else {
      head = previous;
    }
    // connect with the next part
    last_node_of_sub_list.next = current;

    if (current === null) {
      break;
    }
    previous = last_node_of_sub_list;
  }
  return head;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

process.stdout.write("Nodes of original LinkedList are: ");
head.print_list();
const result = reverse_every_k_elements(head, 3);
process.stdout.write("Nodes of reversed LinkedList are: ");
result.print_list();
export {};
