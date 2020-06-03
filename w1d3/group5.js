// Jeff Huang,
// Vardges Gharibyan
// Jay

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
        if(this.isEmpty())
            return null;
        var removed=this.head;
            removed.next=null;
        this.head=this.head.next;
        return removed;

    }

    // remove head and return the value of that node or null
    removeHeadValue(){
        if(this.isEmpty())
         return null;
        var removed=this.head;
            removed.next=null;
      this.head=this.head.next;
        return removed.data;

    }

    // remove and return the last node from the list or null
    removeBack(){
        if(this.isEmpty())
            return null;
        let runner=this.head;
        if(runner.next===null){
            this.head=null;
            return runner;
        }
        while(runner.next.next != null){
            runner=runner.next;
        }
        let removed=runner.next;
         runner.next=null;
        return removed;


    }

    // bonus challenge:
    // return the average of all values in an integer SLL
    average(){
        if(this.isEmpty())
            return null;
        let runner = this.head;
        let length = 0;
        let sum = 0;
        let avg = 0;
        while (runner !== null){
            sum += runner.data;//if sum triggers first you don't need to manually add it
            runner = runner.next;
            length++;
        }
        avg = sum / length;
        return avg;
    }
    // get the value of the middle node if there is one
    getMiddleData(){
        if(this.isEmpty())
            return null;
        if(this.head.next==null)
            return null;
        let doublerunner =this.head;
        let midreturnrunner =this.head;
        while(doublerunner){
            doublerunner=doublerunner.next.next;
            midreturnrunner=midreturnrunner.next;
            if(doublerunner==null)
                return null;
            if(doublerunner.next==null)
                return midreturnrunner;
        }
        return null;
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