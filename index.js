/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  // First Solution with space and time complexity O(n + k)
    // const uniqueArr = [...new Set(nums)];
    // nums.splice(0, nums.length, ...uniqueArr);
    // return uniqueArr.length;

  // Second Solution with space complexity O(1) and time complexity O(n)
    let k = 0;
  
    for (let i=0; i< nums.length; i++){
        if(nums[i] !== nums[i+1]) {
            nums[k] = nums[i]; // modify the nums array in-place 
            k++; // counting the length
        }
    }

    return k;
};
