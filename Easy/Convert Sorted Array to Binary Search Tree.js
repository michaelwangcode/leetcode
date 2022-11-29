//----- QUESTION -----//

// Given an integer array nums where the elements are sorted in ascending order, 
// convert it to a height-balanced binary search tree.



//----- SOLUTION -----//







// Video: https://www.youtube.com/watch?v=0K0uCMYq5ng



// This function converts an array of integers to a binary search tree
const sortedArrayToBST = function(nums) {
    

  const helper = function(leftIndex, rightIndex) {

    if (leftIndex > rightIndex) {
      return null; 
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);   

    let root = new TreeNode(nums[middleIndex]);
    root.left = helper(leftIndex, middleIndex - 1);
    root.right = helper(middleIndex + 1, rightIndex);
    
    return root;
  }
  
  
  return helper(0, nums.length -1);
};
  
  