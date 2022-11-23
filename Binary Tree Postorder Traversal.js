const postorderTraversal = function(root) {

  if (root === null) {
    return [];
  }

  let leftValues = postorderTraversal(root.left);
  let rightValues = postorderTraversal(root.right);

  return [...leftValues, ...rightValues, root.val];

}
