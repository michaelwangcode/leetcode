//----- QUESTION -----//

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.



//----- SOLUTION -----//

// Use the Boyer-Moore Majority Vote Algorithm to solve this in linear time with constant space

// Create a number variable to track the current number
// Create a count variable to track the number of occurrences
// Iterate through the array; Add 1 for each occurence and subtract 1 for other numbers
// If the count ever reaches 0, start tracking the next number

// For a less space efficient solution, you can use a hash map to track the majority element

// Video: https://www.youtube.com/watch?v=7pnhv842keE



// Input: An array of integers with a majority number
let nums = [2,2,1,1,1,2,2];



// This function returns the majority element from an array
const majorityElement = function(nums) {
    
  // Stores the current number
  let num = 0;

  // Stores the number of occurrences for the current number
  let count = 0;
  
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
      
    // If the count ever drops to 0,
    if (count === 0) {

      // Store the number at index i as the current number
      num = nums[i];
    }
    
    // If the current number is equal to the value in num,
    if (nums[i] === num) {

      // Increment the count
      count++;

    // Otherwise,
    } else {

      // Decrease the count
      count--;
    }
  }
  
  // Return the stored number, this is the majority number
  return num;
};



// Test the majorityElement function
console.log(majorityElement(nums));
