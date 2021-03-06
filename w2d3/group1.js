//Jesus, Bilal, Isaac
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack { // FILO
    constructor() {
        this.head = null;
    }

    push(newNode) {
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;
        removed.next = null;

        return removed;
    }

    peek() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        let isEmpty = this.head === null;
        return isEmpty;
    }
}

class Queue { // FIFO
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // return true or false if a given queue is equal to this queue
    // restore the queues back to their original state
    compareQueues(queue){
        var currentNode = this.dequeue();
        var inputNode = queue.dequeue();

        while(queue.isEmpty() != null) {
            if(currentNode.data == inputNode.data) {
                return true;
            } else if(currentNode.data != inputNode.date) {
                return false;
            }
        }

    }



    // return true or false  if this queue is a palindrome.
    // palindromes are strings that are equal when the order is reversed

    // racecar = racecar, true
    // tacocat = tacocat, true
    // brendan = nadnerb, false

    // you may only use 1 stack for additional storage, no arrays or objects
    queueIsPalindrome()
    }

    enqueue(node){
        if(this.rear === null){
            this.rear = node;
            this.front = node;
        }else{
            this.rear.next = node;
            this.rear = node;
        }
    }
    dequeue(){
        if(this.front === null){
            return null;
        };
        if(this.front === this.rear){
            this.rear = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        return node;
    }
    checkFront(){
        return this.front ? this.front.data : null;
    }
    isEmpty(){
        return this.front === null;
    }
}

// BONUS: implement a minStack.

// min stacks keep track of the minimum value in a numerical stack
// this is done by not only keeping track of the head, but also an array
// of pointers.

// in order to successfully implement a minStack, you will need to modify push and pop
class minStack{
    constructor(){
        this.head = null;
        this.mins = [];
    }

    push()
    pop()
    peek()
    isEmpty()
    min() // should not iterate
}