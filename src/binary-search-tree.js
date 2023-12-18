const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 * class Node {
 *  constructor (){
 *    this.data = data;
 *    this.left = null;
 *    this.right = null;
 *  }
 * }
 */

class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

	root() {
		return this.rootNode;
	}

	add(data) {
		const newNode = new Node(data);

		if (!this.rootNode) {
			this.rootNode = newNode;
		} else {
			addNode(this.rootNode, newNode);
		}

    function addNode(node, newNode) {
			if (newNode.data < node.data) {
				if (!node.left) {
					node.left = newNode;
				} else if (node.left) {
					return addNode(node.left, newNode);
				}
			} else if (newNode.data > node.data) {
				if (!node.right) {
					node.right = newNode;
				} else if (node.right) {
					return addNode(node.right, newNode);
				}
			}
		};

	}

	has(data) {
		let current = this.rootNode;

    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
	}

	find(data) {
    let current = this.rootNode;

    while (current.data !== data) {
      
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) {
        return null;
      }
    };

    return current;
	}

	remove(data) {
    function removeNode (node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
				//if no children
				if (!node.left && !node.right) {
					return null;
				}
				//if no left child
				if (!node.left) {
					return node.right;
				}
				//if no right child
				if (!node.right) {
					return node.left;
				}
        //if node has both children
        let temp = node.right;
        while (temp.left) {
          temp = temp.left;
        }
        node.data = temp.data;
        node.right = removeNode(node.right, temp.data);
        return node;
			} else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
				return node;
      }
    }
    this.rootNode = removeNode(this.rootNode, data);
	}

	min() {
    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }
    return current.data;
	}

	max() {
    let current = this.rootNode;
		while (current.right) {
			current = current.right;
		}
		return current.data;
	}
}

module.exports = {
	BinarySearchTree,
};