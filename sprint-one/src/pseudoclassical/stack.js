var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.len = 0;
  this.storage = {};

};

Stack.prototype.size = function(){
  return this.len;
};

Stack.prototype.push = function(value){
  this.storage[this.len] = value;
  this.len++;
};

Stack.prototype.pop = function(){
  if(this.len > 0){
    this.len--;
    var value = this.storage[this.len];
    delete this.storage[this.len];
    return value;
  }
};

var megaStack = {};
for (var i = 0; i < 1000000; i++){
  megaStack[i] = new Stack();
}
