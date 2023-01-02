let obj = {
     
    [Symbol.iterator](){
        n=5;
        i=0;

        let old=0;
        let new1=0;
        return {
            next() {
               if(i<n) {
                i++;
                [old,new1] = [new1,(old+new1) || 1]
                return{ value: old,done: false };
               }
               else{
                return{ done: true };
               }
            },
        };
    },
};

for(let x of obj ){
    console.log(x);
}
