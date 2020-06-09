// Patrick, Nicolas, Victoria

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
    if (isEmpty()){
        this.front = node;
        this.rear = node;
    }
    else{
        this.rear.next = node;
        this.rear = node;
    }
    }
    dequeue(){
        this.front = this.front.next;
    }
    front(){
        return this.front.data;
    }
    isEmpty(){
        if(this.front==null){
            return false;
        }
    }
}

// using only public queue interfaces,
// print all the values of the queue and return
// the queue as it's original order
function readQueue(queue){
    if(queue.isEmpty()){
        return('This is empty.')
    }
    else{

    }
}