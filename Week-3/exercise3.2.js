// firstname = "binu";

// function print() {
//      var firstname = "binu";
//     return this.firstname;
// } 

// const fun = print();
// console.log(fun); 

// var counter = {
//     count:0,
//     inc:function () {
//         console.log(this.count++);
//     }
// }
// counter.inc();

let details = {
    firstname:"binu",
    lastname:"Baiju"
}
function printname(hello,place) {
   console.log(hello+','+this.firstname +' '+this.lastname +' from '+place); 
}
function printname2() {
    console.log(','+this.firstname +' '+this.lastname); 
}
call_=printname.call(details,"hello","kerala");
// console.log(call_);
let bindss = printname2.bind(details);
bindss();
apply_=printname.apply(details,["hello","kerala"]);
// console.log(apply_);