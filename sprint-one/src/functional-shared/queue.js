var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var len = 0;
  var storage = {};
  var ind = 0;
  var counter = 0;
  _.extend(someInstance,  queueMethods);
  someInstance.len = len;
  someInstance.storage = storage;
  someInstance.ind = ind;
  someInstance.counter = counter;

  return someInstance;
};

var queueMethods = {
  size: function(){
    return this.len;
  },
  enqueue: function(value){
    this.storage[this.ind] = value;
    this.len++;
    this.ind++;
  },
  dequeue: function(){
    if (this.len > 0){
      this.len--;
      var value = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter++;
      return value;
    }
  }
};



