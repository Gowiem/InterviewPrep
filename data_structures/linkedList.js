/* 
* @Author: Gowiem
* @Date:   2015-04-09
*/

var Prep = Prep || {};

Prep.LinkedList = function(initData) {

  var self = new Node(null),
      size = 0;

  var Node = function(head, data) {
    var self = {};
    self.head = head;
    self.data = data;
  }

  var add = function(data) {
    var currentNode = self;

    while(currentNode.head !== null) {
      currentNode = currentNode.head;
    }

    currentNode.head = new Node(null, data);

    size++;
  };

  var addAtIndex = function(data, index) {

  };

  self.add = add;

  return self;
}