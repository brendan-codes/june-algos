// Queue
// FIFO (First in, first out)
// Gabe, Brady, Jeff

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
    //add to back
    enqueue(node){
        if(this.isEmpty()){
            this.front=node;
            this.rear=node;
            return;
        }
        this.rear.next=node;
        this.rear=node;
        return;

    }
    //remove from front
    dequeue(){
        if(this.isEmpty()){
            return;
        }
        let first = this.front;
        this.front =first.next;
        first.next = null;
        return first;
    }
    readFront(){
        if(this.isEmpty())
            return null;
        return this.front.data;
    }
    isEmpty(){
        if(this.front===null ||this.rear===null)
            return true;
        return false;
    }
}

// using only public queue interfaces,
// print all the values of the queue and return
// the queue as it's original order
function readQueue(queue){
    let newQueue = new Queue();
    if(queue.isEmpty()){
        return;
    }
    while(!queue.isEmpty()){
        console.log(queue.readFront());
        let node = queue.dequeue();
        newQueue.enqueue(node);
    }
    return newQueue;
}
