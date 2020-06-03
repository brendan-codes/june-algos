//Niv, Patrick, Alkarim
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

    addToBack(node){
        // create a runner at the head
        let runner = this.head;

        // check if the runner is null, meaning our list is headless
        if(runner === null){
            this.head = node;
            return
        }

        // "10" == 10 yes
        // "10" === 10 no

        // start while looping
        while(runner){
            // check if the next node is null
            if(runner.next === null){
                // if so, add here and return
                runner.next = node;
                return
            }
            // if not, advance runner
            runner = runner.next;
        }
    }

    contains(value){
        // start at the head
        var runner = this.head;

        // while we have a runner
        while(runner){

            // return true if data === value
            if(runner.data === value){
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        return false;
    }

    recursiveContains(current, value){
        // if you didn't pass current, current should be the head
        if(current === undefined) current = this.head;

        // if current is null, return false up the call stack
        if(current === null) return false;

        // if runner.data === value, return true up the call stack
        if(runner.data === value) return true;

        // otherwise return the result of contains for current.next
        return this.recursiveContains(current.next, value);
    }

    // remove and return the first node from the list or null
    removeHead(){
        if (this.isEmpty()) return null;
        var firstNode = this.head;
        var nextNode = firstNode.next;
        this.head = nextNode;
        return firstNode;
    }

    // remove head and return the value of that node or null
    removeHeadValue(){
        if (this.isEmpty()) return null;
        var firstNode = this.head;
        var nextNode = firstNode.next;
        this.head = nextNode;
        return firstNode.data;
    }

    // remove and return the last node from the list or null
    removeBack(){
        if(this.isEmpty()) return null;
        var runner = this.head;
        if(runner.next==null){
            this.head=null;
            return runner;
        }
        while(runner.next.next!=null){
            runner=runner.next;
        }
        var removedNode = runner.next;
        runner.next = null;
        return removedNode;
    }

    // bonus challenge:
    // return the average of all values in an interger SLL
    average(){
        var sum = 0;
        var length = 0;
        var runner = this.head;
        while(runner!=null){
            sum+=runner.data;
            length++;
            runner=runner.next;
        }
        return sum/length;
    }
    // get the value of the middle node if there is one
    getMiddleData(){
        var length = 0;
        var runner = this.head
        while(runner!=null){
            length++;
            runner=runner.next;
        }
        var halfPoint = length/2;
        var counter = 1;
        runner = this.head
        while(counter<halfPoint){
            counter++;
            runner=runner.next;
        }
        return runner;
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
mySLL.addToFront(new Node(9));
mySLL.addToFront(new Node(10));
mySLL.addToFront(new Node(11));
mySLL.addToFront(new Node(12));
mySLL.addToFront(new Node(13));

console.log(mySLL.average().data);