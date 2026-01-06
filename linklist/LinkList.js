class Node{
    constructor(data){
        this.value = data; 
        this.next = null;
    }
}

class LinkList{
    constructor(){
        this.head = null; 
        this.count=0;
    }

    append(value){
        let newNode = new Node(value);
        
        if(this.head == null){
            this.head = newNode;
        }else{    
            let curr = this.head;
            while(curr.next){
                        curr = curr.next;
                    }
            curr.next = newNode
            this.count++;
        }
        return this; 
    }
    
    prepend(value){
        if(count<=0){
            this.append(value)
        }else{
            let node = new Node(value);
            node.next = this.head
            this.head = node;
            this.count++; 
        }
        return this;
    }

    insertAt(value, index){
        if(index<0 || index> this.count) return false;
        let newnode = new Node(value);
        let prev = this.head;
        for(let i=0; i< index; i++){
            prev = prev.next;
        }

        newnode.next = prev.next;
        prev.next = newnode;
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
    
    DeleteforBignning(){
        if(this.head == NULL)
            return null;
        let remove = this.head;
        this.head = this.remove.next;

        return remove.value;
    }

    DeleteAtindex(index){
        let curr = this.head; 
        for(let i=0; i < index; i++ ){
            curr = curr.next;
        }
        let removed = curr.next;
        curr.next = curr.next.next;
        count--;
        return removed.value; 
    }
    
    DeleteAtEnd(){
       if(this.head == null) return null; 
      let curr = this.head; 
      while(curr.next.next){
        curr = curr.next;
      }
      let removed = curr.next; 
      curr.next = null;
      this.count --; 
      return this;
    }

    search(value){
        
        let curr = this.head; 
        while(curr){
            if(curr.value === value) return value; 
            curr = curr.next; 
        }grvefgv
        return false; 
    }
 
    size(){
        return this.count;
    }
}

const val =  new LinkList();
val.append(23);
val.append(25);
val.append(29);
val.insertAt(86, 1);
val.print();