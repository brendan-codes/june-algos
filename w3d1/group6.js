// Daniel, Moe, Jeff

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
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
            this.length++;
            return;
        }
        node.next=this.head;
        this.head.prev = node;
        this.head=node;
        this.length++;
        return;
    }

    // pop from tail
    removeTail(){
        var temp = this.tail;
        this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;
    }

    // add before target if exists
    prepend(target, node){
        var runner=this.head;
        for(var count=0;count<this.length;count++){
            if(runner==target){
                node.prev=runner.prev;
                node.next=runner;
                runner.prev=node;
                if(node.prev!=null){
                    node.prev.next = node;
                }
                else
                    this.head=node;
                this.length++;
                return;
            }
            runner=runner.next;
        }

    }

    // boolean, is empty
    isEmpty(){
        return this.head === null;
    }

    // return length
    size(){
        return this.length;
    }



    // == Challenge Question ==

    // implement recursive prepend that starts from this.head or current
    recursivePrepend(target, node, current){
        if(current==null)
            return;
        if(current==target){
            node.prev=target.prev;
            node.next=target;
            target.prev=node;
            if(node.prev!=null){
                node.prev.next = node;

            }
            else
                this.head=node;
            this.length++;
            return;
        }
        this.recursivePrepend(target,node,current.next);
    }




    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node){
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.length++;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return;
    }

    // add after target if exists
    append(target, node){
        var runner=this.head;
        for(var count=0;count<this.length;count++){
            if(runner==target){
                node.next=runner.next;
                node.prev=runner;
                runner.next=node;
                if(node.next!=null){
                    node.next.prev=node;
                }
                else
                    this.tail=node;

                this.length++;
            }

        }
    }

    // pop from head
    removeHead(){
        var temp = this.head;
        this.head = temp.next;
        this.head.prev = null;
        temp.next = null;
        this.length--;
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