// Daniel, Dathan, Kevin

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
        if (this.head === null) return null;
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp;
    }

    // remove head and return the value of that node or null
    removeHeadValue(){
        if (!this.head) return null;
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp.data;
    }

    // remove and return the last node from the list or null
    removeBack(){
        if (this.head === null) return null;
        if (this.head.next === null) {
            var output = this.head;
            this.head = null;
            return output;
        }
        var temp = this.head;
        //Keep traversing to the next node until there's no more nodes left
        while (temp.next.next !== null){
            //keep going until end of list
            temp = temp.next;
        }
        var output = temp.next;
        //Set the next pointer of the second to last node to null
        temp.next = null;
        return output;
    }

    // bonus challenge:
    // return the average of all values in an integer SLL
    average(){
        if (this.head === null) return 0;
        //Create a sum var
        var sum = 0;
        var count = 0;
        var temp = this.head;
        while (temp !== null){
            sum += temp.data;
            count += 1;
            temp = temp.next; // traversing
        }
        return (sum / count)
        //Get all values of linked list and add them to the sum
        //Store a count of items

        //return average

    }
    // get the value of the middle node if there is one
    getMiddleData(){
        if (this.head === null) return null;
        var count = 0;
        var temp = this.head;
        while (temp !== null) {
            count++;
            temp = temp.next;
        }
        if (count % 2 === 1) {
            temp = this.head;
            var target = (count + 1) / 2;
            while (temp !== null) {
                count++;
                if (count === target) return temp.data;
            }
        }
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

//Check if the removeBack works
console.log(mySLL.removeHeadValue());
// console.log(mySLL.removeBack().data);
console.log(mySLL);

console.log(mySLL.average());

var newSLL = new SLL();
console.log(newSLL.average());