//Dathan, Jay, Shivani

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
    addToBack(node){ // does not return anything
        if(this.isEmpty()) {
            this.head = node;
        } else {
        var current = this.head;
        while (current.next != null) {
            console.log(current.data);
            current = current.next;
        }
        current.next = node;
        console.log(current.next.data);
        }
    }

    // return true or false if the list contains a node with data === value
    // this does not pass a node, only the value to search for.
    contains(value){
        if(this.isEmpty()) return false;
        var current = this.head;
        while(current != null){
            if(current.data == value) return true;
            current = current.next;
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
mySLL.addToFront(myNewNode);

var bool = mySLL.isEmpty();
var newNode = new Node(10);
mySLL.addToBack(newNode);
console.log(mySLL.contains(10));
console.log(bool);
