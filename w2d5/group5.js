// Daniel, Vardges, Jerry, Jimmy

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack { // FILO
    constructor() {
        this.head = null;
    }

    isSorted(){
        var stack2 = new Stack();
        var sorted = true;

        // ! bang operator
        while(!this.isEmpty()){
            var temp = this.pop();
            if(stack2.isEmpty() || stack2.peek().data <= temp.data){
                stack2.push(temp);
            } else {
                sorted = false;
                stack2.push(temp);
                break;
            }
        }
        while (!stack2.isEmpty()){
            this.push(stack2.pop());
        }
        return sorted;
    }

    push(newNode) {
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;
        removed.next = null;

        return removed;
    }

    peek() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        let isEmpty = this.head === null;
        return isEmpty;
    }
}

class Queue { // FIFO
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    // reverse a queue using only one stack as additional storage
    queueReverse(){
        var stack = new Stack();

        while(!this.isEmpty()){
            stack.push(this.dequeue());
        };

        while(!stack.isEmpty()){
            this.enqueue(stack.pop());
        };
    }

    compareQueues(queue){
        if(this.length !== queue.length){
            return false;
        }
        var count = 0;
        var isEqual = true;
        let len = this.length;

        while(count < len){
            const dequeue1 = this.dequeue();
            const dequeue2 = queue.dequeue();

            if(dequeue1.data !== dequeue2.data){
                isEqual = false;
            }

            this.enqueue(dequeue1);
            queue.enqueue(dequeue2);
            count++;
        }

        return isEqual;
    }

    queueIsPalindrome(){
        var isPalindrome = true;
        var stack = new Stack();
        var len = this.length;

        for(var i = 0; i < len; i++){
            var node = this.dequeue();
            stack.push(node);
            this.enqueue(node);
        }

        for(var i = 0; i < len; i++){
            var dequeued = this.dequeue();
            var popped = stack.pop();

            if(popped.data !== dequeued.data){
                isPalindrome = false;
            }

            this.enqueue(dequeued);
        }
        return isPalindrome;
    }

    enqueue(node){
        if(this.rear === null){
            this.rear = node;
            this.front = node;
            this.length++;
        }else{
            this.rear.next = node;
            this.rear = node;
            this.length++;
        }
    }
    dequeue(){
        if(this.front === null){
            this.length--;
            return null;
        };
        if(this.front === this.rear){
            this.rear = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        this.length--;
        return node;
    }
    checkFront(){
        return this.front ? this.front.data : null;
    }
    isEmpty(){
        return this.front === null;
    }
}

class minStack{
    constructor(){
        this.head = null;
        this.mins = [];
    }

    push(newNode) {
        if (this.head === null) {
            this.head = newNode;
            this.mins.push(newNode);
        } else {
            newNode.next = this.head;
            this.head = newNode;
            if(this.min.data === null || newNode.data < this.min().data){
                this.mins.push(newNode);
            }
        }
    }

    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        if(removed === this.min()){
            this.mins.pop();
        }
        return removed;
    }

    peek() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        let isEmpty = this.head === null;
        return isEmpty;
    }
    min(){
        return this.mins.length > 0 ? this.mins[this.mins.length - 1] : null;
    } // should not iterate
}

class PriorityNode {
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

// helper

// taking a priority node and splicing it into this.highestPriority at the correct index


class priorityQueue {
    constructor(){
        this.front = null;
        this.rear = null;
        this.length = 0;
        this.highestPriority = new SLL();
    }

    // enqueue into the rear of the queue, if highest priority, update
    // the highestPriority array / SLL
    enqueue(node){
        if (this.isEmpty()) {
            this.front = node;
            this.rear = node;
            this.highestPriority.addToFront(node);
            return;
        }
        this.rear.next = node;
        this.rear = node;

        let runner = this.highestPriority.head;
        while (runner) {
            if (node.priority > runner.priority) {
                this.highestPriority.prepend(node, runner);
                return;
            }
            runner = runner.next;
        }
        this.highestPriority.addToBack(node);
    }

    // dequeue the last node, no matter the priority.

    // if this node was our previous highest priority, pop
    // from the highestPriority array
    dequeue(){

    }

    // look at the front node
    peekFront(){
        if(this.front !== null)
            return this.front.data;
        else
            return null;
    }

    // look at the back node
    peekBack(){
        if( this.rear !== null){
        return this.rear.data;
        }
        else {
            return null;
        }
    }

    // check if empty
    isEmpty(){
        if (this.front === null)
            return true;
        else
            return false;
    }

    // return the final value in the .highestPriority
    getHighestPriority(){
        return this.highestPriority.front.data;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    prepend(newNode, targetNode){
        if (!this.contains(targetNode.value)) return;
        let runner = this.head;
        let prev = null;
        if(runner === targetNode) {
            this.addToFront(newNode);
            return;
        }
        while (runner) {
            if (runner === targetNode) {
                prev.next=newNode;
                newNode.next = runner;
                return;
            }
            prev = runner;
            runner =runner.next;
        }
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



    // *
    //iterate the linked list and print the value of every node
    display(){
        var runner = this.head;
        while (runner !== null) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    // *
    //if data is contained within the current list, remove it.
    //consider edge cases of head node, last node, and middle nodes
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

    // *
    addToFront(node){
        if(this.isEmpty()){
            this.head = node;
            return;
        };

        node.next = this.head;
        this.head = node;
        return;
    }

    // *
    isEmpty(){
        if(this.head){
            return false;
        }
        return true;
    }

    // x
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

    // *
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

    // =
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

    // *
    // remove and return the first node from the list or null
    removeHead(){
        if(this.isEmpty()) return null;
        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        return removed;
    }

    // remove head and return the value of that node or null
    removeHeadValue(){
        if(this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        return removed.value;
    }

    // x
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
