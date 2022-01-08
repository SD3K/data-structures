var Queue = function() {
  var someInstance = {};
  var tail = 0;
  var head = 0;
  var storage = {};

  someInstance.enqueue = function(value) {
    storage[tail++] = value;
    return tail;
  };

  someInstance.dequeue = function() {
    if (tail > head) {
      var value = storage[head];
      delete storage[head++];
    }
    return value;
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
