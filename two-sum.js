let nums = [2,7,11,15], target = 9;
var twoSum1 = function(nums, target) {
    let map = new Map();
    for(let i=0; i<nums.length; i++){
        let num1 = nums[i];
        let num2 = target-num1;
        if(map.has(num2)){
            return [i,map.get(num2)];
        } else {
            map.set(num1, i);
        }  
    }
};
var twoSum = function(nums, target) {       
    let map = new Map();
    for(let i=0; i<nums.length; i++){
         num = nums[i];
         //console.log(map.get(num));
         console.log(map);
        if(map.get(num)===undefined) 
            map.set(target-num,i);
        else return [map.get(num),i];
    }       
};
console.log(twoSum1(nums,target));