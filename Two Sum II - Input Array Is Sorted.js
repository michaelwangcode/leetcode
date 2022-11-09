//----- QUESTION -----//

// Given a sorted array of integers and a target number,
// return indices of the two integers that add up to the target number.
// The array is 1-indexed (add 1 to index before returning.)



//----- SOLUTION -----//

// Use two pointers (one from the left, one from right) and check if the values add up to the target.
// If the sum is smaller than the target, move the left pointer forwards one and check again.
// If the sum is larger than the target, move the right pointer backwards one and try again.

// Video: https://www.youtube.com/watch?v=cQ1Oz4ckceM



// Input: Array of integers and target number
const numbers = [2,7,11,15];
const target = 9;



// This function takes an array of integers and target number
// It returns the indices of two integers that adds up to the target (1-indexed)
const twoSum = function(numbers, target) {
  
  // Set the left index to the first number
  let leftIndex = 0;

  // Set the right index to the last number
  let rightIndex = numbers.length - 1;

  // Iterate through the numbers array
  while (leftIndex < rightIndex) {

    // Store the current sum of the two numbers
    let sum = numbers[leftIndex] + numbers[rightIndex];

    // If the sum equals the target,
    if (sum === target) {

      // Return the indices + 1
      return [leftIndex + 1, rightIndex + 1];

    // If the sum is smaller than the target,
    } else if (sum < target) {

      // Move the left index forwards by 1
      leftIndex += 1;

    // If the sum is larger than the target,
    } else if (sum > target) {

      // Move the right index backwards by 1
      rightIndex -= 1;
    }
  }

  // Return a blank array if numbers are not found
  return [];
};



// Test the twoSum function
console.log(twoSum(numbers, target));
