class Node {
  value: number;
  next: Node | null;
  constructor(value: number, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let temp: Node | null = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}

function reorder(head: Node | null) {
  if (head === null || head.next === null) {
    return;
  }

  // find middle of the LinkedList
  let slow: Node | null = head,
    fast: Node | null = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  // slow is now pointing to the middle node
  let headSecondHalf: Node | null = reverse(slow); // reverse the second half
  let headFirstHalf: Node | null = head;

  // rearrange to produce the LinkedList in the required order
  while (headFirstHalf !== null && headSecondHalf !== null) {
    let temp: Node | null = headFirstHalf.next;
    headFirstHalf.next = headSecondHalf;
    headFirstHalf = temp;

    temp = headSecondHalf.next;
    headSecondHalf.next = headFirstHalf;
    headSecondHalf = temp;
  }
  // set the next of the last node to 'null'
  if (headFirstHalf !== null) {
    headFirstHalf.next = null;
  }
}

function reverse(head: Node | null) {
  let prev: Node | null = null;
  while (head !== null) {
    let next: Node | null = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

var head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
reorder(head);
head?.print_list();

export {};
