class SLL {
    constructor() {
        this.head = null;
    }

    add(node){
        // add a new node to the front of the list and move the head
        if(this.head===null){
            this.head= new Node(node);
        }
        else{
            this.next=this.data
        }
    }

    checkHead(){
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
mySLL.add(50)
console.log(mySLL)


// if a SLL head points a null?
// it's empty! no nodes

// if a Node inside of an SLL points to null?
// it's the last node!