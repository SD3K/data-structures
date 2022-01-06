var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.tail = 0;
  instance.head = 0;
  instance.storage = {};

  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.tail++;
  },
  dequeue: function() {
    if (this.tail > this.head) {
      var value = this.storage[this.head];
      delete this.storage[this.head++];
      return value;
    }
  },
  size: function() {
    return this.tail - this.head;
  }
};
