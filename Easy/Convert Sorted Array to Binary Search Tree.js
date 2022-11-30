//----- QUESTION -----//

// Given an integer array nums where the elements are sorted in ascending order, 
// convert it to a height-balanced binary search tree.



//----- SOLUTION -----//

// Start with the middle value in the array, which is the root

// Use a recursive helper function to insert the root node at the middle index
// Then, call the helper function twice to on the left and right sections of the array
// Return the root node in the helper function

// In the main function, call the helper function on the first and last node

// Video: https://www.youtube.com/watch?v=0K0uCMYq5ng



// This function converts an array of integers to a binary search tree
const sortedArrayToBST = function(nums) {
    
  // Create a helper function that takes the left and right indices and returns a root node
  // It must be declared inside the main function to access the nums array
  const helper = function(leftIndex, rightIndex) {

    // If left index is ever greater than right index, return null
    if (leftIndex > rightIndex) {
      return null; 
    }

    // Calculate the middle index in the array
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);   

    // Create the root using the value at the middle index
    let root = new TreeNode(nums[middleIndex]);

    // Set the root's left and right children recursively using the helper function
    root.left = helper(leftIndex, middleIndex - 1);
    root.right = helper(middleIndex + 1, rightIndex);
    
    // Return the created root node
    return root;
  }
  
  // Call the helper function with the first and last values in the array
  return helper(0, nums.length -1);
};
  
  