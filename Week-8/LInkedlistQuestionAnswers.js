//LinkedListQuestions 1-3
class Node{
    constructor(val){
      this.val = val
      this.next = null
    }
  
  }
  
  class SinglyLinkedList{
      constructor(){
        this.head = null
        this.tail = null
        this.length = 0
      }
    
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this
    }
   traverse(){
    var a=[]
    var current = this.head;
    while(current){
        a.push(current.val)
        current = current.next
    }
    console.log(a);
   }
   //Question-1
   reverse(){
    
    var node = this.head;
    this.head = this.tail
    this.tail = node
    var prev = null;
    var next;
    for(var i=0;i<list_reverse.length;i++){
        next = node.next
        node.next = prev
        prev = node
        node = next
    }  
    return this
   }
   //Question-2
   rotate(k) {
    let previousHead = this.head,
        previous = this.head,
        current = this.head;

    let i = 1;
    while(current.next){
        if(i == k+1){
            this.head = current;
            previous.next = null;
        }
        previous = current;
        current = current.next;
        i++;
    }
    current.next = previousHead;
    return this;
    }
    //Question-3
    detectloop(){
        this.head.next.next.next.next = this.head;
        let slower_p = this.head;
        let faster_p = this.head;
        while(slower_p.next!=null && faster_p.next!=null){
            slower_p=slower_p.next;
            faster_p=faster_p.next.next;
            if(slower_p==faster_p){
                return true;
            }
         }
    return false
   }
}

var list_rotate = new SinglyLinkedList();
list_rotate.push(1); 
list_rotate.push(2); 
list_rotate.push(3); 
list_rotate.push(4); 
list_rotate.push(5); 
var list_reverse = new SinglyLinkedList();
list_reverse.push(1); 
list_reverse.push(2); 
list_reverse.push(3); 
list_reverse.push(4); 
list_reverse.push(5); 
var list_detectloop = new SinglyLinkedList();
list_detectloop.push(1); 
list_detectloop.push(2); 
list_detectloop.push(3); 
list_detectloop.push(4); 
list_detectloop.push(5); 

list_reverse.reverse();
list_reverse.traverse();

list_rotate.rotate(3);
list_rotate.traverse();

console.log(list_detectloop.detectloop()); 




