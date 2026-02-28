class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.count++;
            return this;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.count++;
        return this;
    }

    print() {
        if (!this.head) {
            console.log('Empty list');
            return;
        }
        let str = '';
        let current = this.head;
        while (current) {
            str = str + '->' + current.value;
            current = current.next;
        }
        console.log(str);
    }

    Delete(index){
        if(this.head  == Null){
            return 'this is null';
        }
        let curr = this.head; 
        let count = 0;
        while(curr.next && !index == count){
            curr = curr.next
            count++;
        }
        
    }

}

const list = new LinkList();
list.append(23);
list.append(54);
list.append(265);
list.append(234);
list.print();
