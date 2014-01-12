/* 
* @Author: Gowiem
* @Date:   2014-01-11 18:38:53
*/

var Prep = Prep || {};

Prep.BST = function(values) {
  var self = {},
      root;

  // Node constructor
  function node(value) {
    var node = {};
    node.value = value;
    node.left  = null;
    node.right = null;
    return node;
  }

  // Add the given value to the BST as a new node. The value is not added
  // if the value is already in the tree.
  function add(value) {
    var nodeToAdd = node(value),
        current;

    if (root === undefined || root === null) {
      root = nodeToAdd;
    } else {
      current = root;
      while (true) {
        // Check the left subtree
        if (value < current.value) {
          
          if (current.left === null) {
            current.left = nodeToAdd;
            break;
          } else {
            current = current.left;
          }
        // Check the right subtree
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = nodeToAdd;
            break;
          } else {
            current = current.right;
          }
        // Value is the same the current node's so don't add it. 
        } else {
          break;
        }
      }
    }
  }

  // Process each node in the tree with the given callback
  function traverse(callback) {
    function inOrder(node) {
      if (node.left !== null) {
        inOrder(node.left);
      }

      callback(node);

      if (node.right !== null) {
        inOrder(node.right);
      }
    }

    inOrder(root);
  }

  function size() {
    var size = 0;

    traverse(function(node) {
      size++;
    });

    return size;
  }

  function toArray() {
    var result = [];

    traverse(function(node) {
      result.push(node.value);
    });

    return result;
  }

  function toString() {
    return self.toArray().toString();
  }

  // Assign methods
  self.add = add;
  self.size = size;
  self.toArray = toArray;
  self.toString = toString;

  // Add each of the passed in values to the BST
  while(values.length !== 0) {
    self.add(values.shift());
  }

  console.log("New BST created: ", self.toString());

  return self;
}