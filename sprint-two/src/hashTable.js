var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0; //add items
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined){
    this._storage.set(i, []);
  }



  this._storage.each(function(miniArr, indexOfStor, storage){
    if (indexOfStor === i){
      var key = [];
      key[0] = k;
      key[1] = v;
      miniArr.push(key);
      this._count++;
            console.log(this._count)
      if (this._count > .75 * this._limit)
        this.resize( this._limit * 2)
    }
  }.bind(this));
 

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var subArr = this._storage.get(i);
  if (subArr === undefined){
    return null;
  }
  for (var x = 0; x < subArr.length; x++){
    if (subArr[x][0] === k){
      return subArr[x][1];
    }
  }
  return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var subArr = this._storage.get(i);
  if (subArr === undefined){
    return null;
  }

  for (var x = 0; x < subArr.length; x++){
    if (subArr[x][0] === k){
      subArr.splice(x,1);
      this._count--;
      console.log(this._count)
      if(this._count < .25 * this._limit){
        this.resize( this._limit/2 );
      }
    }
  }
};

HashTable.prototype.resize = function(newSize){
  var oldValues = this._storage;

  this._storage = makeLimitedArray(newSize);
  this._limit = newSize;
  this._count = 0;

  oldValues.each(function(bucket){
    if (bucket === undefined){ return; }
    for (var i = 0; i < bucket.length; i++){
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1])
    }
  }.bind(this));
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
