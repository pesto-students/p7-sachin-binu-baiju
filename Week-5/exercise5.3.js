function hasDuplicates(array) {
    set = new Set(array);
    if(set.size !== array.length) {

        return 'has duplicate';
    }
    else{
        return `not duplicate value `+true;
    }
}

console.log(hasDuplicates([1,2,3,4])); 