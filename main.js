// LinList
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.data = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = new Node(data);
    if (this.tail) {
      this.tail.next = node;
    }
    if (!this.head) {
      this.head = node;
    }
    this.tail = node;
  }
}

const list = new LinkedList();


list.append('Hello')
list.append('Akbar')

console.log(list);