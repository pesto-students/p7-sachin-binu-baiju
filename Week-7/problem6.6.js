//Threesum
function threesum(nums,target){
    nums.sort((a,b)=>a-b)
    let ans=nums[0]+nums[1]+nums[2];
    for(i=0;i<nums.length-2;i++){
        start=i+1;
        end=nums.length-1;
        while(start<end){
            sum=nums[i]+nums[start]+nums[end]
            if(sum>target){
                end--;
            }
            else if(sum<target){
                start++
            }
            if(Math.abs(target-ans)>Math.abs(target-sum)){
                ans=sum;
            }
        }
    }
    return ans
}

console.log(threesum([-1, 2, 1, -4],1));