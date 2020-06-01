class SLL {
    constructor() {
        this.head = null;
    }

    add(node){
        // add a new node to the front of the list and move the head
        this.head.next=head;
        this.head=node;
    }

    checkHead(){
        if(this.head){
            return true;
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
mySLL.add(new Node(7));
mySLL.head.next = mySLL.head;
console.log(mySLL.head)

// if a SLL head points a null?
// it's empty! no nodes

// if a Node inside of an SLL points to null?
// it's the last node!
