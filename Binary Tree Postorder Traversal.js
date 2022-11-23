//----- QUESTION -----//

// Given the root of a binary tree, return the postorder traversal of its nodes' values.



//----- SOLUTION -----//

// Postorder Traversal is a type of Depth First Search.
// It can be performed iteratively or recursively,

// Postorder Traversal:
// 1. Visit the left subtree
// 2. Visit the right subtree
// 3. Visit the current node

//      A
//     / \
//    B   C
//   / \   \
//  D   E   F

// For the above binary tree, the postorder traversal is: D,E,B,F,C,A



//----- RECURSIVE SOLUTION -----//

// You can perform a Postorder Traversal on a binary tree using recursion.

// Base case: If the root node is null, return an empty array

// Recursive case: Store the left and right subtrees in variables
// Return the values in the left subtree and the values in the right subtree before the value of the root node:
// return [ ...leftValues, ...rightValues, root.val ]
// (The spread (...) operator unpacks the array so there are no nested arrays)



// This function performs a Postorder Traversal using recursion
const postorderTraversal = function(root) {

  // If the root is null, return an empty array (base case)
  if (root === null) {
    return [];
  }

  // Perform the postorder traversal on the left side of the tree and store the result
  let leftValues = postorderTraversal(root.left);

  // Perform the postorder traversal on the right side of the tree and store the result
  let rightValues = postorderTraversal(root.right);

  // Return the left value array and right value array before the root node value
  return [...leftValues, ...rightValues, root.val];
}


