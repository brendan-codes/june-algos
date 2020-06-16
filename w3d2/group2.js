// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // return true or false if val exists within the DLL
    exists(val){
        var runner = this.head;
        while(runner != null){
            if (runner.data == val){
                return true;
            }
            runner= runner.next;
        }
        return false;
    }

    // remove and return node with data === val if it exists
    // assume every val is unique or simply just remove and return
    // the first match that you find.
    removeVal(val){
        var runner = this.head;
        while(runner != null){
            //If found value is the head
            if(this.head.data == val){
                var node = this.head;
                this.head.next.prev = null;
                this.head = runner.next;
                return node;
            }
            else if(this.tail.data == val){
                var node = this.tail
                node.prev.next= null;
                this.tail = this.tail.prev;
                return node;
            }
            else if(runner.data == val){
                runner.prev.next = runner.next;
                runner.next.prev = runner.prev;
                runner.next = null;
                runner.prev = null;
                return runner;
            }
            runner = runner.next;
        }
    }

    // return true of false if the current DLL is a palindrome
    checkPalindrome(){
        var runnerHead =this.head;
        var runnerTail = this.tail;
        for(var i=0;i<this.length/2;i++){
            if(runnerHead.data != runnerTail.data){
                return false;
            }
            runnerHead=runnerHead.next;
            runnerTail= runnerTail.prev;
        }
        return true;
    }




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

    // boolean, is empty
    isEmpty(){

    }

    // return length
    size(){}

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

    // push to tail
    addTail(node){}

    // add after target if exists
    append(target, node){}

    // pop from head
    removeHead(){}
}
