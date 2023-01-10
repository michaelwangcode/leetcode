//----- QUESTION -----//

// Given an integer array nums and an integer k, return the k most frequent elements. 

// Example:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]



//----- SOLUTION -----//

// Solve in linear time using a hash map and bucket sort

// 1. Use a hash map to store the frequencies of each number
// 2. Use an array for bucket sort
//    The indices represent frequencies of each number
//    The values are an array that stores all numbers with that frequency
// 3. Iterate through the array from back to front to get the k most frequent elements

// Video: https://www.youtube.com/watch?v=YPTqKIgVk-k



// Input: An array of integers and an integer k
const nums = [4,1,-1,2,-1,2,3];
const k = 2;



// This function returns the k most frequent numbers from an array
const topKFrequent = function(nums, k) {

  // Create hash map to store frequencies of numbers in nums
  let hashMap = {};

  // Iterate through the nums array and add values to hash map
  for (let num of nums) {
    if (hashMap[num] === undefined) {
      hashMap[num] = 1;
    } else {
      hashMap[num] += 1;
    }
  }


  // Create array of frequencies, with the frequency as the index
  let array = [];

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    
    // Set a blank array as each value
    array[i] = [];
  }


  // Iterate through the values in the nums array
  for (let i = 0; i < nums.length; i++) {

    // Store the number of times the number occurs in the nums array, minus 1
    // The minus 1 is used to avoid indexing errors (frequency will be used as an index)
    let frequency = hashMap[nums[i]] - 1;

    // If the array does not contain the number yet,
    if (array[frequency].includes(nums[i]) === false) {
    
      // Push the number at the corresponding frequency value
      array[frequency].push(nums[i]);
    }
  }
  
  // Get rid of the all empty arrays by flattening the array
  array = array.flat();
  

  // Create a result array to store the k most frequent numbers
  let result = [];

  // Iterate through the array from largest to smallest (back to front)
  for (let i = nums.length - 1; i >= 0; i--) {

    // If the value is not undefined,
    if (array[i] !== undefined) {

      // Push the value to the result array
      result.push(array[i]);

      // Decrement k buy 1
      k--;
    }

    // If k is 0, exit the loop
    if (k === 0) {
      break;
    }
  }

  // Return the result array
  return result;
};



// Test the topKFrequent function
console.log(topKFrequent(nums, k));
