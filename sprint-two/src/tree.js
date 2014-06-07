var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = makeTree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target){
  var search = function(node){
    if(node.value === target){
      return true;
    }else if(Array.isArray(node.children)){
      for(var i = 0; i< node.children.length; i++){
        if(search(node.children[i])){
          return true;
        }
      }
    }
    return false;
  };
  return search(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
