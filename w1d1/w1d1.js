class SLL {
    constructor() {
        this.head = null;
    }

    add(node){
        if(this.isEmpty()){
            this.head = node;
            return;
        };

        node.next = this.head;
        this.head = node;
        return;
    }

    isEmpty(){
        if(this.head){
            return false;
        }
        return true;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var mySLL = new SLL();

mySLL.head = new Node(7);
mySLL.head.next = new Node(8);


// if a SLL head points a null?
// it's empty! no nodes

// if a Node inside of an SLL points to null?
// it's the last node!
