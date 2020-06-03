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


    //Shivani, Jesus, Brady

    // remove and return the first node from the list or null
    removeHead(){
        if(this.head == null){
            return null;
        }
        let firstNode = this.head;
        this.head = firstNode.next;
        firstNode.next = null;
        return firstNode;
    }

    // remove head and return the value of that node or null
    removeHeadValue(){
        if(this.head == null){
            return null;
        }
        let firstNode = this.head;
        this.head = firstNode.next;
        firstNode.next = null;
        return firstNode.data;
    }

    // remove and return the last node from the list or null
    removeBack(){
        if(this.head == null){
            return null;
        }
        let runner = this.head;
        let secondToLast = runner;
        while(runner.next != null){
            secondToLast = runner;
            runner = runner.next;
        }
        secondToLast.next = null;
        return runner;
    }

    // bonus challenge:
    // return the average of all values in an interger SLL
    average(){
        let avg = 0;
        let length = 0;
        let runner = this.head;
        while(runner != null){
            avg += runner.data;
            length += 1;
            runner = runner.next;
        }
        return avg/length;
    }
    // get the value of the middle node if there is one
    getMiddleData(){
        if(this.head == null){
            return null;
        }
        let length = 1;
        let runner = this.head;
        while(runner != null){
            length += 1;
            runner = runner.next;
        }
        let middle = length/2;
        let i = 0;
        runner = this.head;
        while(i<middle){
            runner = runner.next;
            i++;
        }
        return runner.data;
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