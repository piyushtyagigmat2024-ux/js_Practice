class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkList{
    constructor() {
        this.count= 0;
        this.head= null;
    }

    append(value){
        const newNdoe = new Node(value);
        if(this.head == null){
            this.head = newNdoe;
            return this;
        }

        let curr = this.head; 
        while(curr.next){
            curr= curr.next; 
        }
        curr.next = newNdoe;
        this.count++;
        return this; 
    }
    print(){
        let curr = this.head; 
        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }
    revers(){
        let curr = this.head; 
        let prev; 
        while(curr){
            const next = curr.next; 
            curr.next = prev; 
            prev = curr;
            curr = next;
        }
        this.head = prev;
        return this; 
    }
}


const val = new LinkList();
val.append(23);
val.append(43);
val.append(63);
val.append(73);
val.print();
val.revers();
console.log(`cadva`);
val.print();