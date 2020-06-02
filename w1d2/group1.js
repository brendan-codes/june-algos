//Jeff Huang, Victoria Chamberlain, Justin Smith

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(node){
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

    // add to the end of the list.
    // if empty, move the head
    addToBack(node){
        var runner=this.head;
        if(this.isEmpty()){
            this.head=node;
            return;
        }
        while(runner.next !==null)
        {
            runner=runner.next;
        }
        runner.next=node;
        return;
    }

    // return true or false if the list contains a node with data === value
    // this does not pass a node, only the value to search for.
    contains(value){
        if(this.isEmpty())
            return false;
        var runner=this.head;
        while(runner !=null){
            if(value==runner.data)
                return true;
            runner=runner.next;
        }
        return false;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var mySLL = new SLL();


mySLL.addToFront(new Node(7));


var myNewNode = new Node(8);
mySLL.addToBack(myNewNode);

var bool = mySLL.isEmpty();
console.log(bool);