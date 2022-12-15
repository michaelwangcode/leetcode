//----- QUESTION -----//

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.



//----- SOLUTION -----//

// You can solve this problem with a single iteration of a for loop
// Create a hash map that keeps track of a value and its index
// Iterate through the array
//  - Check if any value in the hash map pairs with the current value
//  - Add the current value to the hash map

// Video: https://www.youtube.com/watch?v=KLlXCFG5TnA



// Inputs: The given integer array and target number
const nums = [2, 7, 11, 15];
const target = 9;



// This function takes an integer array and target number
// It returns the indices of two integers that add up to the target
const twoSum = function(nums, target) {

  // Create a hash map
  let hashMap = {};


  // Iterate through the nums array
  for (let i = 0; i < nums.length; i++) {

    // Calculate the pair value for the current value, then convert to string
    let pair = (target - nums[i]);
    
    // Check if any value in the hash map pairs with the current value
    if (hashMap[pair] !== undefined) {

      // If so, return its index and the index of the current number
      return [hashMap[pair], i];
    }
    

    // After checking, store the current value in the hash map object (note: the key is a string)
    hashMap[nums[i]] = i;
  }
};



// Test the twoSum function
console.log(twoSum(nums, target));
