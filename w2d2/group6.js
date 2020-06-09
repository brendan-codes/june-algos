// Daniel, Sam, Shivani

// Queue
// FIFO (First in, first out)


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        // enqueue and dequeue
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(node){
        if(this.front==null){
            this.front=node;
            this.rear=node;
        }
        else{
            this.rear.next=node;
            this.rear=node;
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

    returnFront(){
        return this.front;
    }

    isEmpty(){
        return this.front === null;
    }
}

// using only public queue interfaces,
// print all the values of the queue and return
// the queue as it's original order
function readQueue(queue){
    let valuesArray = [];
    let copyQueue = new Queue;
    while (!queue.isEmpty()) {
        valuesArray.push(queue.front.data);
        let removedNode = queue.dequeue();
        copyQueue.enqueue(removedNode);
    }
while (!copyQueue.isEmpty()) {
queue.enqueue(copyQueue.dequeue());
    }
    console.log(valuesArray);
    return queue;
}

let newQueue = new Queue;
let emptyQueue = new Queue;

let node1 = new Node(10);
let node2 = new Node(7);
let node3 = new Node(6);
let node4 = new Node(2);

newQueue.enqueue(node1);
newQueue.enqueue(node2);
newQueue.enqueue(node3);
newQueue.enqueue(node4);

newQueue.dequeue();

console.log(emptyQueue.isEmpty());

// console.log(newQueue);

console.log(newQueue.returnFront());

readQueue(newQueue);
