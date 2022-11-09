//----- QUESTION -----//

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.



//---- SOLUTION -----//

// The solution is similar to the Remove Duplicates problem
// Use a slow and fast pointer to iterate through the array and swap 
// The slow pointer moves one index at a time
// The fast pointer moves to every number that isn't a zero
// When a non zero number is found, store it in the slow index
// Lastly, use a while loop to set the numbers from the slow index onwards to 0



// Input: An array of numbers
const nums = [0, 1, 0, 3, 12];



// This function moves the zeros to the back of the array
const moveZeroes = function(nums) {
    
  // Set the slow pointer to index 0
  let slow = 0;
  
  // Iterate through the array using the fast pointer
  for (let fast = 0; fast < nums.length; fast++) {
      
    // If the number at the fast pointer is not 0,
    if (nums[fast] !== 0) {
      
      // Set the slow pointer to the number
      nums[slow] = nums[fast];
      
      // Increment the slow pointer
      slow++;
    }
  }
  
  // Use a while loop to set all the numbers after the slow pointer to 0
  while (slow < nums.length) {
    
    // Set the number at the slow pointer to 0
    nums[slow] = 0;

    // Increment the slow pointer
    slow++;
  }
};



// Test the moveZeroes array
moveZeroes(nums);

// Print the modified array
console.log(nums);
