var Stack = function() {
  var someInstance = {};
  var index = 0;
  var storage = {};

  someInstance.push = function(value) {
    storage[index++] = value;
    return index;
  };

  someInstance.pop = function() {
    if (index > 0) {
      var popped = storage[--index];
      delete storage[index];
    }
    return popped;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
