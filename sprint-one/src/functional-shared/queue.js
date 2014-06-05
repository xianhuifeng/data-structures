var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  _.extend(someInstance,  queueMethods);
  someInstance.ind = 0;
  someInstance.counter = 0;
  someInstance.len = someInstance.ind - someInstance.counter;
  someInstance.storage = {};


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

function a(){
  a.b = 1 + 3;
}
console.log(a.b);
var a = makeQueue();
