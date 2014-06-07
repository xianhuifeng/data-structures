var Graph = function(){
  this.storage = [];
};

var GraphNode = function(value){
  //id, value, {list of connections}
  this.value = value;
  this.connections = [];
};

Graph.prototype.findNode = function(target){
  //go thro storage and find the value inside obj and return it
  for (var i = 0; i < this.storage.length; i++) {
    if(this.storage[i].value === target){
      return i;
    }
  }
  return -1;
};

Graph.prototype.addNode = function(newNode, toNode){

  if(arguments[1] === undefined){
    if(this.storage.length === 0){
      var node = new GraphNode(newNode);
      this.storage.push(node);
      console.log(this.storage)
    }else if(this.storage.length === 1){
      var node = new GraphNode(newNode);
      this.storage.push(node);
      this.addEdge(newNode, this.storage[0].value);
      this.addEdge(this.storage[0].value, newNode);
      //debugger
      console.log(this.storage);
    }
  }else{
    var node = new GraphNode(newNode);
    this.storage.push(node);
    this.addEdge(newNode, toNode);
    this.addEdge(toNode, newNode);
    //make newNode, connect to toNode



  }

};

Graph.prototype.contains = function(node){

  for (var key in this.storage){
    if (this.storage[key].value === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for (var key in this.storage){
    if (this.storage[key].value === node){
      delete this.storage[key];
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
    var fromIndex = this.findNode(fromNode);
    var firstNode = this.storage[fromIndex];
    if (fromIndex !== -1){
      var connections = firstNode.connections;
      for (var i in connections){
        if(connections[i].value === toNode){
          return true;
        }
      }
    }

  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //make pointer from fromNode to toNode
  //make pointer from toN to fromN

  var indexOfFrom = this.findNode(fromNode);
  var indexOfTo = this.findNode(toNode);
  var from = this.storage[indexOfFrom];
  //debugger
  from.connections.push(this.storage[indexOfTo]);

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var indexOfFrom = this.findNode(fromNode);
  var indexOfTo = this.findNode(toNode);
  var fromConnections = this.storage[indexOfFrom].connections;
  var toConnections = this.storage[indexOfTo].connections;

  var deletelink = function(start, end){
    for(var i = 0; i< start.length; i++){
      if(start[i].value === end){
        start.splice(i,1);
      }
    }
  };
  deletelink(toConnections, fromNode);
  deletelink(fromConnections, toNode);

  if (this.storage.length === 2 && indexOfFrom !== -1 &&
    indexOfTo !== -1){
    this.storage.pop();
    this.storage.pop();
  }
  if(fromConnections.length === 0){
    this.storage.splice(indexOfFrom, 1);
  }
  indexOfTo = this.findNode(toNode);
  if(toConnections.length === 0 && fromConnections.length > 0){
    this.storage.splice(indexOfTo, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
