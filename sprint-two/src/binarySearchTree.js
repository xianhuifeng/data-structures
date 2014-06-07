var makeBinarySearchTree = function(value){
  this.left = null;
  this.right = null;
  this.value = value
};

makeBinarySearchTree.prototype = {
  constructor: makeBinarySearchTree,

  insert: function(value){
    var childnode = new makeBinarySearchTree(value);

    var addNode = function(node){
      if(node.left === null){
        if(value < node.value){
          node.left = childnode;
        }
      }
      if(node.right === null){
        if(value > node.value){
          node.right = childnode;
        }
      }

      if(node.left && value < node.value){
        addNode(node.left);
      } else if(node.right && value > node.value){
        addNode(node.right);
      }

    };
    addNode(this);
  },
  contains: function(value){

    var findNode = function(node){
      if(node.value === value){
        return true;
      }else if(node.left && value < node.value){
        return findNode(node.left);
      }else if(node.right && value > node.value){
        return findNode(node.right);
      }
      return false;
    };
    return findNode(this);
  },
  depthFirstLog: function(callback){
    //
    var runOnNode = function(node){
      callback(node.value);
      if(node.left){
        runOnNode(node.left);
      }
      if(node.right){
        runOnNode(node.right);
      }
    };
    runOnNode(this);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
