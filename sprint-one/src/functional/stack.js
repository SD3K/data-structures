var Stack = function() {
  var someInstance = {};
  var storage = {};
  var index = 0;

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
