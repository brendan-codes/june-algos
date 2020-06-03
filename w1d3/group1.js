//Neil, Moe, Jimmy, Justin
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
        if(this.head){
            var temp = this.head
            this.head = null;
            return temp;
        }
        else{
            return null
        }
    }

    // remove head and return the value of that node or null
    removeHeadValue(){
        var val = removeHead();
        return val.data;
    }

    // remove and return the last node from the list or null
    removeBack(){
        // create a runner at the head
        let runner = this.head;

        // check if the runner is null, meaning our list is headless
        if(runner === null){
            return null;
        }

        // "10" == 10 yes
        // "10" === 10 no

        // start while looping
        while(runner){
            // check if the next node is null
            if(runner.next === null){
                runner=null;
                return
            }
            // if not, advance runner
            runner = runner.next;
        }
    }

    // bonus challenge:
    // return the average of all values in an interger SLL
    average(){
        var avg = 0;
        var sum = 0;
        var counter = 0;
        // create a runner at the head
        let runner = this.head;
        while(runner){
            if(runner.next === null){
                avg = sum / counter;
                return avg;
            }
            sum = sum + runner.data;
            counter = counter + 1;
            runner = runner.next;
        }
    }
    // get the value of the middle node if there is one
    getMiddleData(){
    var count=0;
    var runner1=this.head;
    var runner2=runner1;
    while(runner1.next!=null ){
        count++;
        runner1=runner1.next;
    }
    var index=0;
    while(index<(count/2)-1){
        runner2=runner2.next;
        index++;
    }
    return runner2.data;
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