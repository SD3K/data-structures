var Queue = function() {
  this.tail = 0,
  this.head = 0,
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail++] = value;
  return this.tail;
};
Queue.prototype.dequeue = function() {
  if (this.tail > this.head) {
    var value = this.storage[this.head];
    delete this.storage[this.head++];
    return value;
  }
};
Queue.prototype.size = function() {
  return this.tail - this.head;
};
