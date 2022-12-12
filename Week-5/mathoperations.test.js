
const mathOperations = require("./mathoperations");

describe("MathOperations",()=>{
    test("sum :-adding 1 & 2 return 3 ",()=>{
        var result = mathOperations.sum(1,2);
        expect(result).toBe(3)
    })
    test("sum :-adding 1 & 2 return 10 will be incorrect",()=>{
        var result = mathOperations.sum(-1,2);
        expect(result).toBe(1)
    })
    test("sum :-adding 1 & 2 return 3 ",()=>{
        var result = mathOperations.sum(1,-2);
        expect(result).toBe(-1)
    })
    test("sum :-adding 1 & 2 return 3 ",()=>{
        var result = mathOperations.sum(-1,-2);
        expect(result).toBe(-3)
    })
    test("diff :-substracting 1 from 2 return 3 ",()=>{
        var result = mathOperations.diff(1,2);
        expect(result).toBe(-1)
    })
    test("diff :-substracting 3 from 1 return 3 ",()=>{
        var result = mathOperations.diff(-1,2);
        expect(result).toBe(-3)
    })
    test("diff :-substracting 3 from 1 return 3 ",()=>{
        var result = mathOperations.diff(1,-2);
        expect(result).toBe(3)
    })
    test("diff :-substracting 3 from 1 return 3 ",()=>{
        var result = mathOperations.diff(-1,-2);
        expect(result).toBe(1)
    })
    test("product :-substracting 3 from 1 return 3 ",()=>{
        var result = mathOperations.product(1,2);
        expect(result).toBe(2)
    })
    test("product :-substracting 3 from 1 return 3 ",()=>{
        var result = mathOperations.product(-1,2);
        expect(result).toBe(-2)
    }) 
    test("product :-substracting 3 from 1 return 3 ",()=>{
        var result = mathOperations.product(-1,-2);
        expect(result).toBe(2)
    })   

})