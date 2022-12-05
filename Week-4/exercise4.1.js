const PENDING = 0;
const FULLFILLED = 1;
const REJECT = 2;

class custompromise {
    constructor(executor) {

        let state = PENDING;
        let value = null;
        let handlers = [];
        let catchers = [];

        function resolve(result) {
            if (state !== PENDING) {
                return;
            }
            state = FULLFILLED;
            value = result;

            handlers.forEach((h) => h(value));
        }
        function reject(result) {
            if (state !== PENDING) {
                return;
            }
            state = REJECT;
            value = result;

            handlers.forEach((h) => h(value));
        }

        this.then = (function (callback) {
            if (state === FULLFILLED) {
                callback(value);
            }
            else {
                handlers.push(callback);
            }
        });

        this.catch = (function (err) {
            if (state === REJECT) {
                err(value);
            }
            else {
                catchers.push(err);
            }
        });
        executor(resolve, reject);
    }
}

const getnumber = (res,rej) =>{
    
        const random_number = Math.random();
        const rounded_value = Math.round(random_number)
        if(rounded_value % 5 === 0) {
            return res(`yes ${rounded_value}`)
        }
        rej(`no ${rounded_value}`)
    }

const answer = new custompromise(getnumber);
    answer.then((value)=>{
        console.log(value)
    })
    answer.catch((value)=>{console.log(value)})