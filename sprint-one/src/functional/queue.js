var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var index = 0;
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[index] = value;
    size++;
    index++;
  };

  someInstance.dequeue = function(){
    if (size > 0){
      size--;
      var value = storage[counter];
      delete storage[counter];
      counter++;
      return value;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
