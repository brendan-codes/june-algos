//jerry ochoa
//Vardges Gharibyan

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
    addToBack(nodes){ // does not return anything
        if(this.isEmpty()){
            this.head = nodes;
        }
        else{
            let tempNode = this.head;
            while(tempNode.next !== null)
                tempNode = tempNode.next;
            tempNode.next = nodes;
        }
    }

    // return true or false if the list contains a node with data === value
    // this does not pass a node, only the value to search for.
    contains(value){
        let tempNode = head;
        while(tempNode.data !== value)
            tempNode = tempNode.next;
        if (tempNode === null)
            return false;
        else
            return tempNode.data;
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
console.log(bool);

var myNewNode = new Node(5);
mySLL.addToBack(myNewNode);