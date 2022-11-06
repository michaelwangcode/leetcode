//----- QUESTION -----//

// Given an array and an integer k, return true if there are any duplicates within k indices
// abs(i - j) <= k



//----- SOLUTION -----//

// Use a hash map to keep track of duplicates
// Check if there is a duplicate within k index position (current index - previous index <= k)
// If so, return true
// If not, store the current number in the has map with the index as the value



// Input: An array of integers and k value
const nums = [1, 2, 3, 1];
const k = 3;



// This function returns if there is a duplicate within k index positions
const containsNearbyDuplicate = function(nums, k) {
    
  // Create a hashMap to keep track of duplicates
  // Store the number as key and the index as value
  let hashMap = {};
  
  // Iterate through the numbers array
  for (let i = 0; i < nums.length; i++) {
      
    // If current index minus duplicate index is within k,
    if (i - hashMap[nums[i]] <= k) {

        // Duplicate found, return true
        return true
    }

    // If the current number is not in the hash map,
    // Or if it is but is not within k,
    // Store the current number in the hashmap with the current index
    hashMap[nums[i]] = i;
  }
  
  // If no duplicate is found, return false
  return false;
};



