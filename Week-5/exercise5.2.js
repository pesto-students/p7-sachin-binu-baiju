

function isVowel(char){
    return"aeiou".includes(char);
}

function vowelcount(str) {

    let map = new Map();

    for (x of str) {
        lowercasex = x.toLowerCase();
        if(isVowel(x)){
            if(map.has(lowercasex)){
                map.set(lowercasex,map.get(lowercasex)+1);
            }
            else {
                map.set(lowercasex,1)
            }
            
        }
       
    }
    return map;
}

console.log(vowelcount('biiiiinu baiju'));



