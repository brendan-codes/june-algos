//Shivani, Nicholas, and Jerry


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
        if(this.head == null){
            this.head= node;
            this.tail= node;
        }else{
            let current =this.head;
            this.next=current.next;
            this.head=node;
        }
    }

    // pop from tail
    removeTail(){
        this.tail=null;
    if(current.next==null){
        current=this.tail;
    }
    let head = this.head;
    if(head.next==null){
    head= this.addTail;
    }

    }

    // add before target if exists
    prepend(target, node){
        let targetRunner = this.head;
        if(this.head == null){
            this.head =node;
        }while(targetRunner.data != target) {
            targetRunner = targetRunner.next;}
            if(targetRunner.data == target){
            targetRunner = node;
            targetRunner.next=

        }
    }

    // boolean, is empty
    isEmpty(){
        if(this.head==null){
            return true;
        }
        else{
            return false;
        }
    }

    // return length
    size(){
        let temp =this.head;
        let length=0;
        while(temp != null){
            length++;
            temp = temp.next;
        }
        return length;
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