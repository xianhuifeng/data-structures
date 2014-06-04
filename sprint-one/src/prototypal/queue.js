var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  var len = 0;
  var storage = {};
  var count = 0;
  var ind = 0;
  someInstance.len = len;
  someInstance.storage = storage;
  someInstance.count = count;
  someInstance.ind = ind;
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
    if(this.len > 0){
      this.len--;
      var value = this.storage[this.count];
      delete this.storage[this.count];
      this.count++;
      return value;
    }
  }
};
