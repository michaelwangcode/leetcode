//----- QUESTION -----//

// Given the root of a binary tree, return the preorder traversal of its nodes' values.



//----- SOLUTION -----//

// Preorder Traversal is a type of Depth First Search.
// It can be performed iteratively or recursively.

// Preorder Traversal: 
// 1. Visit the current node
// 2. Visit the left subtree
// 3. Visit the right subtree

//      A
//     / \
//    B   C
//   / \   \
//  D   E   F

// For the above binary tree, the preorder traversal is: A,B,D,E,C,F

// Video: https://www.youtube.com/watch?v=fAAZixBzIAI



//----- ITERATIVE SOLUTION -----//

// To perform Preorder Traversal iteratively, use a stack and a results array
// Use a 'current' variable to track the current node
// Add the root node to the stack
// If the root node is null, return []

// Iterate using a while loop
// As long as the stack is not empty,
// 1. Pop the top node and store it in current
// 2. Add the top node value to the results array
// 3. Push the right child to the stack
// 4. Push the left child to the stack



// This function performs a Preorder Traversal (Iterative Solution)
const preorderTraversalIterative = function(root) {
    
  // If the root is null, return an empty array
  if (root === null) {
    return [];
  }

  // The result array stores node values in the order they are visited
  let result = [];
  let stack = [root];
  
  // Iterate through the tree starting at the root
  while (stack.length > 0) {
      
    // Store the top node in the stack as the current node
    let current = stack.pop();
    
    // Add the current node's value to the results array
    result.push(current.val);
    
    // If the right child exists, push it to the stack
    if (current.right) {
      stack.push(current.right);
    }
    
    // If the left child exists, push it to the stack
    if (current.left) {
      stack.push(current.left);
    }
  }
  
  // Return the results array
  return result;
};



//----- RECURSIVE SOLUTION -----//

// You can perform a Preorder Traversal on a binary tree using recursion.

// Base case: If the root node is null, return an empty array

// Recursive case: Store the left and right subtrees in variables
// Return the value of the root node, plus the values in the left subtree and the values in the right subtree:
// return [ root.val, ...leftValues, ...rightValues]
// (The spread (...) operator unpacks the array so there are no nested arrays)



// This function performs a Preorder Traversal using recursion
const preorderTraversal = function (root) {

  // If the root is null, return an empty array (base case)
  if (root === null) { 
    return [];
  }

  // Perform the preorder traversal on the left side of the tree and store the result
  const leftValues = preorderTraversal(root.left);

  // Perform the preorder traversal on the right side of the tree and store the result
  const rightValues = preorderTraversal(root.right);

  // Return the root node value, followed by the left value array and right value array
  return [ root.val, ...leftValues, ...rightValues ];
}

