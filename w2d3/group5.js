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
        if(this.front == null && queue.front == null) return true;
        if(this.front == null || queue.front == null) return false;
        var originalBack = this.rear;
        var current = this.dequeue();
        var inputBack = queue.rear;
        var inputCurrent = queue.dequeue();
        var output = true;
        // console.log(originalBack == current);
        // console.log(inputCurrent == inputBack);
        do{
             // console.log(current);
            // console.log(inputCurrent);
            if(current.data != inputCurrent.data){
                output = false;
            }
            if(current != originalBack){
                this.enqueue(current);
                current = this.dequeue();
            }
            if(inputCurrent != inputBack){
                queue.enqueue(inputCurrent);
                inputCurrent = queue.dequeue();
            }
        }
        while(current != originalBack && inputCurrent != inputBack);
        this.enqueue(current);
        queue.enqueue(inputCurrent);
        return output;
    }



    // return true or false  if this queue is a palindrome.
    // palindromes are strings that are equal when the order is reversed

    // racecar = racecar, true
    // tacocat = tacocat, true
    // brendan = nadnerb, false

    // you may only use 1 stack for additional storage, no arrays or objects
    queueIsPalindrome(){
        if(this.isEmpty()){
            return true;
        }
        var stacktracker=new Stack();
        var current=this.dequeue();
        var originalBack=this.rear;
        while(current != originalBack){
            stacktracker.push(current);
            this.enqueue(current);
            current=this.dequeue();
        }
        this.enqueue(current);
        current=this.dequeue();
        var result = true;
        while(current != originalBack){
            if(current.data != stacktracker.peek()){
                result=false;
            }
            stacktracker.pop();
            this.enqueue(current);
            current=this.dequeue();

        }
        this.enqueue(current);
        return result;
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
}

var q = new Queue();
q.enqueue(new Node(3));

var q2 = new Queue();
q2.enqueue(new Node(4));
console.log(q.compareQueues(q2));


let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);

let q = new Queue();
// console.log(q.isEmpty());
q.enqueue(n1);
q.enqueue(n2);
q.enqueue(n3);

// q2 = readQueue(q);


// readQueue(q2);

let q2 = new Queue();

q2.enqueue(n1);
q2.enqueue(n2);
q2.enqueue(n4);
console.log(q.compareQueues(q2));