//----- QUESTION -----//

// Perform binary search on an array of sorted integers.
// The solution must be O(log n) time complexity.



//----- SOLUTION -----//

// Set the left and right index pointers
// Loop through the array with a while loop
// Set the middle index
// If the target is smaller than the middle index, move the right index to the left of middle index
// If the target is larger than the middle index, move the left index to the right of the middle index
// If the target value is equal to the middle index, return it, otherwise return -1

// Video: https://www.youtube.com/watch?v=s4DPM8ct1pI



// Input: Array and a target number
const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;



// This function performs a Binary Search on an array
const search = function(nums, target) {
  
  // Store the left and right index
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  // Loop through the array
  while (leftIndex <= rightIndex) {

    // Calculate the middle index (make sure to use floor)
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    // If the target is smaller than the middle number,
    if (target < nums[middleIndex]) {

      // Move the right index to the left of the middle index
      rightIndex = middleIndex - 1;

    // If the target is larger than the middle number,
    } else if (target > nums[middleIndex]) {

      // Move the left index to the right of the middle index
      leftIndex = middleIndex + 1;

    // If the middle number is equal the target,
    } else {

      // Return the middle index
      return middleIndex;
    }
  }
    
  // If the target is not found return -1
  return -1;
};



// Test the binary search function
console.log(search(nums, target));
