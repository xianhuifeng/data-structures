var makeStack = function() {
  var someInstance = {};
  someInstance = _.extend(someInstance, stackMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  //console.log(someInstance);
  someInstance.len = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  pop: function(){
    if(this.len > 0){
      this.len--;
      var value = this.storage[this.len];
      delete this.storage[this.len];
      return value;
    }
  },

  push: function(value){
    this.storage[this.len] = value;
    this.len++;
  },

  size: function(){
    return this.len;
  }

};
