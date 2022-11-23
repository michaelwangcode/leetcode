//----- QUESTION -----//

// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.



//----- SOLUTION -----//

// Use a result variable and the Exclusive OR (XOR) ^ operator.
// Iterate through the numbers and use the XOR operator on the index and value.
// All of the numbers will cancel out, except for the missing number.

// Another solution is to use subtraction instead of the XOR operator.
// Iterate through the numbers, subtract the value but add the index number.
// All of the numbers will cancel out, except for the missing number.

// Video: https://www.youtube.com/watch?v=WnPLSRLSANE



// Input: An array of integers from [0, n] with one integer missing
let nums = [9,6,4,2,3,5,7,0,1];



// This function returns the missing number (using XOR)
const missingNumber = function(nums) {

  // Create the result and counter variable
  let result = 0;
  let i = 0;
  
  // Iterate through the nums array
  for (i = 0; i < nums.length; i++) {
      
    // Set the result to the result XOR the index XOR the number
    result = result ^ i ^ nums[i];
  }
  
  // Use the XOR operator on the last index
  result = result ^ i;
  
  // Return the missing number
  return result;
};



// This function returns the missing number (Using addition and subtraction)
const missingNumber2 = function(nums) {
    
  // Store the result
  let result = 0;
  
  // Iterate through the nums array
  for (let i = 0; i < nums.length; i++) {
      
    // Subtract the current value from the result and add the index
    result = result - nums[i] + i;
  }    
    
  // Add the last index
  result = result + nums.length;
 
  // Return the result
  return result;
}



// Test the missingNumber functions
console.log(missingNumber(nums));
console.log(missingNumber2(nums));
