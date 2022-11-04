//----- QUESTION -----//

// Given an array of numbers, return an answer array 
// where answer[i] is equal to all of the numbers in the array multiplied together, except nums[i]
// For example: nums = [1, 2, 3, 4] would return [24, 12, 8, 6].

// You cannot use division and you must use constant memory 



//----- SOLUTION -----//

// This problem can be solved with the concept of a prefix and postfix array

// If the original array is: [a, b, c, d]
// The prefix array is: [a, ab, abc, abcd]
// The postfix array is: [abcd, bcd, cd, d]
// The answer array is: [bcd, acd, abd, bcd]

// The prefix array is computed by iterating forwards
// The postfix array is computed by iterating in reverse

// A full array is not needed for prefix and postfix, just a variable for keeping track of the current value
// The answer array is computed by multiplying the appropriate parts of the prefix and postfix array

// Video: https://www.youtube.com/watch?v=bNvIQI2wAjk



// Input: Array of Integers
const nums = [1, 2, 3, 4];



// This function takes an array of numbers and returns a specific array of products
const productExceptSelf = function(nums) {
    
  // The answers array (contains an offset value of 1)
  let answers = [1];

  // The prefix keeps track of the product of the numbers
  let prefix = 1;

  // The postfix keeps track of the product of the numbers going backwards
  let postfix = 1;


  // First loop: Fill the answers array with the prefix values
  // Start at index 0 and stop one before the end of the array
  for (let i = 0; i < nums.length - 1; i++) {
    
    // The array value is multiplied to the prefix
    prefix = prefix * nums[i];

    // The prefix value is stored in the array
    answers.push(prefix);
  }
  
  // Second loop: Multiply the prefix with the postfix values
  // Start at the last index and stop at index 1
  for (let i = nums.length - 1; i > 0; i--) {

    // The array value is multiplied to the postfix
    postfix = postfix * nums[i];
    
    // The answers value at index i - 1 is multiplied by the postfix
    answers[i - 1] = answers[i - 1] * postfix;
  }

  // Return the answers array
  return answers;
};



// Test the productsExceptSelf function
console.log(productExceptSelf(nums));

