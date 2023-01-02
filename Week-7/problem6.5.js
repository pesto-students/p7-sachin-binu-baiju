//Pair With Given Difference

var pair_diff = function(nums, target) {
    let firstno = 0;
    let secondno=firstno+1;
        while(firstno<secondno){
            if(target==Math.abs((nums[firstno])-(nums[secondno]))){
                return 1;
            }
            else if(secondno==nums.length){
                firstno++;
                secondno=firstno;
            }
            else if(firstno==nums.length && secondno==nums.length){
                return 0;
            }
            secondno++;
        }    
};

console.log(pair_diff([5, 10, 3, 2, 50, 80],78));
console.log(pair_diff([-10,20],30));