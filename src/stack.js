const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */


//the constructor function does not require the "function" keyword. 
//This is true for all functions declared inside the class. 
// functions declared inside a class are referred to as methods 
// and are accessible from outside of the class by default.
//The peek method, just like the method name suggests, 
//returns the element on top of the stack without affecting the stack.

class Stack {

  constructor () {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    
    return this.items[this.items.length - 1];
  }
}

module.exports = {
  Stack
};
