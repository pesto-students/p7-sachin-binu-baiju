function memoize(fn) {
    let cache = new Map();
    return function (...args) {
        const key = args.toString();
        // console.log(cache);
        if(cache.has(key)) {
           return cache.get(key);
        }
        
        cache.set(key, fn(...args));
        return cache.get(key);
        
    }
}

function multiply(...args) {
    var multi = 1;
   for(var i=0;i<args.length;i++) {
    multi = multi * args[i];
   }
   return multi;

}



function time(fn) {
    console.time();
    fn();
    console.timeEnd()

}


const multiply_memoize = memoize(multiply);

console.log("WITH MEMOIZE");


time(() => multiply_memoize(1000000000000,2000000000,300000000,400000000));
time(() => multiply_memoize(1000000000000,2000000000,300000000,400000000));

time(() => multiply_memoize(123456789123445,2345678912345,3345678912345,12345456789,
    345252632465,154635,23642346,236,132,1231,123132,2131321,1234234,43535));
time(() => multiply_memoize(123456789123445,2345678912345,3345678912345,12345456789,
        345252632465,154635,23642346,236,132,1231,123132,2131321,1234234,43535));


time(() => multiply_memoize(5000000000000,6000000000,700000000,200000000000,30000000000
        ,40000,5000000000000,6000000000,700000000,5000000000000,6000000000,700000000,1312431234,2341
        ,213412,24124,54356,768567,76967,2342,2432,3452346234632452345,13534675463241,25245354352));
time(() => multiply_memoize(5000000000000,6000000000,700000000,200000000000,30000000000
        ,40000,5000000000000,6000000000,700000000,5000000000000,6000000000,700000000,1312431234,2341
        ,213412,24124,54356,768567,76967,2342,2432,3452346234632452345,13534675463241,25245354352));


