// Daniel, Moe, Isaac

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(node){
        // add a new node to the front of the list and move the head
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
    }

    isEmpty(){
        if (this.head) return false;
        else return true;
    }

    addToBack(node) {
        var runner = this.head;
        if (runner === null){
            this.head = node;
            return;
        }
        while (runner) {
            if (runner.next === null) {
                runner.next = node;
                return;
            }
            else runner = runner.next;
        }
    }

    contains(value) {
        var runner = this.head;
        while (runner) {
            if (runner.data === value) return true;
            runner = runner.next;
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

// make new SLL
var mySLL = new SLL();

// should return true because new SLL is empty
console.log(mySLL.isEmpty());

// create and add new node to front
var firstNode = new Node(7);
mySLL.addToFront(firstNode);
console.log(mySLL);

// create and add more nodes to front
var newFirstNode = new Node(8);
mySLL.addToFront(newFirstNode);
var anotherFirstNode = new Node(9);
mySLL.addToFront(anotherFirstNode);
console.log(mySLL);

// create and add node to back
var newLastNode = new Node(1);
mySLL.addToBack(newLastNode);
console.log(mySLL);

// check if SLL contains node with data value of 7; should return true
var contains7 = mySLL.contains(7);
console.log(contains7); // should be true