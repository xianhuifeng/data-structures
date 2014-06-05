var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  _.extend(someInstance,  queueMethods);
  someInstance.ind = 0;
  someInstance.counter = 0;
  someInstance.storage = {};


  return someInstance;
};

var queueMethods = {
  len: function(){
    return this.ind - this.counter;
  },

  size: function(){
    return this.len();
  },
  enqueue: function(value){
    this.storage[this.ind] = value;
    this.ind++;
  },
  dequeue: function(){
    if (this.len() > 0){
      var value = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter++;
      return value;
    }
  }
};

