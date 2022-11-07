//----- QUESTION -----//

// Given a rotated array, find the minimum value in the array.
// The algorithm must run in O(log n) time.
// Example of rotated array: [3,4,5,1,2] is [1,2,3,4,5] rotated 3 times.



//----- SOLUTION -----//

// A rotated array consists of two halves: A left half and a right half
// Every number in the left half will be bigger than every number in the right half
// This means the minimum value will always be in the right half

// Use a left, right and middle pointer to perform a modified binary search
// Use a variable to keep track of the current minimum
// Use a while loop to iterate through the array
// If the left index pointer is ever smaller than the right index, calculate and return the minimum value
// Otherwise, calculate the middle pointer and move the left or right pointer
// depending on if the middle number is greater than the left number
// Repeat until the minimum is found

// Video: https://www.youtube.com/watch?v=nIVW4P8b1VA



// Input: An array of numbers
const nums = [4, 5, 6, 7, 0, 1, 2];



// This function returns the minimum value in a rotated array
const findMin = function(nums) {
    
  // Keep track of the minimum value (store it as the first value for now)
  let minimumValue = nums[0];
  
  // Store the left and right indices
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  
  
  // Iterate through the array using a modified binary search
  while (leftIndex <= rightIndex) {
      
    // If the left value is ever smaller than the right value,
    if (nums[leftIndex] < nums[rightIndex]) {
        
      // The minimumValue is the smaller number between the minimum and the left index
      minimumValue = Math.min(minimumValue, nums[leftIndex]);
      
      // Return the minimum value
      return minimumValue;
    }
      
    // Calculate the middle index value
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    
    // Store the minimum value
    minimumValue = Math.min(minimumValue, nums[middleIndex]);
    
    // If the middle value is greater or equal to the left index value,
    // That means we are in the left half of the array
    // We need to be in the right half to find the minimum
    if (nums[middleIndex] >= nums[leftIndex]) {
        
      // Move the left index to the right of the middle index
      leftIndex = middleIndex + 1;
    
    // Otherwise we are in the right half of the array, 
    // This is the half where the smallest value will be
    } else {
        
      // Move the right index to the left of the middle index
      rightIndex = middleIndex - 1;
    }
  }
  
  // Return the minimum value
  return minimumValue;
};



// Test the findMin function
console.log(findMin(nums));
