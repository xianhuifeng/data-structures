var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined){
    this._storage.set(i, []);
  }
  this._storage.each(function(miniArr, indexOfStor, storage){
    if (indexOfStor === i){
      var key = {};
      key[k] = v;
      miniArr.push(key);
    }
  });

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var subArr = this._storage.get(i);
  for (var x = 0; x < subArr.length; x++){
    if (subArr[x][k]){
      return subArr[x][k];
    }
  }
  return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var subArr = this._storage.get(i);
  for (var x = 0; x < subArr.length; x++){
    if (subArr[x][k]){
      subArr.splice(x,1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
