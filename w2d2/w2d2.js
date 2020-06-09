// Queue
// FIFO (First in, first out)

//https://prod.liveshare.vsengsaas.visualstudio.com/join?BE8756E9DEA8EEA247D7BF7B034AFC455A8B

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

// using only public queue interfaces,
// print all the values of the queue and return
// the queue as it's original order
function readQueue(queue){
    var tempQueue = new Queue();

    while(!queue.isEmpty()){
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        tempQueue.enqueue(tempNode);
    }

    while(!tempQueue.isEmpty()){
        queue.enqueue(tempQueue.dequeue());
    }

    return queue;
}
