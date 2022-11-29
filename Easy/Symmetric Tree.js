//----- QUESTION -----//

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).



//----- SOLUTION -----//

// This is similar to the "Same Tree" problem, except we compare opposite left/right nodes fo p and q

// We can do this with a helper function which compares the left and right node of the root node
// 1. If node 1 and node 2 are both null, return true
// 2. Otherwise if root 1 or root 2 are null, return false
// 3. If the values of root 1 and root 2 are not equal, return false

// Call the helper function from the main function and return the result



// This function checks if a tree is symmetric
const isSymmetric = function(root) {
    
  // Call the isMirror function 
  // It returns true if the left and right subrees are mirrored
  return isMirror(root.left, root.right);
};



// This helper function checks if node1 and node2's subtrees are a mirror of each other
function isMirror(node1, node2) {
  
  // If both nodes are null, return true
  if (node1 === null && node2 === null) { 
      return true; 
  
  // If one node is null and the other isn't, return false
  } else if (node1 === null || node2 === null) {
      return false; 
  }
  
  // If node 1 and node 2's value are different, return false
  if (node1.val !== node2.val) {
      return false;
  }
  
  // Call the isMirror function on the subtrees and return true if they are mirrors
  return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
};