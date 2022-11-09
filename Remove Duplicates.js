//----- QUESTION -----//

// Given a sorted array of integers, remove all duplicate numbers in-place
// Return the length of the array with duplicates removed



//----- SOLUTION -----//

// Have two pointers, a slow pointer and a fast pointer
// The slow pointer moves one index at a time, it tracks the next index to replace
// The fast pointer moves until a new number is found
// When a new number is found, replace the slow index with this new number
// Lastly, use the splice function (with a negative value) to remove that many from the end of the array



// Input: A sorted array of numbers
const nums = [0,0,1,1,1,2,2,3,3,4];



// This function removes duplicate numbers from a sorted array in-place
const removeDuplicates = function(nums) {

  // Start the slow pointer at index 1
  let slow = 1;
  
  // Iterate through the array using the fast pointer
  for (let fast = 1; fast < nums.length; fast++) {

    // Advance the fast index pointer until it points to a new number
    // If the fast pointer is different from the previous number,
    if (nums[fast] != nums[fast - 1]) {

      // Set the slow index to the value in the fast index
      nums[slow] = nums[fast];

      // Move the slow pointer forward by 1
      slow++;
    }
  }
  
  // Remove the end of the array 
  // (Works if length > 1, not necessary for LeetCode submission)
  nums.splice(-(nums.length-slow))

  // Return the slow pointer index 
  // (Required in the original problem)
  return slow;
};



// Test the removeDuplicates function
removeDuplicates(nums);

// Print the new values in the array
console.log(nums);
