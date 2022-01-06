var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.index = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.index++] = value;
    return this.index;
  },
  pop: function() {
    if (this.index > 0) {
      var popped = this.storage[--this.index];
      delete this.storage[this.index];
    }
    return popped;
  },
  size: function() {
    return this.index;
  }
};
