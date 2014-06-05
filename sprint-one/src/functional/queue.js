var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function(){
    if ((index - counter) > 0){
      var value = storage[counter];
      delete storage[counter];
      counter++;
      return value;
    }
  };

  someInstance.size = function(){
    return index - counter;
  };

  return someInstance;
};
