class SLL {
    constructor() {
        this.head = null;
    }


    // partition a SList such that all values less than the given value are to the left of it,
    // and all values greater than the given value are to the right (not perfectly sorted)
    partition(val) {
        // current to head
        var current = this.head;
        // set six pointers, for the front and back of three new 'lists'
        var lesserHead, lesserTail, greaterHead, greaterTail, equalHead, equalTail;

        // loop the entire list
        while(current){
            // duplicates and also centering val
            if(current.data === val){
                // if the first in the equal list
                if(!equalHead){
                    equalHead = current;
                    equalTail = current;
                } else {
                    // otherwise
                    equalTail.next = current;
                    equalTail = equalTail.next;
                }
            // lesser head
            }else if(current.data < val){
                if(!lesserHead){
                    lesserHead = current;
                    lesserTail = current;
                } else {
                    lesserTail.next = current;
                    lesserTail = lesserTail.next;
                }
            // greater head
            }else if(current.data > val){
                if(!greaterHead){
                    greaterHead = current;
                    greaterTail = current;
                } else {
                    greaterTail.next = current;
                    greaterTail = greaterTail.next;
                }
            }
            // move current
            current = current.next;
        }

        // snip the tail of the greaters so it doesn't reference
        if(greaterTail) greaterTail.next = null;

        // if nothing is equal, give back the partition anyway
        if(!equalHead) {
            lesserTail.next = greaterHead;
            // don't forget to move the head
            this.head = lesserHead;
            return this;
        }

        // otherwise tie them all together
        lesserTail.next = equalHead;
        equalTail.next = greaterHead;
        // don't forget to move the head
        this.head = lesserTail;
        return this;
    }


    // partition for 4
    // 5 -> 7 -> 3 -> 4 -> 1 -> 2 -> 8 -> null
    // val = 4

    // all values left are lower and right are greater
    // 2 -> 1 -> 3 -> (4) -> 7 -> 5 -> 8 -> null


    // given a SORTED numeric SLL, remove duplicates in place
    removeDupesSorted(){
        if(this.isEmpty()){
            return;
        }

        // the head can never be a duplicate
        var runner = this.head;

        // check one past the runner
        while(runner.next){
            // compare data
            if(runner.data === runner.next.data){
                // it's a duplicate, let's look past it
                var newNext = runner.next.next;
                runner.next = newNext;
            } else {
                // it's not a duplicate, move the runner
                runner = runner.next;
            }
        }
    }

    // given a numeric SLL of either positive or negative numbers, remove
    // negative numbers in place
    removeNegatives(){
        // start with empty check
        if(this.isEmpty()){
            return;
        }

        let runner = this.head;

        // find the first positive number
        while(runner && runner.data < 0) {
            runner = runner.next;
        }

        // and move the head to it
        this.head = runner;

        // now start removing the rest
        while (runner && runner.next) {
            if(runner.next.data < 0){
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
    }

    // recursively return the largest node in the
    // current and the max should be this.head on the first call
    recursiveMax(current, max){
        // default to head on both
        if(current === undefined){
            current = this.head;
            max = this.head;
        }

        // null head, empty list
        if(this.head === null){
            return null;
        }

        // current null, read off the end
        if(current === null){
            return max.data;
        }

        // update max
        if(current.data > max.data){
            max = current;
        }

        // recurse on the next node, pass the max
        return this.recursiveMax(current.next, max);
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