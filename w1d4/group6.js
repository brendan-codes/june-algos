
class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    //Bilal, Brady, Moe

    //iterate the linked list and print the value of every node
    display(){
        if(this.head == null){
            return;
        }
        let runner = this.head;
        while(runner){
            console.log(runner.data);
            runner = runner.next;
        }
    }

    //if data is contained within the current list, remove it.
    //consider edge cases of head node, last node, and middle nodes
    delete(data) {
        if(this.head == null){
            return;
        }
        let runner = this.head;
        if(runner.data == data){
            this.head = runner.next;
            return;
        }
        let oneBack = runner;
        while(runner.next){
            oneBack = runner;
            runner = runner.next;
            if(runner.data == data){
                oneBack.next = runner.next;
            }
        }
    }

    addToFront(node){
        if(this.isEmpty()){
            this.head = node;
            this.length++;
            return;
        };

        node.next = this.head;
        this.head = node;
        this.length++;
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
            this.length++;
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
                this.length++;
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
        if(this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        this.length--;
        return removed;
    }

    // remove head and return the value of that node or null
    removeHeadValue(){
        if(this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        this.length--;
        return removed.value;
    }

    // remove and return the last node from the list or null
    removeBack(){
        if(this.isEmpty()) return null;
        if(this.head.next === null){
            return this.removeHead();
        }
        var current = this.head.next;
        var prev = this.head;
        while(current){
            if(current.next === null){
                prev.next = null;
                this.length--;
                return current;
            }
            prev = current;
            current = current.next;
        }
    }

    // bonus challenge:
    // return the average of all values in an interger SLL
    average(){

    }
    // get the value of the middle node if there is one
    getMiddleData(){}

    count(){}
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