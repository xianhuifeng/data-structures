var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.len = len;
  someInstance.storage = storage;

  return someInstance;
};

var stackMethods = {
  size: function(){
    return this.len;

  }
};


