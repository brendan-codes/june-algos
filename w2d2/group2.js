//Jerry,Vardges,Bilal,Isaac
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

    enqueue(data){
        if(this.front === null){
            this.front = new Node(data);
            this.rear = this.front;
        }
        else{
            rear.next = new Node(data);
            rear = rear.next;
        }
    }
    dequeue(){
        let tempNode = this.front;
        this.front = this.front.next;
        tempNode.next = null;
        return tempNode;
    }
    front(data){
        if(this.front.next===null){
            return this.front;
        }
        else{
            front = this.front;
            front.next = data;
        }
    }


    isEmpty(){
        if(this.front == null)
            return true;
        else
            return false;
    }
}

let queue = new Queue();
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
// using only public queue interfaces,
// print all the values of the queue and return
// the queue as it's original order
function readQueue(queue){
    let tempQueue = new Queue();
    while (!queue.isEmpty()){
          let tempNode = queue.dequeue();
          console.log(tempNode.data);
          tempQueue.enqueue(tempNode);
    }
    return tempQueue;
}
