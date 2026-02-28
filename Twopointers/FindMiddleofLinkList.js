class Node {
    constructor(value){
        this.data = value; 
        this.next = null;
    }
}

class LinkList{
    constructor(){
        this.head  = null; 
        this.count = 0;
    }

    append(value){
        const newNode = new Node(value);
        if(this.head == null){
         this.head = newNode;
         this.count++;
         return this;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = newNode;
        this.count++;
        return this;
    }

    print(){
        let str = 'head';
        let curr = this.head; 
        while(curr){
            str = str + ' --> ' + curr.data;
            curr = curr.next;
        }
        str = str + ' --> null';
        console.log(str +'-->'+ this.count);
    }
    getmiddle(){
        let midindex = Math.floor(this.count / 2);
        let curr = this.head;
        while(midindex-- > 0){
            curr = curr.next;
        }
        return curr.data;
    }
    
    removeNthNode(n){
        let nodetoremove = this.count - n -1;
        let curr = this.head;
        while(nodetoremove-- > 0){
            curr = curr.next 
        }
        curr.next = curr.next.next;
        return this;
    }
}

const arr = [0, 1, 2, 3, 4];

const link = new LinkList();

arr.forEach(el =>link.append(el));

link.print();
console.log(link.getmiddle());
link.removeNthNode(3);
link.print();