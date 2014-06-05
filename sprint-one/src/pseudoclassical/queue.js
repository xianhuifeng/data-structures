var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.ind = 0;
  this.counter = 0;
};

Queue.prototype.size = function(){
  return this.ind - this.counter;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.ind] = value;
  this.ind++;
};

Queue.prototype.dequeue = function(){
  if(this.size() > 0){
    var value = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter++;
    return value;
  }
};
