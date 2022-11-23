//----- QUESTION -----//

// Given an array of integers where every number appears twice except for one,
// find and return the unpaired number
// Do so in constant O(1) space complexity



//----- SOLUTION -----//

// Use the XOR (exclusive or) operator (^) and XOR every number in the array together
// Any number XOR itself is 0, and the operation is transitive
// Any number XOR 0 is itself
// By starting with 0 and performing the XOR operation on every number in the array,
// we will end up with the number that does not have a pair

// XOR Table:
// a | b | a^b
// 0 | 0 |  0
// 0 | 1 |  1
// 1 | 0 |  1
// 1 | 1 |  0

// A less efficient solution is to use a hash map and track the occurrence of each integer
// After, iterate through the hash map and return the number with 1 occurence

// Video: https://www.youtube.com/watch?v=qMPX1AOa83k



// Input: An array of integers
const nums = [4, 1, 2, 1, 2];



// This function returns the only number in the array that does not appear twice
const singleNumber = function(nums) {
  
  // Store the result as a 0
  let result = 0;
  
  // Iterate through the numbers
  for (let num of nums) {
      
    // Set the result to the result XOR the number
    result = result ^ num;
  }
  
  // Return the result
  return result;
};



// Test the singleNumber function
console.log(singleNumber(nums));
