// Vardges, Isaac, Jesus

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // push to head
    addHead(node){
    if (this.head === null){
        this.head = node;
    }
    else{
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
        this.length++;
    }

    // pop from tail
    removeTail(){
        if (this.rear === null){
            return;
        }
        this.rear = this.rear.prev;
        this.rear.next = null;
        this.length--;
    }

    // add before target if exists
    prepend(target, node){
        let current = this.head;
        let previous = null;
        while (current !== target){
            previous = current;
            current = current.next;
        }
        if (current === null){
            return;
        }

        previous.next = node;
        node.prev = previous;
        node.next = target;
        target.prev = node;
        this.length++;
    }

    // boolean, is empty
    isEmpty(){
    if (this.head === null){
        return true;
    }
    else
    {
        return false;
    }
}

    // return length
    size(){
        return this.length;
    }


























































































































































    // == Challenge Question ==

    // implement recursive prepend that starts from this.head or current
    recursivePrepend(target, node, current){}




    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node){}

    // add after target if exists
    append(target, node){}

    // pop from head
    removeHead(){}
}

// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}