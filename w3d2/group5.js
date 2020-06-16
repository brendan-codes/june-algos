// DLLNodes have a .next and .prev
//Gabe and Jesus
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
        let runner = this.head;
        while(runner) {
            if(runner.data === val) {
                return true;
            } else {
                runner = runner.next;
            }
        return false;
        }
    }

    // remove and return node with data === val if it exists
    // assume every val is unique or simply just remove and return
    // the first match that you find.
    removeVal(val){
        let runner = this.head;
        let previous = this.head.previous
            if(this.head.data==val){
                this.head==null;
                this.tail==null;
            }
                while(runner) {
                    if(runner.data === val) {
                        ;
                    } else {
                        runner = runner.next;
                    }
                return false;
                }
    }

    // return true of false if the current DLL is a palindrome
    checkPalindrome(){}




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