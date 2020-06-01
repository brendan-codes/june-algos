class SLL {
    constructor() {
        this.head=null;
    }

    add(node){
        var newnode=new Node(node);
        if(this.checkHead()){
            newnode.next=this.head;
        }
        this.head=newnode;
    }

    checkHead(){
        if(this.head===null)
            return false;
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
mySLL.add(3);
console.log(mySLL.head.data);


// if a SLL head points a null?
// it's empty! no nodes

// if a Node inside of an SLL points to null?
// it's the last node!