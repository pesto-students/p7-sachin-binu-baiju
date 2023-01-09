//Question-4 Paranthesis Checker
  function balanced(s){
    stack=[];
    const map = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    for(var i=0;i<s.length;i++){
        if(s[i]=="{" || s[i]=="[" || s[i]=="("){
            stack.push(s[i])
        }
        else if(s[i]=="}" || s[i]=="]" || s[i]==")"){
            var openbracket = stack.pop();
            if(map[s[i]]==openbracket){
                continue;
            }
            else{
                return false
            }
        }
        
    }
    if(!stack.length){
        return true
    }
    else {
        return false
    }
    

  }

  console.log(balanced("{([])}"));
  console.log(balanced("()"));
  console.log(balanced("([}"));



// stack = [];

// stack.push(4)
// var s=stack.pop()

// console.log(stack.empty());

// s="[]{}'"

// for(var i=0;i<s.length;i++){
//    if(s[i]=="{" ||s[i]=="}" || s[i]=="[" || s[i]=="]"){
//     continue
//    }
//    else{
//    // console.log("false");
//     break;
//    }
// }
// //console.log(true); 

// const map = {
//     '}': '{',
//     ']': '[',
//     ')': '(',
// };

// console.log(map['}']);