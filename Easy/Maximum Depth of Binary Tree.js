//----- QUESTION -----//

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



//----- SOLUTION -----//

// The maximum depth is the longest path from the root to a leaf node

// Start at the root node
// If the root is null, return a height of 0
// If the root exists, return 1 plus the maximum height of its left of right subtree

// Video: https://www.youtube.com/watch?v=hTM3phVI6YQ



// This function returns the maximum depth of a binary tree
const maxDepth = function(root) {
    
  // If the root is null return a height of 0
  if (root === null) {
    return 0;
  }
  
  // Return 1 plus the larger of the left or right subtree
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
