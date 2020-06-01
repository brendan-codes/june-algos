class SLL {
    constructor() {
        this.head = null;
    }

    add(node){
        if (this.checkHead()==true){
            node.next = this.head;
        }
        this.head = node;
    }

    checkHead(){
        if(this.head == null) return false;
        else return true;
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
