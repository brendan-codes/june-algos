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
        var forwardRunner = this.head;
        var backwardRunner = this.tail;
        var count = Math.ceil(this.length / 2);
        while(count){
            if(forwardRunner.data === val || backwardRunner.data === val){
                return true;
            }
            forwardRunner = forwardRunner.next;
            backwardRunner = backwardRunner.prev;
            count--;
        }
        return false;
    }

    // remove and return node with data === val if it exists
    // assume every val is unique or simply just remove and return
    // the first match that you find.
    removeVal(val){
        var runner = this.head;
        if(!runner){
            return runner;
        }
        if(runner === this.tail && runner.data === val){
            // remove head and tail
            this.head = null;
            this.tail = null;
            this.length--;
            return runner;
        }
        if(runner.data === val){
            // remove just head
            this.head = runner.next;
            this.head.prev = null;
            runner.next = null;
            this.length--;
            return runner;
        }
        while(runner){
            if(runner.data === val){
                // remove runner
                if(runner === this.tail){
                    this.tail = runner.prev;
                    runner.prev.next = null;
                    runner.prev = null;
                    length--;
                    return runner;
                }
                runner.prev.next = runner.next;
                runner.next.prev = runner.prev;
                runner.next = null;
                runner.prev = null;
                this.length--;
                return runner;
            }
            runner = runner.next;
        }
    }

    removeValRefactored(val){
        let runner = this.head;
        while(runner){
            if(runner.data === val){
                break;
            }
            runner = runner.next;
        }
        if(runner === this.head && runner === this.tail){
            this.head = null;
            this.tail = null;
        }


        return runner;
    }

    'ABCBA'
    'ABCBA'

    'C'

    // return true of false if the current DLL is a palindrome
    checkPalindrome(){
        var count = Math.floor(this.length / 2);
        var forwardRunner = this.head;
        var backwardRunner = this.tail;
        if(this.length === 1){
            return true;
        }
        while(count){
            if(forwardRunner.data !== backwardRunner.data){
                return false;
            }
            forwardRunner = forwardRunner.next;
            backwardRunner = backwardRunner.prev;
            count--;
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
