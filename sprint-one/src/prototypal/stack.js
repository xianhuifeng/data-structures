var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.len = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  size: function(){
    return this.len;
  },

  push: function(value){
    this.storage[this.len] = value;
    this.len++;
  },

  pop: function(){
    if (this.len > 0){
      this.len--;
      var value = this.storage[this.len];
      delete this.storage[this.len];
      return value;
    }
  }

};


