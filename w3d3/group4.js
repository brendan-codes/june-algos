class SLL {
    constructor() {
        this.head = null;
    }

    // given a SORTED numeric SLL, remove duplicates in place
    removeDupesSorted(){
        if(this.isEmpty()){
            return;
        }
        var prev = this.head;
        var runner = this.head.next;
        while(runner){
            while(runner && runner.data == prev.data){
                runner=runner.next;
            }
            if(runner == null){
                prev.next = null;
                return;
            }
            prev.next = runner;
            runner = runner.next;
            prev = prev.next;
        }
    }

    // 1 -> 1 -> 1 -> 3 -> 3 -> null

    //             1 -> 1 ->      3->
    // head -> 1 -----------> 3 ------>

    // 1 -> 3 -> null

    // given a numeric SLL of either positive or negative numbers, remove
    // negative numbers in place
    removeNegatives(){
        if(this.isEmpty()){
            return;
        }

        while(this.head.data<0){
            this.head = this.head.next;
            if(this.head == null){
                return;
            }
        }
        var prev = this.head;
        var runner = this.head.next;
        while(runner){
            while(runner && runner.data<0){
                runner=runner.next;
            }
            if(runner == null){
                prev.next = null;
                return;
            }
            prev.next = runner;
            runner = runner.next;
            prev = prev.next;
        }
    }



    // recursively return the largest node in the

    // current and the max should be this.head on the first call
    recursiveMax(current = this.head, max = null){
        if(max === null && this.head){
            max = this.head.data;
        }
        if(current == null){
            return max;
        }
        if(current.data>max){
            return this.recursiveMax(current.next, current.data);
        }
        else {
            return this.recursiveMax(current.next, max)
        }h
    }



    reverse() {
        var prev = null;
        var current = this.head;
        var next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    nthFromLast(n) {
        if (this.head === null) {
            return this.head;
        }
        var runnerFast = this.head;
        var runnerSlow = this.head;
        var count = 0;
        while (runnerFast) {
            if (count >= n) {
                runnerSlow = runnerSlow.next;
            }
            runnerFast = runnerFast.next;
            count++;
        }
        return runnerSlow;
    }
    nthFromLast2(n) {
        if (this.head === null) {
            return this.head;
        }
        var runner = this.head;
        while (n > 0) {
            runner = runner.next;
            n--;
        }
        var secondRunner = this.head;
        while (runner) {
            runner = runner.next;
            secondRunner = secondRunner.next;
        }
        return secondRunner;
    }

    display(){
        var runner = this.head;
        while (runner !== null) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    delete(data) {
        var runner = this.head;
        var prev = null;

        if (runner !== null && runner.data == data) {
            this.head = runner.next;
            return;
        }

        while (runner && runner.data !== data) {
            prev = runner;
            runner = runner.next;
        }

        if (runner === null) {
            return;
        }
        //runner is now our node to be deleted
        prev.next = runner.next;
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

    removeHead(){
        if(this.isEmpty()) return null;
        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        return removed;
    }

    removeHeadValue(){
        if(this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        return removed.value;
    }

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
                return current;
            }
            prev = current;
            current = current.next;
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var mySll = new SLL();
mySll.addToBack(new Node(1))
mySll.addToBack(new Node(-1))
mySll.addToBack(new Node(1))
mySll.addToBack(new Node(-2))
mySll.addToBack(new Node(2))
mySll.addToBack(new Node(-3))
mySll.addToBack(new Node(4))
mySll.addToBack(new Node(-4))
mySll.display();
console.log("Running Recursive Max")
console.log(mySll.recursiveMax())