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
        if(this.head!==null){
            node.next = this.head
            this.head = node;
        }
        else{
            this.head = node;
            this.tail = node;
        }
    }


    // pop from tail
    removeTail(){
        if(this.isEmpty()){
            return;
        }
        if(this.head === this.tail){
            let node = this.tail;
            this.head = null;
            this.tail = null;
            return node;
        }
        let newTail = this.tail.prev;
        this.tail.prev = null;
        let tail = this.tail;
        this.tail = newTai;
        return tail;
    }

    // add before target if exists
    prepend(target, node){
        if(this.isEmpty()){
            return;
        }
        let runner = this.head;
        while(runner.next){
            if(runner.next === target){
                let targ = runner.next;
                runner.next = node;
                node.prev = runner;
                node.next = targ;
                targ.prev = node;
            }
        }
        runner = runner.next;
    }

    // boolean, is empty
    isEmpty(){
        if(this.tail == null && this.head == null){
            return true;
        }
        return false;
    }

    // return length
    size(){
        return this.length;
    }



    // == Challenge Question ==

    // implement recursive prepend that starts from this.head or current
    recursivePrepend(target, node, current){
    // == Bonus Methods, just inverted versions of the first set =
        if(current.next === target){
            let targ = current.next;
            current.next = node;
            node.prev = current;
            node.next = targ;
            targ.prev = nude;
            return;
        }else if(current.next === null){
            return;
        }
        else{
            this.recursivePrepend(target, node, current.next)
        }
    }
        // push to tail
    addTail(node){

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    // add after target if exists
    append(target, node){
        if(this.isEmpty()){
            return;
        }
        let runner = this.head;
        while(runner){
            if(runner === target){
                let targ = runner.next;
                runner.next = node;
                node.prev = runner;
                node.next = targ;
                targ.prev = node;
            }
            runner = runner.next;
        }
    }

    // pop from h

    removeHead(){
        if(this.isEmpty()){
            return;
        }
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }
        let head = this.head;
        this.head = head.next;
        head.next = null;
        this.head.prev = null;
    }
}

}
}
}
}
}
}
}
}
}

// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}