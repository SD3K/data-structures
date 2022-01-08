class Queue {

  constructor() {
    this.tail = 0,
    this.head = 0,
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.tail++] = value;
    return this.tail;
  }
  dequeue() {
    if (this.tail > this.head) {
      var value = this.storage[this.head];
      delete this.storage[this.head++];
      return value;
    }
  }
  size() {
    return this.tail - this.head;
  }
}
