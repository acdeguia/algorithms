class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }

    return current;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    let newTail = current;

    while (current.nextNode) {
      newTail = current;
      current = current.nextNode;
    }

    this.tail = newTail;
    this.tail.nextNode = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let current = this.head;
    let result = "";

    while (current) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }

    result += "null";
    return result;
  }
}

const myList = new LinkedList();

myList.append(3);
myList.append(6);
myList.append(9);
myList.append(12);

console.log(myList.toString()); 

myList.prepend(1);

console.log(myList.toString()); 

console.log('size: ' + myList.size()); 

console.log(myList.at(2)); 

console.log(myList.pop()); 

console.log(`my list contains 7: `+ myList.contains(7)); 

console.log('position: ' + myList.find(3));
