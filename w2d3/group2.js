// Daniel, Sam, Jerry, Justin

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
        if (this.checkFront != queue.checkFront) return false;
        let q1copy = new Queue();
        let q2copy = new Queue();
        let solution = true;
        while(!this.isEmpty() && !queue.isEmpty()) {
            if (this.front.data != queue.front.data) solution = false;
            q1copy.enqueue(this.dequeue());
            q2copy.enqueue(queue.dequeue());
        }
        if ( !this.isEmpty() && queue.isEmpty() ) {
            solution = false;
            while(!this.isEmpty()) {
                q1copy.enqueue(this.dequeue());
            }
        }
        else if ( this.isEmpty() && !queue.isEmpty() ) {
            solution = false;
            while(!queue.isEmpty()) {
                q2copy.enqueue(queue.dequeue());
            }
        }
        else {
            while(!q1copy.isEmpty()) {
                this.enqueue(q1copy.dequeue());
            }
            while(!q2copy.isEmpty()) {
                queue.enqueue(q2copy.dequeue());
            }
        }
        return solution;
    }


    // return true or false  if this queue is a palindrome.
    // palindromes are strings that are equal when the order is reversed

    // racecar = racecar, true
    // tacocat = tacocat, true
    // brendan = nadnerb, false

    // you may only use 1 stack for additional storage, no arrays or objects
    queueIsPalindrome(){
        if (this.front.data != this.rear.data) return false;
        if (this.front === this.rear) return true;
        let newStack = new Stack();
        let num;
//set num=this.rear
//dequeue and put in stack
//compare num to this.head in stack
//continue to the end of queue
//requeue
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
        var currentFront=this.front;
        if(this.front === this.rear) {
            this.rear = null;
            this.front = null;
        }
        if(this.front){
            this.front=this.front.next;
            currentFront.next=null;
        }
        return currentFront;
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

    // push()
    // pop()
    // peek()
    // isEmpty()
    // min() // should not iterate
}

let newQueue = new Queue;
let emptyQueue = new Queue;

let node1 = new Node(10);
let node2 = new Node(7);
let node3 = new Node(6);
let node4 = new Node(2);

let node5 = new Node(10);
let node6 = new Node(7);
let node7 = new Node(6);
let node8 = new Node(2);

newQueue.enqueue(node1);
newQueue.enqueue(node2);
newQueue.enqueue(node3);
newQueue.enqueue(node4);
// console.log(newQueue);

emptyQueue.enqueue(node5);
emptyQueue.enqueue(node6);
emptyQueue.enqueue(node7);
emptyQueue.enqueue(node8);
// console.log(emptyQueue);


console.log(newQueue.compareQueues(emptyQueue));