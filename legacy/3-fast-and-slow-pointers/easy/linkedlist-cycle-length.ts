class Node {
  value: number;
  next: Node | null;
  constructor(value: number, next = null) {
    this.value = value;
    this.next = next;
  }
}

function find_cycle_length(head: Node) {
  let slow: Node | null = head,
    fast: Node | null = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next!;
    if (slow === fast) {
      // found the cycle
      return calculate_cycle_length(slow);
    }
  }
  return 0;
}

function calculate_cycle_length(slow: Node) {
  let current: Node | null = slow,
    cycle_length = 0;
  while (true) {
    current = current.next!;
    cycle_length += 1;
    if (current === slow) {
      break;
    }
  }
  return cycle_length;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

export {};
