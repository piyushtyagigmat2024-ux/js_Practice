class Node {
    constructor(value){
        this.value = value; 
        this.next = null
    }
}

class LinkList2{
    constructor(){
        this.head = null; 
        this.count++;
    }

    append(value){
        const newnode = new Node(value);
        if(this.head == null){
            this.head = newnode;
            this.count++;
            return this;
        }
        let curr = this.head
        if(curr){
            curr = curr.next;
        }
        curr = newnode;
        this.count++;
        return this;
    }

    print(){
        let curr = this.head; 
        if(curr.next){
            console.log(curr.value);
        }
    }
}


const val = new LinkList2();
val.append(54);
val.append(64);
val.append(74);
val.append(84);
val.append(94);
val.print();
