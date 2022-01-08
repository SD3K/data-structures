class Stack {

  constructor() {
    this.index = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.index++] = value;
    return this.index;
  }
  pop() {
    if (this.index > 0) {
      var popped = this.storage[--this.index];
      delete this.storage[this.index];
    }
    return popped;
  }
  size() {
    return this.index;
  }
}