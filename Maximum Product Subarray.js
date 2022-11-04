//----- QUESTION -----//

// Given an array of integers (positive and negative),
// Find the subarray with the maximum product and return that product



//----- SOLUTION -----//

// Iterate through the array and keep track of both the maximum and minimum products at that time
// Save the maximum value at each iteration
// (Use a temp variable to store the max before calculation)
// The solution will work even with 0's

// Video: https://www.youtube.com/watch?v=lXVy6YWFcRM
// Note: Video has a few unnecessary lines of code



// Input: An array of integers
const nums = [2, 3, -2, 4, 0];

// This function returns the max subarray product
const maxProduct = function(nums) {

  // Store the maximum product
  let maxProduct = nums[0];

  // Store the current max and min products
  let max = 1;
  let min = 1;


  // Iterate through all of the numbers
  for (let num of nums) {

    // Store the temp max product
    let tempMax = max * num;

    // Get the current maximum product
    max = Math.max(max * num, min * num, num);

    // Get the current minimum product
    min = Math.min(tempMax, min * num, num);

    // Set the max product by comparing the current max product
    maxProduct = Math.max(maxProduct, max);
  }

  // Return the maximum product
  return maxProduct;
}



// Test the maxProduct function
console.log(maxProduct(nums));

