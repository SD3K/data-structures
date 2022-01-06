var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    head: 0,
    tail: 0,
    storage: {}
  };

  return _.extend(instance, queueMethods);
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
