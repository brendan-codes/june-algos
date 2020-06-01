class SLL {
    constructor() {
        this.head = null;
    }

    add(node){
        // add a new node to the front of the list and move the head
        if (this.checkHead() === false) {
            this.head = node;
        }
        else { // yeah it works. you can test it
            node.next = this.head;
            this.head = node;
        }
    }

    checkHead(){
        if (this.head) return true;
        else return false;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var mySLL = new SLL();
console.log(mySLL.checkHead());
var firstNode = new Node(7);
mySLL.add(firstNode);
mySLL.add(new Node(8));
mySLL.add(new Node(9));
console.log(mySLL.head);
console.log(mySLL.checkHead());

// mySLL.head.next = new Node(8);


// if a SLL head points a null?
// it's empty! no nodes

// if a Node inside of an SLL points to null?
// it's the last node!
