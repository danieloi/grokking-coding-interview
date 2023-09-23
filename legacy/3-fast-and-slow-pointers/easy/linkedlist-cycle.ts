class Node {
  value: number;
  next?: Node;
  constructor(value: number, next?: Node) {
    this.value = value;
    this.next = next;
  }
}

function has_cycle(head: Node) {
  let slow: Node | undefined = head,
    fast: Node | undefined = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next!;
    if (slow === fast) {
      return true; // found the cycle
    }
  }
  return false;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

export {};
