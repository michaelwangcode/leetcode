//----- QUESTION -----//

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.



//----- SOLUTION -----//

// Compare the roots p and q in 3 ways, then call the isSameTree function on their left and right nodes
// 1. If p and q are both null, return true
// 2. Else if one of them is null, return false
// 3. If the values of p and q are not equal, return false

// Then, call the isSameTree function on p.left and q.left, and p.right and q.right
// and return the result



// This function takes the roots of two trees and returns if the trees are equal
const isSameTree = function(p, q) {
    
  // If the root nodes are both null, return true
  if (p === null && q === null) {
      return true;
      
  // Otherwise if one root is null and the other isn't, return false
  } else if (p === null || q === null) {
      return false;
  }
  
  // Compare the value of p and q, 
  if (p.val !== q.val) {
      return false;
  }
  
  // Call the function on the left and right nodes of p and q, and return the result
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};