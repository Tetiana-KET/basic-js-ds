const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Your task is to implement the class BinarySearchTree. 
Each instance of BinarySearchTree must have following methods:

root — return root node of the tree
add(data) — add node with data to the tree
has(data) — returns true if node with the data exists in the tree and false otherwise
find(data) — returns node with the data if node with the data exists in the tree and null otherwise
remove(data) — removes node with the data from the tree if node with the data exists
min — returns minimal value stored in the tree (or null if tree has no nodes)
max — returns maximal value stored in the tree (or null if tree has no nodes)
*/
class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addElement(rootNode, data);

    function addElement () {
    if (!rootNode) {
      return new Node(data);
    }
    }
  }

  has(data) {

  }

  find(data) {

  }

  remove(data) {

  }

  min() {

  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};