//Jimmy, Nicholas, Jay
// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT

// think of a stack of paper

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class arrStack {
    constructor(items){
        if(!items) items = [];
        this.items = items;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0){
            return true;
        }
        return false;
    }

    size() {
        return this.items.length;
    }

    print() {
        for(var item in this.items){
            console.log(item);
        }
    }
}

class slStack {
    constructor() {
        this.head = null;
        this.head = runner;
    }

    push(node){
    while( runner !== null ){
        this.push.node;
        this.next;
        return;
        }
    }

    push2(node){
        node.next = this.head;
        this.head = node;
    }

    pop2(){

    }

    pop(){
        if(runner == null ){
            this.pop.runner;
            this.next;
            return;
        }
    } // return a node
    // break the reference .next === null
    peek(){

    }
    isEmpty(){}
}