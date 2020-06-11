// Niv, Patrick, Vardges
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
        var arr1 =[];
        var arr2 = [];
        while(this.isEmpty()==false){
            arr1.push(this.dequeue().data);
        }
        while(queue.isEmpty()==false){
            arr2.push(queue.dequeue().data);
        }
        var result = true;
        if (arr1.length !== arr2.length) result=false;
        else {
            for (var i=0;i<arr1.length; i++){
                if (arr1[i] !== arr2[i]) result=false;
            }
        }
        for (var i = 0; i<arr1.length; i++){
            this.enqueue(new Node(arr1[i]));
        }
        for (var i = 0; i<arr2.length; i++){
            queue.enqueue(new Node(arr2[i]));
        }
        return result;
    }



    // return true or false  if this queue is a palindrome.
    // palindromes are strings that are equal when the order is reversed

    // racecar = racecar, true
    // tacocat = tacocat, true
    // brendan = nadnerb, false

    // you may only use 1 stack for additional storage, no arrays or objects
    queueIsPalindrome(){
        let stack = new Stack();

        var queue = new Queue();
        while (this.isEmpty()===false){
            stack.push(this.dequeue());
            queue.enqueue(new Node(stack.peek()));
        }

        while (stack.isEmpty() === false){
            this.enqueue(stack.pop());
        }

        var result=this.compareQueues(queue);
        while(this.isEmpty() === false){
            this.dequeue();
        }
        while(queue.isEmpty() === false){
            this.enqueue(queue.dequeue());
        }

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

    push(newNode){
        if (this.head === null) {
            this.head = newNode;
            this.mins.push(this.head.data);
        } else {
            newNode.next = this.head;
            this.head = newNode;

        }
    }
    pop()
    peek()
    isEmpty()
    min() // should not iterate
}

var stack = new Queue();
stack.enqueue(new Node(1));
stack.enqueue(new Node(2));
stack.enqueue(new Node(2));
stack.enqueue(new Node(3));

var stack2 = new Queue();
stack2.enqueue(new Node(1));
stack2.enqueue(new Node(2));
stack2.enqueue(new Node(3));
stack2.enqueue(new Node(4));

console.log(stack.checkFront());
console.log(stack.queueIsPalindrome());
console.log(stack.checkFront());