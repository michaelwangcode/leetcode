//----- QUESTION -----//

// Given an array of integers, return true if there are any duplicates.



//----- SOLUTION -----//

// Iterate through the array and use a hash map to store whether a number has already appeared.
// If the number appears in the hash map, return true
// Otherwise, add it to the hash map

// Video: https://www.youtube.com/watch?v=3OamzN90kPg



// Input: The array of numbers
nums = [1, 2, 3, 1];



// This function takes an integer array and return true if there are any duplicates
const containsDuplicate = function(nums) {
    
  // Create a hash map to store values
  let hashMap = {};
  
  // Iterate through the array
  for (let num of nums) {

    // If the number already exists in the hash map,
    if (hashMap[num]) {

      // Return true and exit the function
      return true;

    // Otherwise if the number is not in the hash map,
    } else {

      // Add it to the hash map
      hashMap[num] = true;
    }
  }

  // Return false if the loop ends and there are no duplicates
  return false;
};



// Test the containsDuplicate function
console.log(containsDuplicate(nums));
