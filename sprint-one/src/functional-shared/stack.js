var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    index: 0,
    storage: {}
  };

  return _.extend(instance, stackMethods);
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
