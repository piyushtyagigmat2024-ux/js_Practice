function Node(val){
    this.val = val;
    this.next = null;
}

var myLinkList = function(){
    this.head = null;
    this.size = 0;
}

myLinkList.prototype.addAtHead = function(val){
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}




