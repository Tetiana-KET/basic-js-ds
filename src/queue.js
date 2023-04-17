const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 *Queue
 * Implement the Queue with a given interface via linked list. 
 * Each instance of queue must have 3 methods: 
 * * enqueue(value) — puts the value at the end of the queue 
 * * dequeue — retrieves a value from the head of the queue and deletes it 
 * * getUnderlyingList - returns underlying linked list
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;//еще нет первого элемента
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {

    let last = {value, next: null};

    if (this.length) {
      this.tail.next = last;
      this.tail = this.tail.next;
    } else {
      this.head = last;
      this.tail = last;
    }
    this.length ++;

  }

  dequeue() {
    let current = this.head;
    this.head = this.head.next;
    this.length --;
    return current.value;
  }
}

module.exports = {
  Queue
};
