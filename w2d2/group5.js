// Queue
// FIFO (First in, first out)
//Jesus, Dathan,Moe


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
        this.back = null;
    }

    //Get in the back of the line
    enqueue(node){
        if(this.back != null){
            this.back.next = node;
            this.back = node;
            this.back.next = null;
        }else{
            this.front = node;
            this.back = node;
        }
    }
    //Remove somebody from the front of the line
    dequeue(){
        var node = this.front;
        if(this.front!=null){
            this.front= this.front.next;
        }
        node.next = null;
        return node;
    }
    //return the data at the front
    front() {
        if(this.front != null) {
            return this.front.data;
        }
        return null;
    }

    isEmpty(){
        if(this.front==null){
            return true;
        }else{
            return false;
        }
    }

    isEmpty(){
        return this.front == null;
    }
}


// using only public queue interfaces,
// print all the values of the queue and return
// the queue as it's original order
function readQueue(queue){
    var backNode = queue.back;
    var temp=queue.dequeue();
    while(temp != backNode){
        console.log(temp.data);
        queue.enqueue(temp);
        temp = queue.dequeue();
    }
}
