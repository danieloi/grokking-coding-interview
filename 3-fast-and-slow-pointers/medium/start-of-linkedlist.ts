class Node {
  value: number;
  next: Node | null;
  constructor(value: number, next = null) {
    this.value = value;
    this.next = next;
  }
}

function find_cycle_start(head: Node) {
  let cycle_length = 0;
  // find the LinkedList cycle
  let slow: Node | null = head,
    fast: Node | null = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next!;
    if (slow === fast) {
      // found the cycle
      cycle_length = calculate_cycle_length(slow);
      break;
    }
  }
  return find_start(head, cycle_length);
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

function find_start(head: Node, cycle_length: number) {
  let pointer1: Node | null = head,
    pointer2: Node | null = head;
  // move pointer2 ahead 'cycle_length' nodes
  while (cycle_length > 0) {
    pointer2 = pointer2.next!;
    cycle_length -= 1;
  }
  // increment both pointers until they meet at the start of the cycle
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next!;
    pointer2 = pointer2.next!;
  }

  return pointer1;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

export {};
