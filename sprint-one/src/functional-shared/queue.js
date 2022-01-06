var Queue = function() {
  var instance = {
    tail: 0,
    head: 0,
    storage: {}
  };

  return _.extend(instance, queueMethods);
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail++] = value;
    return this.tail;
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
