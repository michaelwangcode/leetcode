//----- QUESTION -----//

// Given the root of a binary tree, return the inorder traversal of its nodes' values.



//----- SOLUTION -----//

// Inorder Traversal is a type of Depth First Search.
// It can be performed iteratively or recursively.

// Inorder Traversal:
// 1. Visit the left subtree
// 2. Visit the current node
// 3. Visit the right subtree

//      A
//     / \
//    B   C
//   / \   \
//  D   E   F

// For the above binary tree, the inorder traversal is: 



//----- RECURSIVE SOLUTION -----//

// You can perform an Inorder Traversal on a binary tree using recursion.

// Base case: If the root node is null, return an empty array

// Recursive case: Store the left and right subtrees in variables
// Return the values in the left subtree, the value of the root node, then the values in the right subtree:
// return [ ...leftValues, root.val, ...rightValues ]
// (The spread (...) operator unpacks the array so there are no nested arrays)



// This function performs an Inorder Traversal using recursion
const inorderTraversal = function(root) {
    
  // If the root is null, return an empty array (base case)
  if (root === null) {
    return [];
  }
  
  // Perform the inorder traversal on the left side of the tree and store the result
  let leftValues = inorderTraversal(root.left);

  // Perform the inorder traversal on the right side of the tree and store the result
  let rightValues = inorderTraversal(root.right);
  
  // Return the left value array, root node value, then the right value array
  return [...leftValues, root.val, ...rightValues];
};


