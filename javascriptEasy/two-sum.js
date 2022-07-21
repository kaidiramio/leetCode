// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// 1. I have a list or an array of numbers and a target sum to hit. 
// 2. Return the indexes of the two numbers that when added together hit the target sum.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    // nested for loops for each element (2) - this is slower time complexity
    for(let i=0; i<nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            // conditional stating if nums == target return them. 
            if(nums[i] + nums[j] == target){
                return[i, j]
            }
        }
    }
};


// more optimized could use map method??