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

//Gabriel, Brady, Bilal

    // add to the end of the list.
    // if empty, move the head


    addToBack(nodes){ // does not return anything
        var runner =this.head;
        while(runner){
            if(runner.next == null){
                var last = runner;
            }
            runner = runner.next;
        }
        last.next = nodes;
    }

    // return true or false if the list contains a node with data === value
    // this does not pass a node, only the value to search for.
    contains(value){
        var runner =this.head;
        while(runner){
            if(runner.data === value){
                return true;
            }
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

var mySLL = new SLL();


mySLL.addToFront(new Node(7));


var myNewNode = new Node(8);
mySLL.addToFront(myNewNode);

var bool = mySLL.isEmpty();
console.log(bool);

mySLL.addToBack(new Node(100));

var found = mySLL.contains(100);
console.log(found);
