//Question-5 Next Greater Element
function greaterelement(arr,n){
    stack=[];
    ans=[];
    for(var i=n-1;i>=0;i--){
        while(stack.length && arr[i]>=stack[stack.length-1]){
            stack.pop();
        }
        if(arr[i]<stack[stack.length-1]){
            ans[i]=stack[stack.length-1]
        }
        else{
            ans[i]=-1;
        }
        stack.push(arr[i])
    }
    return ans
}


console.log(greaterelement([1,3,2,4],4));
console.log(greaterelement([6,8,0,1,3],5));




