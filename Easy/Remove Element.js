//----- QUESTION -----//

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The relative order of the elements may be changed.

// The first k elements of nums should hold the final result. 
// It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.



//----- SOLUTION -----//

// Use two pointers, a slow pointer and a fast pointer.

// Suppose the given value is 2.
// Our goal is to move all of the non-val numbers up the array to replace all the 2's.
// This can be done by swapping elements.

// Iterate through the array
// If we don't encounter a 2, copy the value of fast into slow, and increment slow and fast.
// If we encounter a 2, move the fast pointer up without doing anything.
// At the end, we will have all the non 2 elements in the first k elements of the array.

// Note: 
// If the slow and fast pointer are at the same index, we basically move the element to its current position (array remains the same).
// We also don't care what the array looks like after the first k elements, so we don't need to copy the 2's to the back. 
// All we have to do is move the non 2 values up.

// Video: https://www.youtube.com/watch?v=Pcd1ii9P9ZI



// Input: An array of numbers, and a target value to remove
const nums = [0,1,2,2,3,0,4,2];
const val = 2;



// This function removes a given element from the array by moving all the current numbers up
const removeElement = function(nums, val) {
  
  // Create a slow pointer
  let slow = 0;    
  
  // Iterate through the array of numbers
  for (let fast = 0; fast < nums.length; fast++) {
      
    // If the current element is not equal to the target value,
    if (nums[fast] !== val) {
          
      // Copy the number to the slow index
      nums[slow] = nums[fast];

      // Move the slow pointer up by 1
      slow++;
    }
  }
  
  // Print what the array looks like at the end (not needed for actual solution)
  console.log(nums);

  // Return the value of k
  return slow;
};



// Test the removeElement function
console.log(removeElement(nums, val));
