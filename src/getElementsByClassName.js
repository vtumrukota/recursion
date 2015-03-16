// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var nodeList = [];
  var nodes = document.body.childNodes; 

  var classMatch = function(currentNode){
    if (currentNode.classList) {
      for(var i=0; i<currentNode.classList.length; i++){
        if(currentNode.classList[i] === className){
          nodeList.push(currentNode);
          break;
        }
      }  
    }
    for(var i=0; i<currentNode.childNodes.length; i++){
      classMatch(currentNode.childNodes[i]);
    }
  }

  classMatch(document.body)

  return nodeList;
};

getElementsByClassName('example');
