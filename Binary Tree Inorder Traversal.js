//----- QUESTION -----//

// Given the root of a binary tree, return the inorder traversal of its nodes' values.



//----- SOLUTION -----//


const inorderTraversal = function(root) {
    
  if (root === null) {
    return [];
  }
  
  let leftValues = inorderTraversal(root.left);
  let rightValues = inorderTraversal(root.right);
  
  return [...leftValues, root.val, ...rightValues];
  
};
