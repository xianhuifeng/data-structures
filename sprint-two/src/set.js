var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //add string to set if not in set
  if(!this._storage[item]){
    this._storage[item] = true;
  }
};

setPrototype.contains = function(item){
  //return true if string is in set
  if (this._storage[item]){
    return true;
  }
  return false;
};

setPrototype.remove = function(item){
  //take a string and remove it from the set (if present
  if(this._storage[item]){
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
