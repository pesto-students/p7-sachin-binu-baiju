//Question-6 Implement Queue using 2 Stacks
class Myqueue{
    constructor(){
        this.inputstack=[];
        this.outputstack=[]
    }
push(val){
     return this.inputstack.push(val)
}
pop(){
    if(this.outputstack.length){
         return this.outputstack.pop();
    }
    else{
        while(this.inputstack.length){
            
            this.outputstack.push(this.inputstack[this.inputstack.length-1])
            this.inputstack.pop()
        
        }
        return this.outputstack.pop();
    }
}
}

let myqueue = new Myqueue();

console.log(myqueue.push(1)); 
console.log(myqueue.push(2));
console.log(myqueue.push(3));
console.log(myqueue.push(4));
console.log(myqueue.push(5));
console.log(myqueue.pop());

console.log(myqueue);




