// Video: https://www.youtube.com/watch?v=0K0uCMYq5ng



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
  
  