var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var tail = makeNode(value);
    if(!list.head){
      list.tail = tail;
      list.head = tail;
    }else{
    //else
      list.head.next = tail;
      list.tail = tail;
    }

      //store previous tail
      //new tail: list.tail = makeNode(value)
      //previous tail should point to new tail
  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target){
    var search = function(node){
      //debugger
      if (node.value === target){
        return true;
      } else if (node.next === null){
        return false;
      } else {
        return search(node.next);
      }

    };
    return search(list.head);

  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

