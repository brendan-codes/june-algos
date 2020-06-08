// Stacks
//Sam, Bilal, Shivani
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
    }

    push(node){
        if (this.head){
            var temp=this.head
            temp=temp.next;
            this.head=node;
        }
        else this.head=node
    }
    pop(){
        if(this.head){
            this.head=this.head.next;
            this.head.next=null;
        }
        return this.head;
    } // return a node
    // break the reference .next === null
    peek(){
        if(this.head){
            return this.head.data;
        }
    } //show value
    isEmpty(){
        if(this.head === null){
            return true;
        }
        else return false;
    }
}