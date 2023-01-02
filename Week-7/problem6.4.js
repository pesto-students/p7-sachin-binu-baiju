//Best time to buy and sell stock
function bestTimetoBuyStocks(nums){
    let first = 0;
    let second = first+1;
    let ans=-Infinity;
    while(first<second){
      let max=0;
      if(nums[first]<nums[second]){
        max=Math.abs(nums[first]-nums[second]);
      }
        if(second==nums.length){
            first++;
            second=first;
        }
        if(first==nums.length && second==nums.length){
            return ans
        }
        second++;
       
        if(ans<max){
            ans=max;
        }    
    }
    if(ans<=0){
        return 0
    }
    return ans
}

console.log(bestTimetoBuyStocks([7,6,4,3,1]));