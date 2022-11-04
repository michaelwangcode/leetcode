//----- QUESTION -----//

// Given an array of integers (positive and negative), find the subarray with the largest sum.
// Return its sum.



//----- SOLUTION -----//

// This problem can be solved in linear time using Kadane's algorithm.
// 1. Iterate through the array from start to finish.
// 2. Store the local maximum and global maximum.
//    Local maximum is the maximum between: a) The current element. b) The local maximum plus the current element
//    Global maximum is: The sum of the largest subarray.
// 3. If the local maximum is greater than the global maximum, set it to the global maximum.
// 4. Lastly, return the global maximum.

// Note: Kadane's algorithm does not work if all numbers are negative.

// Video: https://www.youtube.com/watch?v=5WZl3MMT0Eg



// Input: The array of integers
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];



// This function takes an array and returns the sum of the maximum subarray
const maxSubArray = function(nums) {


  // Kadane's algorithm doesn't work if all numbers are negative
  // Iterate through the array to check if that's the case
  
  // Store the largest number
  let largestNumber = nums[0];

  // Iterate through the array and check for the smallest number
  for (let i = 0; i < nums.length; i++) {

    // Store the max between the largest number and current number
    largestNumber = Math.max(largestNumber, nums[i]);
  }

  // If the largest number is negative,
  if (largestNumber < 0) {

    // Return it and exit the function
    return largestNumber;
  }


  // Otherwise, we can implement Kadane's Algorithm

  // Store the local maximum
  let localMaximum = 0;

  // Store the global maximum
  let globalMaximum = 0;


  // Iterate through the numbers array from beginning to end
  for (let i = 0; i < nums.length; i++) {

    // The local maximum is the bigger value between: 
    // 1. The current number, and 2. local maximum plus the current number
    localMaximum = Math.max(nums[i], localMaximum + nums[i]);
    
    // If the global maximum is smaller than the local maximum,
    if (globalMaximum < localMaximum) {

      // Update the global maximum to the local maximum
      globalMaximum = localMaximum;
    }
  }

  // Lastly, return the global maximum
  return globalMaximum;
};




// Test the maxSubArray function
console.log(maxSubArray([-1]));
