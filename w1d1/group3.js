class SLL {
    constructor() {
        this.head = null;
    }

    add(node){
        // add a new node to the front of the list and move the head
        node.next = this.head;
        this.head = node;
    }

    checkHead(){
        // return true/false if head exists
        if(this.head){
            return true;
        }
        else{
            return false;
        }
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