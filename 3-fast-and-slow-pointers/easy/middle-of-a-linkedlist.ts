class Node {
  value: number;
  next: Node | null;
  constructor(value: number, next = null) {
    this.value = value;
    this.next = next;
  }
}

function find_middle_of_linked_list(head: Node) {
  let slow: Node | null = head,
    fast: Node | null = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next!;
    fast = fast.next.next;
  }
  return slow;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next = new Node(6);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next.next = new Node(7);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

export {};
