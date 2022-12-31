//----- QUESTION -----//

// Given an unsorted array of integers, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Example: Input: [100,4,200,1,3,2]
// Output: 4
// The longest consecutive subsequence is 4 elements long: [1,2,3,4]



//----- SOLUTION -----//

// Add the numbers to a hash map so you can check if a number exists in constant O(n) time

// Iterate through the array
// To find the start of a sequence, make sure that the number before it is not in the hash map
// If the number is the start of a sequence, check if the next number exists and track the length of the sequence
// At the end, return the length of the longest sequence

// Video: https://www.youtube.com/watch?v=P6RZZMu_maU


// Input: An array of integers
const nums = [100,4,200,1,3,2];



// This function returns the length of the longest consecutive sequence
const longestConsecutive = function(nums) {
  
  // Create a hash map to store numbers in nums
  let hashMap = {};

  // Add numbers to the hash map
  for (let num of nums) {
    if (hashMap[num] === undefined) {
      hashMap[num] = true;
    }
  }


  // Store the longest subsequence length
  let longest = 0;

  // Iterate through nums, check if its the start of an array
  for (let num of nums) {

    // If the previous number doesn't exist in the hash map, it is the start of a sequence
    if (hashMap[num-1] === undefined) {

      // Store the current subsequence length
      let length = 1;

      // As long as the 
      while (hashMap[num + length] !== undefined) {
        length += 1;
      }

      // If the length is greater than the longest length, store it
      longest = Math.max(length, longest);
    }
  }

  // Return the longest length
  return longest;
};



// Test the longestConsecutive function
console.log(longestConsecutive(nums));



//----- BRUTE FORCE SOLUTION -----//

// Sort the array in ascending order
// Iterate through the array to check for consecutive sequences
// Store the longest sequence and return it
// This takes O(nlogn) time



// This function returns the length of the longest consecutive sequence
const longestConsecutive2 = function(nums) {
    
  // If the array is empty return 0
  if (nums.length === 0) {
    return 0;
  }

  // Sort the array in ascending order
  sorted = nums.sort((a,b) => a - b);

  // Store the longest and current longest sequences
  let longest = 1;
  let currentLongest = 1;

  // Iterate through the array
  for (let i = 0; i < sorted.length; i++) {

    // If the next number is the next consecutive number
    if (sorted[i] + 1 === sorted[i+1]) {

      // Increment the current longest number
      currentLongest += 1;

      // Store the 
      longest = Math.max(currentLongest, longest)

    // If the next number is the same, skip it and do nothing
    } else if (sorted[i] === sorted[i+1]){
      
    // Otherwise if the sequence is broken,
    } else {

      // Reset the current longest to 1
      currentLongest = 1;
    }
  }

  // Return the length of the longest sequence
  return longest;
};



// Test the longestConsecutive2 function
console.log(longestConsecutive(nums));
