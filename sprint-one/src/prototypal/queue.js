var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.ind = 0;
  return someInstance;
};

var queueMethods = {
  size: function(){
    return this.ind - this.count;
  },

  enqueue: function(value){
    this.storage[this.ind] = value;
    this.ind++;
  },

  dequeue: function(){
    if(this.size() > 0){
      var value = this.storage[this.count];
      delete this.storage[this.count];
      this.count++;
      return value;
    }
  }
};
