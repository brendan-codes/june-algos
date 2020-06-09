// Queue
// FIFO (First in, first out)
// group1 Neil, Justin, Jimmy


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
    //hmmmm
    enqueue(backNode){
        this.next = this.rear;
        this.rear = backNode;
    }
    dequeue(){
        //this wont work because this.next moves backwards
        // would we want to move from this.rear instead of this.front?
        var temp;
        temp = this.front;
        this.front = this.next;
        //looping this.rear until this.next = null? not sure
        //jk no, because we cant use a runner
    }
    front(){
        var temp;
        temp = this.front;
        console.log(temp.data);
    }
    isEmpty(){
        if (this.front === null){
            return "The queue is empty!"
        }
    }
}

// using only public queue interfaces,
// print all the values of the queue and return
// the queue as it's original order
function readQueue(queue){
var arr[];
if(isEmpty(queue)==true){
return "the queue is empty";
} else {
    while(this.front != null){
        dequeue();
        arr.push[this.front];
        this.front = this.next;
    }
}
    return arr;
}