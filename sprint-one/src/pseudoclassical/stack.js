var Stack = function() {
  this.index = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.index++] = value;
  return this.index;
};
Stack.prototype.pop = function(value) {
  if (this.index > 0) {
    var popped = this.storage[--this.index];
    delete this.storage[this.index];
  }
  return popped;
};
Stack.prototype.size = function(value) {
  return this.index;
};
