// Stacks Jesus, Brady, Justin

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


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.head = null;
    }

    push(node){
    if(this.head == null) {
        this.head = node;
    } else {
        node.next = this.head;
        this.head = node;
        }
    }
    pop(){
        if(this.head === null){
            return null;
        }
        let top = this.head;
        this.head = top.next;
        top.next = null;
        return top;
    } // return a node
    // break the reference .next === null
    peek(){
        if(this.head === null){
            return null;
        }
        return this.head.data;
    }
    isEmpty(){
        if(this.head === null){
            return true;
        }
        return false;
    }
}