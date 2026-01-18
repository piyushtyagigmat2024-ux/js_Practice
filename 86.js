
class  Node{
    constructor(valaue){
        this.value = this.value; 
        this.next = null;
    }
}

class LinkList{
    constructor(){
        this.count= 0;
        this.head = null
    }

    append(val){
        let newNode = new Node(val);
        if(this.head == null){
            this.head = newNode;
        }

        let curr = this.head;
        while(curr){
            curr = curr.next;
        }
        curr.next = newNode;
        return this; 
    }

    partitonlist(target){
     let left  = new Node(0); 
     let 
     while(curr){
        if(curr.value && ){

        }

     }
    }
}
