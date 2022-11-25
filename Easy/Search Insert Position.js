//----- QUESTION -----//

// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.



//----- SOLUTION -----//

// Use binary search to find the insertion index.
// If the exact value is not present, return the left index at the end.
// This is where the value should be inserted.

// Video: https://www.youtube.com/watch?v=K-RYzDZkzCI



// Input: An array of integers and a target number
const nums = [1,3,5,6];
const target = 2;



// This function performs a binary search on an array and returns the insertion index
const searchInsert = function(nums, target) {
    
  // Create the left, right and middle index
  let left = 0;
  let right = nums.length - 1;
  let middle;
  
  // Loop through the array
  while (left <= right) {
      
    // Calculate the middle index
    middle = Math.floor((left + right) / 2);
    
    // If the number at middle is equal to the target,
    if (target === nums[middle]) {
        
      // Return the middle index
      return middle;
        
    // If the target is smaller than the middle number,
    } else if (target < nums[middle]) {
        
      // Move the right index before the middle index 
      right = middle - 1;

    // If the target is larger than the middle index,
    } else if (target > nums[middle]) {
        
      // Move the left index after the middle index
      left = middle + 1;
    }
  }
  
  // Return the left index, it is where the value should be inserted
  return left;
};



// Test the searchInsert function
console.log(searchInsert(nums, target));
