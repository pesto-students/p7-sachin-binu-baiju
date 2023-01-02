
/*Async/await*/

function one() {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('one'); 
        },1000)
    }) 
}
function two() {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('two');
        },2000)
    })  
}
function three() {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('three');
        },3000)
    })

}
 async function async_function(){
    
    try {
        let onefun = one();
        let oneresult = await onefun;
        let twofun = two();
        let tworesult = await twofun;
        let threefun =three();
        let threeresult = await threefun;
        
        console.log(oneresult);
        console.log(tworesult);
        console.log(threeresult);
    }catch (e){
        console.error('error'+e);
    } 
 }
 async_function();






    function one1(callback) {
        setTimeout(()=>{
            callback("one-gen"); 
        },100)
        
    }
    function two2(callback) {
        setTimeout(()=>{
            callback("two-gen"); 
        },200)
        
    }
    function three3(callback) {
        setTimeout(()=>{
            callback("three-gen"); 
        },300)
    }

function *generator(resume){

    console.log(yield one1(resume)); 
    console.log(yield two2(resume)); 
    console.log(yield three3(resume));
    
}
function resume(callbackvalue){

    genitr.next(callbackvalue);

}
let genitr = generator(resume);
genitr.next();

    

