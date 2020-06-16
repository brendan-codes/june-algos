//Jimmy, Justin, Victoria
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
        runner = this.node;
    if(runner == null){
        runner.push.head
    }
    return node;
    }

    // pop from tail
    removeTail(){
    runner = this.tail;
    if(runner == null){
    runner.pop;
     }
     return length;
    }

    // add before target if exists
    prepend(target, node){}

    // boolean, is empty
    isEmpty(){
        runner = this.head;
        if( this.head == null){
            return this.head;
        }
    }

    // return length
    size(){
        runner = this.head;
        while(this.head != null){
            runner = this.head.next;
            this.length +=1;
        }
        return length;
    }



    // == Challenge Question ==

    // implement recursive prepend that starts from this.head or current
    recursivePrepend(target, node, current){}




    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node){
    runner = this.node;

    }

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