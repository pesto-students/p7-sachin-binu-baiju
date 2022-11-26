
function createStack() {
    items=[];
    return {
        
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(15);
console.log(stack.pop()); 
console.log(stack.items); 
