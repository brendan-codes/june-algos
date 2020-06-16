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
        if(!this.head){
            this.head = node;
            this.tail = node;
            this.length++;
        }else{
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    // pop from tail
    removeTail(){}

    // add before target if exists, both nodes

    // needs head node edge case refactor
    prepend(target, node){
        var runner = this.head;
        while(runner){
            if(runner === target){
                node.next = runner;
                node.prev = runner.prev;
                runner.prev.next = node;
                runner.prev = node;
                this.length++;
                if(runner === this.head){
                    this.head = node;
                }
                return true;
            }else{
                runner = runner.next;
            }
        }
        return false;
    }

















    // add before target node with data
    prependData(target, data){
        var node = new DLLNode(data);
        var runner = this.head;
        while(runner){
            if(runner === target){
                node.next = runner;
                node.prev = runner.prev;
                runner.prev.next = node;
                runner.prev = node;
                this.length++;
                if(runner === this.head){
                    this.head = node;
                }
            }else{
                runner = runner.next;
            }
        }
    }

    // add before node with data === val, create a new node with data
    prependDataBeforeVal(val, data){
        var node = new DLLNode(data);
        var runner = this.head;
        while(runner){
            if(runner.data === val){
                node.next = runner;
                node.prev = runner.prev;
                runner.prev.next = node;
                runner.prev = node;
                this.length++;
                if(runner === this.head){
                    this.head = node;
                }
            }else{
                runner = runner.next;
            }
        }
    }



    // boolean, is empty
    isEmpty(){

    }

    // return length
    size(){}



    // == Challenge Question ==

    // implement recursive prepend that starts from this.head or current

    // not moving .head properly
    recursivePrepend(target, node, current){
        if(current === undefined){
            current = this.head;
        }

        if(current === null){
            return false;
        }

        if(current === target){
            node.next = current;
            node.prev = current.prev;
            current.prev.next = node;
            current.prev = node;
            return true;
        }

        return this.recursivePrepend(target, node, current.next);
    }




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