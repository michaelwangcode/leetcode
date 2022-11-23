//----- QUESTION -----//

// Given an array of integers (positive and negative), return all combinations of three numbers that add up to 0
// There can not be any duplicates in the solution



//----- SOLUTION -----//

// Solve this problem by first sorting the array: .sort((a, b) => a - b))
// Then, iterate through each of the numbers (using a) and solve it like Two Sum II
// Start the left pointer at a + 1, and start the right pointer at the last element
// If the sum is larger than 0, advance the left pointer
// If the sum is smaller than 0, move the right pointer back by 1
// To prevent duplicates, use while loops to advance the pointers if the previous element is the same

// Video: https://www.youtube.com/watch?v=jzZsG8n2R9A



// Input: Array of integers
const nums = [-1, 0, 1, 2, -1, -4];



// This function takes an array of integers
// It returns all of the triplets that add up to 0, without duplicates
const threeSum = function(nums) {
    
  // Sort the array from smallest to largest
  nums.sort((a, b) => a - b);
    
  // Create the results array
  result = [];
  

  // Iterate through the numbers array
  for (a = 0; a < nums.length - 2; a++) {
       
    // Preventing duplicates: If nums[a] is the same as the number before it,
    while (a > 0 && nums[a] === nums[a - 1]) {

      // Move 'a' to the next number
      a += 1;
    }
       
    // Create the left pointer
    let l = a + 1;

    // Create the right pointer
    let r = nums.length - 1;

    // Iterate through the left and right pointers
    while (l < r) {
        
      // Store the triplet sum
      let threeSum = nums[a] + nums[l] + nums[r];

      // If the sum is too large,
      if (threeSum > 0) {

        // Move the right pointer back by 1
        r -= 1;
      
      // If the sum is too small,
      } else if (threeSum < 0) {

        // Move the left pointer forwards
        l += 1;

      // If the sum is 0,
      } else {

        // Append the result
        result.push([nums[a], nums[l], nums[r]]);

        // Move the left pointer forward
        l += 1;
        
        // Preventing duplicates: If nums[l] is the same as the number before it,
        while (nums[l] === nums[l - 1] && l < r) {
            
          // Move the left pointer forwards
          l += 1;
        }
      }
    }
  }
  
  // Return the results array
  return result;
};



// Test the threeSum function
console.log(threeSum(nums));
