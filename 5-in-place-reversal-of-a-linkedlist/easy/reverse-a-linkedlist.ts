/**
 * To reverse a LinkedList, we need to reverse one node at a
 * time. We will start with a variable current which will
 * initially point to the head of the LinkedList and a
 * variable previous which will point to the previous node
 * that we have processed; initially previous will point to
 * null.
 *
 * In a stepwise manner, we will reverse the current node by
 * pointing it to the previous before moving on to the next
 * node. Also, we will update the previous to always point
 * to the previous node that we have processed. Here is the
 */

class Node {
  value: number;
  next: Node | null;
  constructor(value: number, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let temp: Node | null = this;
    let listStr = "";
    while (temp !== null) {
      console.log(temp.value);

      listStr.concat(`${temp.value}`);
      temp = temp.next;
    }
    console.log(listStr);
  }
}

function reverse(head: Node) {
  let current: Node | null = head,
    previous: Node | null = null;
  while (current !== null) {
    let next: Node | null = current.next; // temporarily store the next node
    current.next = previous; // reverse the current node
    previous = current; // before we move to the next node, point previous to the current node
    current = next; // move on the next node
  }
  return previous;
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log("Nodes of original LinkedList are: ");

head.print_list();
let result = reverse(head);
console.log("Nodes of original LinkedList are: ");

result?.print_list();

export {};
